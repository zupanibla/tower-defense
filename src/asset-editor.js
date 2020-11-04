import {initRenderer, render, adjustCanvasSize, setViewMatrix} from './rendering.js';
import {mat4} from 'gl-matrix';
import * as consoleUtils from './asset-editor-console-utils.js';

// TODO requestAnimationFrame speed depends on screen refresh rate?

// keyboard input - update variable keyboard on keydown/keyup events -
// - keyboard[KEY[*]] <=> * key is being held
let keyboard = {};
for (let i = 0; i < 100; i++) {
	keyboard[i] = false;
}

let KEY = {
	LEFT:     37,
	UP:       38,
	RIGHT:    39,
	DOWN:     40,
}
for (let i = 65; i <= 90; i++) {
	KEY[String.fromCharCode(i)] = i;
}

function isInputFocused() {
	return document.activeElement && (
			   (document.activeElement.tagName == 'INPUT' &&
			   document.activeElement.type == 'text')
			   ||
			   document.activeElement.tagName == 'TEXTAREA'
		   );
}

document.addEventListener('keydown', e => {
	// text inputs and textareas have priority
	// might be cleaner to do this via e.stopPropagation but whatever
	if (e.ctrlKey || isInputFocused()) return;

	keyboard[e.keyCode] = true;

	if (['LEFT', 'RIGHT', 'UP', 'DOWN'].map(it => KEY[it]).includes(e.keyCode)) {
		e.preventDefault();
	}
});
document.addEventListener('keyup', e => {
	keyboard[e.keyCode] = false;
});

// element handles
let importExportTabButton = document.querySelector('.import-export-tab-button');
let editTabButton         = document.querySelector('.edit-tab-button');
let importExportTab       = document.querySelector('.import-export-tab');
let editTab               = document.querySelector('.edit-tab');
let jsonInput             = document.querySelector('.json-input');
let invalidDataWarning    = document.querySelector('.invalid-data-warning');
let canvas                = document.querySelector('.game-canvas');
let resetCameraButton     = document.querySelector('.reset-camera-button');
let cuboidListWrapper     = document.querySelector('.cuboid-list-wrapper');
let addCuboidButton       = document.querySelector('.add-cuboid');
let speedSlider           = document.querySelector('.speed-slider');

// app state
// cuboids: {[x, y, z, sx, sy, sz]: number, [r, g, b]: 0 - 255, [name]: string, [mirror]: boolean}[]
let cuboids = [];
let cameraHorizontalAngle = 0, cameraVerticalAngle = Math.PI * (-1/4), cameraDistance = 5;
let prevMouseX, prevMouseY, dragging = false
let selectTimestamp = 0;
let selectedCuboids = [];
let cuboidListScroll = 0;
// stateCaptures: {cuboids, selectedCuboidIdxs, cuboidListScroll}[]
let stateCaptures = [];
let stateCaptureIdx = -1;

// set up console utils
window.getCuboids = () => { return JSON.parse(JSON.stringify(cuboids)); };
window.setCuboids = newCuboids => {
    cuboids = newCuboids;
    captureStateIfChanged();
    renderCuboidList();
}
window.utils = consoleUtils;

function selectCuboid(cuboid) {
	selectedCuboids = [cuboid];
	selectTimestamp = Date.now();
	captureStateIfChanged();
	renderCuboidList();
}

function toggleCuboidSelection(cuboid) {
	if (selectedCuboids.includes(cuboid)) {
		selectedCuboids.splice(selectedCuboids.indexOf(cuboid), 1);
	} else {
		selectedCuboids.push(cuboid);
	}
	captureStateIfChanged();
	selectTimestamp = Date.now();
	renderCuboidList();
}

function captureStateIfChanged() {
	if (stateCaptureIdx == -1 || JSON.stringify(cuboids) != JSON.stringify(stateCaptures[stateCaptureIdx].cuboids)) {
		stateCaptures = stateCaptures.slice(0, stateCaptureIdx+1);

		let selectedCuboidIdxs = selectedCuboids.map(it => cuboids.indexOf(it)).filter(it => it != -1);

		stateCaptures.push({
			cuboids: JSON.parse(JSON.stringify(cuboids)),
			selectedCuboidIdxs,
			cuboidListScroll,
		});
		stateCaptureIdx++;
	}
}

function loadState() {
	let state = stateCaptures[stateCaptureIdx];
	cuboids = JSON.parse(JSON.stringify(state.cuboids));

	selectedCuboids = [];
	for (let it of state.selectedCuboidIdxs) {
		selectedCuboids.push(cuboids[it]);
	}

	cuboidListScroll = state.cuboidListScroll;
	renderCuboidList();
}

// event handlers
// select all
document.addEventListener('keydown', e => {
	if (e.ctrlKey && e.key.toLowerCase() === 'a') {
		selectedCuboids = cuboids.slice();
		renderCuboidList();
	}
});

// undo/redo
document.addEventListener('keydown', e => {
	if (e.ctrlKey && !e.shiftKey && e.key.toLowerCase() === 'z') {
		if (stateCaptureIdx > 0) {
			// capture state first if it has changed
			captureStateIfChanged();
			
			stateCaptureIdx--;
			loadState();
			renderCuboidList();
		}
		e.preventDefault();
	}
});
document.addEventListener('keydown', e => {
	if (e.ctrlKey && (e.key.toLowerCase() === 'y' || e.shiftKey && e.key.toLowerCase() === 'z')) {
		if (stateCaptureIdx < stateCaptures.length-1) {
			stateCaptureIdx++;
			loadState();
			renderCuboidList();
		}
		e.preventDefault();
	}
});

// switching between tabs
importExportTabButton.addEventListener('click', e => {
	editTab.style.display         = 'none';
	importExportTab.style.display = 'block';

	jsonInput.value = JSON.stringify(cuboids, null, 2);
	invalidDataWarning.style.display = 'none';
});
editTabButton.addEventListener('click', e => {
	editTab.style.display         = 'block';
	importExportTab.style.display = 'none';
});

// json input
jsonInput.addEventListener('input', e => {
	// validate input first
	let newCuboids = [];
	try {
		newCuboids = JSON.parse(jsonInput.value);
		for (let it of newCuboids) {
		if (!(typeof it.x      == 'number' &&
			  typeof it.y      == 'number' &&
			  typeof it.z      == 'number' &&
			  typeof it.sx     == 'number' &&
			  typeof it.sy     == 'number' &&
			  typeof it.sz     == 'number' &&
			  typeof it.r      == 'number' &&
			  typeof it.g      == 'number' &&
			  typeof it.b      == 'number' &&
			  typeof it.sz     == 'number' &&
			  typeof it.name   == 'string' &&
			  typeof it.mirror == 'boolean'
		)) throw '';
		}
	} catch(err) {
		invalidDataWarning.style.display = 'block';
		return;
	}

	invalidDataWarning.style.display = 'none';
	cuboids = newCuboids;
	renderCuboidList();
});
jsonInput.addEventListener('blur', e => { captureStateIfChanged(); });

// camera movement
canvas.addEventListener('mousedown', e => {
	prevMouseX = e.screenX;
	prevMouseY = e.screenY;
	dragging = true;
});
canvas.addEventListener('mouseup', e => {
	dragging = false;
});
document.addEventListener('mousemove', e => {
	if (!dragging) return;
	cameraHorizontalAngle += (e.screenX - prevMouseX) * (Math.PI/500);
	cameraVerticalAngle   += (e.screenY - prevMouseY) * (Math.PI/500);
	cameraVerticalAngle    = Math.min(cameraVerticalAngle,  0);
	cameraVerticalAngle    = Math.max(cameraVerticalAngle, -Math.PI);
	prevMouseX = e.screenX;
	prevMouseY = e.screenY;
});

// camera zoom
canvas.addEventListener('wheel', e => {
	cameraDistance += Math.sign(e.deltaY) * 1/4;
	cameraDistance  = Math.min(cameraDistance,  100);
	cameraDistance  = Math.max(cameraDistance, 1);
});
resetCameraButton.addEventListener('click', e => {
	cameraHorizontalAngle = 0;
	cameraVerticalAngle = Math.PI * (-1/4);
	cameraDistance = 5;
});

// update cuboid positions when moving them with wasdeq
document.addEventListener('keyup', e => {
	if (isInputFocused()) return;
	if (['W', 'A', 'S', 'D', 'Q', 'E'].map(it => KEY[it]).includes(e.keyCode)) {
		captureStateIfChanged();
		renderCuboidList();
	}
});

// add cuboid button
addCuboidButton.addEventListener('click', e => {
	cuboids.unshift({
		name: 'faking kvader', mirror: false,
		x: 0, y: 0, z: 50, sx: 100, sy: 100, sz: 100,
		r: ~~(Math.random()*255), g: ~~(Math.random()*255), b: ~~(Math.random()*255),
	});
	selectCuboid(cuboids[0]);
	captureStateIfChanged();
});

function renderCuboidList() {
	let newCuboidList = document.createElement('div');
	newCuboidList.className = 'cuboid-list';
	for (let cub of cuboids) {
		// cuboid list item
		let item = document.createElement('div');
		item.className = 'cuboid-list-item';
		if (selectedCuboids.includes(cub)) {
			item.classList.add('selected');
		}
		newCuboidList.appendChild(item);
		item.addEventListener('mousedown', e => {
			if (e.ctrlKey) {
				toggleCuboidSelection(cub);
			} else {
				selectCuboid(cub);
			}
		});

		let colorHex = ((1 << 24) + (cub.r << 16) + (cub.g << 8) + cub.b).toString(16).substr(1);
		
		item.innerHTML = `
			<div class="cuboid-list-item-preview" style="background: rgb(${cub.r}, ${cub.g}, ${cub.b});"></div>

			<div class="cuboid-list-item-content">
				<input class="cuboid-list-item-name-input" value="${cub.name}">
				<input class="cuboid-list-item-color-input" type="color" value="#${colorHex}">
				<label class="mirror-label">
					<input class="mirror-checkbox" type="checkbox" ${cub.mirror ? 'checked' : ''}>mirror
				</label>
				<button class="move-up-button">&#8593;</button>
				<button class="move-down-button">&#8595;</button>
				<button class="clone-button">clone</button>
				<button class="x-button">&#215</button>

				<div class="cuboid-list-item-number-inputs">
					<label>x <br><input class="cuboid-list-item-x-input"></label>
					<label>y <br><input class="cuboid-list-item-y-input"></label>
					<label>z <br><input class="cuboid-list-item-z-input"></label>
					<label>sx <br><input class="cuboid-list-item-sx-input"></label>
					<label>sy <br><input class="cuboid-list-item-sy-input"></label>
					<label>sz <br><input class="cuboid-list-item-sz-input"></label>
				</div>

				<div class="cuboid-list-item-number-inputs">
					<label>fx <br><input class="cuboid-list-item-fx-input"></label>
					<label>fy <br><input class="cuboid-list-item-fy-input"></label>
					<label>fz <br><input class="cuboid-list-item-fz-input"></label>
					<label>bx <br><input class="cuboid-list-item-bx-input"></label>
					<label>by <br><input class="cuboid-list-item-by-input"></label>
					<label>bz <br><input class="cuboid-list-item-bz-input"></label>
				</div>
			</div>
		`;

		// element handles
		let cuboidListItemPreview = item.querySelector('.cuboid-list-item-preview');
		let nameInput             = item.querySelector('.cuboid-list-item-name-input');
		let colorInput            = item.querySelector('.cuboid-list-item-color-input');
		let mirrorCheckbox        = item.querySelector('.mirror-checkbox');
		let moveUpButton          = item.querySelector('.move-up-button');
		let moveDownButton        = item.querySelector('.move-down-button');
		let cloneButton           = item.querySelector('.clone-button');
		let xButton               = item.querySelector('.x-button');
		let labels                = item.querySelectorAll('label');
		let inputs                = item.querySelectorAll('input');

		// name input
		nameInput.addEventListener( 'input', e => { cub.name = nameInput.value; });

		// color input
		colorInput.addEventListener('input', e => {
			let n = parseInt(colorInput.value.slice(1), 16);
			cub.r = (n >> 16) & 255;
			cub.g = (n >> 8) & 255;
			cub.b = n & 255;
			cuboidListItemPreview.style.background = colorInput.value;
		});

		// mirror checkbox
		mirrorCheckbox.addEventListener('change',  e => { cub.mirror = mirrorCheckbox.checked; });

		// buttons
		moveUpButton.addEventListener('click', e => {
			let idx = cuboids.indexOf(cub);
			if (!idx || idx == 0) return;
			let temp = cuboids[idx];
			cuboids[idx] = cuboids[idx-1];
			cuboids[idx-1] = temp;
			captureStateIfChanged();
			renderCuboidList();
		});
		moveDownButton.addEventListener('click', e => {
			let idx = cuboids.indexOf(cub);
			if (idx === undefined || idx+1 >= cuboids.length) return;
			let temp = cuboids[idx];
			cuboids[idx] = cuboids[idx+1];
			cuboids[idx+1] = temp;
			captureStateIfChanged();
			renderCuboidList();
		});
		cloneButton.addEventListener('click', e => {
			cuboids.splice(cuboids.indexOf(cub)+1, 0, JSON.parse(JSON.stringify(cub)));
			captureStateIfChanged();
			renderCuboidList();
		});
		xButton.addEventListener('click', e => {
			if (selectedCuboids.includes(cub)) selectedCuboids.splice(selectedCuboids.indexOf(cub), 1);
			cuboids.splice(cuboids.indexOf(cub), 1);
			captureStateIfChanged();
			renderCuboidList();
		});

		// number inputs
		function updateInputValues(exception='') {
			for (let it of ['x', 'y', 'z', 'sx', 'sy', 'sz']) {
				if (it == exception) continue;
				item.querySelector(`.cuboid-list-item-${it}-input`).value = cub[it];
			}
			for (let it of ['x', 'y', 'z']) {
				if ('f'+it == exception) continue;
				item.querySelector(`.cuboid-list-item-f${it}-input`).value = cub[it] - cub['s'+it]/2;
			}
			for (let it of ['x', 'y', 'z']) {
				if ('b'+it == exception) continue;
				item.querySelector(`.cuboid-list-item-b${it}-input`).value = cub[it] + cub['s'+it]/2;
			}
		}
		updateInputValues();
		for (let it of ['x', 'y', 'z', 'sx', 'sy', 'sz']) {
			let input = item.querySelector(`.cuboid-list-item-${it}-input`);
			input.addEventListener('input',   e => {
				cub[it] = parseInt(input.value) || 0;
				updateInputValues(it);
				captureStateIfChanged();
			});
		}
		for (let it of ['x', 'y', 'z']) {
			let input = item.querySelector(`.cuboid-list-item-f${it}-input`);
			input.addEventListener('input', e => {
				let b = cub[it] + cub['s' + it]/2;
				let f = parseInt(input.value) || 0;
				cub['s' + it] = b - f;
				cub[it] = (f + b) / 2;
				updateInputValues('f'+it);
				captureStateIfChanged();
			});
		}
		for (let it of ['x', 'y', 'z']) {
			let input = item.querySelector(`.cuboid-list-item-b${it}-input`);
			input.addEventListener('input', e => {
				let f = cub[it] - cub['s' + it]/2;
				let b = parseInt(input.value) || 0;
				cub['s' + it] = b - f;
				cub[it] = (f + b) / 2;
				updateInputValues('b'+it);
				captureStateIfChanged();
			});
		}

		// don't trigger cuboid select on input interaction
		for (let it of [...inputs, ...labels, xButton, cloneButton, moveDownButton, moveUpButton]) {
			it.addEventListener('mousedown', e => { e.stopPropagation(); });
		}
	}
	cuboidListWrapper.replaceChild(newCuboidList, cuboidListWrapper.firstElementChild);

	// retain scroll position on rerender
	newCuboidList.scroll(0, cuboidListScroll);
	newCuboidList.addEventListener('scroll', e => {
		cuboidListScroll = newCuboidList.scrollTop;
	});
}


let frameCount = 0;

function update() {
	// selected cuboid movement and scaling
	let wasdTarget = document.querySelector('input[name="wasd-target"]:checked').value;

	for (let it of selectedCuboids) {
		if (frameCount % ~~(1/(speedSlider.value/1000)) == 0) {

			if (wasdTarget == 'position') {
				if (keyboard[KEY['A']]) it.x -= 4;
				if (keyboard[KEY['D']]) it.x += 4;
				if (keyboard[KEY['W']]) it.y += 4;
				if (keyboard[KEY['S']]) it.y -= 4;
				if (keyboard[KEY['Q']]) it.z -= 4;
				if (keyboard[KEY['E']]) it.z += 4;
			}
			if (wasdTarget == 'size') {
				if (keyboard[KEY['A']] && it.sx > 4) it.sx -= 4;
				if (keyboard[KEY['D']]) it.sx += 4;
				if (keyboard[KEY['W']]) it.sy += 4;
				if (keyboard[KEY['S']] && it.sy > 4) it.sy -= 4;
				if (keyboard[KEY['Q']] && it.sz > 4) it.sz -= 4;
				if (keyboard[KEY['E']]) it.sz += 4;
			}
			if (wasdTarget == 'front-corner-position') {
				if (keyboard[KEY['A']]) { it.sx += 4; it.x -= 4/2; }
				if (keyboard[KEY['D']] && it.sx > 4) { it.sx -= 4; it.x += 4/2; }
				if (keyboard[KEY['W']] && it.sy > 4) { it.sy -= 4; it.y += 4/2; }
				if (keyboard[KEY['S']]) { it.sy += 4; it.y -= 4/2; }
				if (keyboard[KEY['Q']]) { it.sz += 4; it.z -= 4/2; }
				if (keyboard[KEY['E']] && it.sz > 4) { it.sz -= 4; it.z += 4/2; }
			}
			if (wasdTarget == 'back-corner-position') {
				if (keyboard[KEY['A']] && it.sx > 4) { it.sx -= 4; it.x -= 4/2; }
				if (keyboard[KEY['D']]) { it.sx += 4; it.x += 4/2; }
				if (keyboard[KEY['W']]) { it.sy += 4; it.y += 4/2; }
				if (keyboard[KEY['S']] && it.sy > 4) { it.sy -= 4; it.y -= 4/2; }
				if (keyboard[KEY['Q']] && it.sz > 4) { it.sz -= 4; it.z -= 4/2; }
				if (keyboard[KEY['E']]) { it.sz += 4; it.z += 4/2; }
			}
		}
	}


	// rendering
	// update camera
	let m = mat4.create();
	mat4.translate(m, m, [0, 0, -cameraDistance]);
	mat4.rotateX(m, m, cameraVerticalAngle);
	mat4.rotateZ(m, m, cameraHorizontalAngle);
	setViewMatrix(m);

	// differences between cuboid and drawable: rgb scale, position scale, position is applyed via pivot,
	// , no name, no mirror
	function cuboidToDrawable(cub) {
		return {
			x: 0, y: 0, z: 0,
			sx: cub.sx * (3/256), sy: cub.sy * (3/256), sz: cub.sz * (3/256),
			r: cub.r/255, g: cub.g/255, b: cub.b/255,
			rot: 0,
			px: -cub.x * (3/256), py: -cub.y * (3/256), pz: -cub.z * (3/256),
		}
	}

	// drawables <- objects to render
	let drawables = [];

	// render axes if show-axes-checkbox checked
	if (document.querySelector('.show-axes-checkbox').checked) {
		drawables.push({
			x: 0, y: 0, z: 0, px: 0, py: 0, pz: 0, rot: 0,
			sx: 10.0, sy: 0.02, sz: 0.02,
			r: 1, g: 0, b: 0,
		}, {
			x: 0, y: 0, z: 0, px: 0, py: 0, pz: 0, rot: 0,
			sx: 0.02, sy: 10.0, sz: 0.02,
			r: 0, g: 1, b: 0,
		}, {
			x: 0, y: 0, z: 0, px: 0, py: 0, pz: 0, rot: 0,
			sx: 0.02, sy: 0.02, sz: 10.0,
			r: 0, g: 0, b: 1,
		});
	}

	// render tile sized rectangle if show-tile-size checked
	if (document.querySelector('.show-tile-size-checkbox').checked) {
		drawables.push({
			x: 0, y: 0, z: -4 * (3/256), px: 0, py: 0, pz: 0, rot: 0,
			sx: 256 * (3/256), sy: 256 * (3/256), sz: 8 * (3/256),
			r: 1, g: 1, b: 1,
		});
	}

	// render cuboids
	for (let cub of cuboids) {
		drawables.push(cuboidToDrawable(cub));

		if (cub.mirror) {
			let mirrorDrawable = cuboidToDrawable(cub);
			mirrorDrawable.px *= -1;
			drawables.push(mirrorDrawable);
		}
	}

	// render selected cuboid highlight
	for (let it of selectedCuboids) {
		if (Date.now() - selectTimestamp < 800 &&
			(Date.now() - selectTimestamp) % 400 < 200) {

			let highlightDrawable = {...cuboidToDrawable(it), r: 1, g: 1, b: 0};

			drawables.push(highlightDrawable);

			if (it.mirror) {
				let mirrorHighlightDrawable = {...cuboidToDrawable(it), r: 1, g: 1, b: 0};
				mirrorHighlightDrawable.px *= -1;
				drawables.push(mirrorHighlightDrawable);
			}
		}
	}

	adjustCanvasSize();
	render(drawables);
	requestAnimationFrame(update);
	frameCount++;
}

captureStateIfChanged();
initRenderer();
renderCuboidList();
update();

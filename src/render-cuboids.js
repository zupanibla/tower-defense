import {compileShaders} from './compile-shaders.js';
import shaders from './shaders.js';
import {mat4} from 'gl-matrix';


let canvas, gl, programs, vao, viewMatrix;

// NOTE a default value is set in initCuboidRenderer
export function setViewMatrix(m) {
	viewMatrix = m;
}

export function initCuboidRenderer() {

	canvas = document.querySelector('.game-canvas');

	gl = canvas.getContext('webgl2', {
		preserveDrawingBuffer: true,
	});

	// programs <- {cuboid: (cuboid shader) }
	programs = compileShaders(gl, shaders);

	// set default viewMatrix
	let m = mat4.create();
	mat4.translate(m, m, [0, 0, -5]);
	mat4.rotateX(m, m, Math.PI * (-1/4));
	setViewMatrix(m);

	// cuboid
	let vertices = [
		 // aPosition                 // aNormal
		 // Front face
		-1.0, -1.0,  1.0,  1.0, /**/  0.0,  0.0,  1.0,
		 1.0, -1.0,  1.0,  1.0, /**/  0.0,  0.0,  1.0,
		 1.0,  1.0,  1.0,  1.0, /**/  0.0,  0.0,  1.0,
		-1.0,  1.0,  1.0,  1.0, /**/  0.0,  0.0,  1.0,

		 // Back face
		-1.0, -1.0, -1.0,  1.0, /**/  0.0,  0.0, -1.0,
		-1.0,  1.0, -1.0,  1.0, /**/  0.0,  0.0, -1.0,
		 1.0,  1.0, -1.0,  1.0, /**/  0.0,  0.0, -1.0,
		 1.0, -1.0, -1.0,  1.0, /**/  0.0,  0.0, -1.0,

		 // Top face
		-1.0,  1.0, -1.0,  1.0, /**/  0.0,  1.0,  0.0,
		-1.0,  1.0,  1.0,  1.0, /**/  0.0,  1.0,  0.0,
		 1.0,  1.0,  1.0,  1.0, /**/  0.0,  1.0,  0.0,
		 1.0,  1.0, -1.0,  1.0, /**/  0.0,  1.0,  0.0,

		 // Bottom face
		-1.0, -1.0, -1.0,  1.0, /**/  0.0, -1.0,  0.0,
		 1.0, -1.0, -1.0,  1.0, /**/  0.0, -1.0,  0.0,
		 1.0, -1.0,  1.0,  1.0, /**/  0.0, -1.0,  0.0,
		-1.0, -1.0,  1.0,  1.0, /**/  0.0, -1.0,  0.0,

		 // Right face
		 1.0, -1.0, -1.0,  1.0, /**/  1.0,  0.0,  0.0,
		 1.0,  1.0, -1.0,  1.0, /**/  1.0,  0.0,  0.0,
		 1.0,  1.0,  1.0,  1.0, /**/  1.0,  0.0,  0.0,
		 1.0, -1.0,  1.0,  1.0, /**/  1.0,  0.0,  0.0,

		 // Left face
		-1.0, -1.0, -1.0,  1.0, /**/ -1.0,  0.0,  0.0,
		-1.0, -1.0,  1.0,  1.0, /**/ -1.0,  0.0,  0.0,
		-1.0,  1.0,  1.0,  1.0, /**/ -1.0,  0.0,  0.0,
		-1.0,  1.0, -1.0,  1.0, /**/ -1.0,  0.0,  0.0,
	];
	let indices = [
		0,  1,  2,      0,  2,  3,    // front
		4,  5,  6,      4,  6,  7,    // back
		8,  9,  10,     8,  10, 11,   // top
		12, 13, 14,     12, 14, 15,   // bottom
		16, 17, 18,     16, 18, 19,   // right
		20, 21, 22,     20, 22, 23,   // left
	];

	gl.clearColor(0.0, 0.0, 0.0, 1.0);  // Clear to black
	gl.clearDepth(1.0);                 // Clear everything
	gl.enable(gl.DEPTH_TEST);           // Enable depth testing
	gl.depthFunc(gl.LEQUAL);            // Near things obscure far things
	gl.enable(gl.CULL_FACE);            // Don't draw back faces (effeciency)

	// TODO no idea what this does
	vao = gl.createVertexArray();
	gl.bindVertexArray(vao);

	// push vertices to GPU
	let vertexBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

	// push indices to GPU
	let indexBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

	// aPosition: enable and layout
	gl.enableVertexAttribArray(0);
	gl.vertexAttribPointer(0, 4, gl.FLOAT, false, 28, 0);

	// aNormal: enable and layout
	gl.enableVertexAttribArray(1);
	gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 28, 16);

	// aMvpMatrix: enable and make instanced
	for (var i = 0; i < 4; i++) {
		gl.enableVertexAttribArray(2 + i);
		gl.vertexAttribDivisor(2 + i, 1);
	}

	// aNormalMatrix: enable and make instanced
	for (var i = 0; i < 4; i++) {
		gl.enableVertexAttribArray(6 + i);
		gl.vertexAttribDivisor(6 + i, 1);
	}

	// aColor: enable and make instanced
	gl.enableVertexAttribArray(10);
	gl.vertexAttribPointer(10, 4, gl.FLOAT, false, 64 + 64 + 16, 64 + 64);
	gl.vertexAttribDivisor(10, 1);
}

// cuboids: {
//     x, y, z,    // position
//     sx, sy, sz, // size
//     r, g, b,    // color
//     rot,        // rotation around z axis
//     px, py, pz  // pivot
// }[]
export function renderCuboids(cuboids) {

	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

	// create projectionMatrix based on canvas size
	// use orthographic projection
	let projectionMatrix = mat4.create();
	let w = canvas.clientWidth;
	let h = canvas.clientHeight;
	let downscale = 120;
	let near = 0.1;
	let far = 10000;
	mat4.ortho(projectionMatrix, -w/downscale, w/downscale, -h/downscale, h/downscale, near, far);

	// TODO no idea what this does
	gl.bindVertexArray(vao);

	let program = programs.cuboid;
	gl.useProgram(program.program);

	// mvpMatrixNormalMatrixColorData <-
	// <- [mvpR1, mvpR2, mvpR3, mvpR4, mvpR1, normalR1, normalR2, normalR3, normalR4, color, ...]
	let mvpMatrixNormalMatrixColorData = [];

	for (let cub of cuboids) {
		// model matrix
		let modelMatrix = mat4.create();
		mat4.translate(modelMatrix, modelMatrix, [cub.x, cub.y, cub.z]);
		mat4.rotateZ(  modelMatrix, modelMatrix, cub.rot);
		mat4.translate(modelMatrix, modelMatrix, [-cub.px, -cub.py, -cub.pz]);
		// divide sx,sy,sz by 2 because mesh size is 2
		mat4.scale(    modelMatrix, modelMatrix, [cub.sx/2, cub.sy/2, cub.sz/2]);

		// calculate and push aMvpMatrix to array
		let mvpMatrix = mat4.create();
		mat4.mul(mvpMatrix, viewMatrix, modelMatrix);
		mat4.mul(mvpMatrix, projectionMatrix, mvpMatrix);
		mvpMatrixNormalMatrixColorData.push(...mvpMatrix);

		// calculate and push aNormalMatrix to array
		let normalMatrix = mat4.create();
		mat4.rotateZ(normalMatrix, normalMatrix, cub.rot);
		mat4.invert(normalMatrix, normalMatrix);
		mat4.transpose(normalMatrix, normalMatrix);
		mvpMatrixNormalMatrixColorData.push(...normalMatrix);

		// push aColor to array
		mvpMatrixNormalMatrixColorData.push(cub.r, cub.g, cub.b, 1.0);
	}

	// push mvp matrices, normal matrices, colors to GPU
	let mvpMatrixNormalMatrixColorBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, mvpMatrixNormalMatrixColorBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(mvpMatrixNormalMatrixColorData), gl.DYNAMIC_DRAW);

	// aMvpMatrix: layout
	for (var i = 0; i < 4; i++) {
		gl.vertexAttribPointer(2 + i, 4, gl.FLOAT, false, 64 + 64 + 16, i * 16);
	}

	// aNormalMatrix: layout
	for (var i = 0; i < 4; i++) {
		gl.vertexAttribPointer(6 + i, 4, gl.FLOAT, false, 64 + 64 + 16, 64 + i * 16);
	}

	// aColors: layout
	gl.vertexAttribPointer(10, 4, gl.FLOAT, false, 64 + 64 + 16, 64 + 64);

	gl.drawElementsInstanced(gl.TRIANGLES, 36, gl.UNSIGNED_SHORT, 0, cuboids.length);
}

// Resize canvas and set viewport if client size changed
export function adjustCanvasSize() {
	if (canvas.width !== canvas.clientWidth ||
		canvas.height !== canvas.clientHeight)
	{
		canvas.width = canvas.clientWidth;
		canvas.height = canvas.clientHeight;
		gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
	}
}

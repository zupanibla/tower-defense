import {initRenderer, render, adjustCanvasSize} from './rendering.js';

console.log('Let\'s go!');

let cuboids = [
	{   // red
		x: 0, y: 0, z: 0, sx: 1, sy: 1, sz: 1, r: 1, g: 0, b: 0, rot: Math.PI * 1/6,
		px: 0, py: 0, pz: 0,
	},
	{   // yellow
		x: 2, y: 0, z: 0, sx: 1, sy: 1, sz: 2, r: 1, g: 1, b: 0, rot: Math.PI * 1/6,
		px: 0, py: 1, pz: -2,
	},
	{   // green
		x: 1, y: 0, z: 0, sx: 2, sy: 2, sz: 1, r: 0, g: 1, b: 0, rot: Math.PI * 1/6,
		px: -2, py: 0, pz: 2.5,
	},
];


initRenderer();

function update() {
	cuboids[0].rot += 0.005;
	cuboids[1].rot += 0.006;
	cuboids[2].rot += 0.007;

	adjustCanvasSize();
	render(cuboids);

	requestAnimationFrame(update);
}

update();

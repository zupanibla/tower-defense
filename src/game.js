import {initRenderer, render, adjustCanvasSize} from './rendering.js';

console.log('Let\'s go!');

let entities = [
    {x:  0,   y: 0, z: 0, w: 1, l: 1, h: 1, r: 1, g: 0, b: 0, rot: Math.PI * 1/6},  // red
    {x:  2.5, y: 0, z: 0, w: 1, l: 1, h: 2, r: 1, g: 1, b: 0, rot: Math.PI * 1/6},  // yellow
    {x: -2.5, y: 0, z: 0, w: 2, l: 2, h: 1, r: 0, g: 1, b: 0, rot: Math.PI * 1/6},  // green
];


initRenderer();

function update() {
    entities[0].rot += 0.005;
    entities[1].rot += 0.006;
    entities[2].rot += 0.007;

    adjustCanvasSize();
    render(entities);

    requestAnimationFrame(update);
}

update();

// import {mat4} from 'gl-matrix';
import * as html from './html-references.js';

// viewMatrix with a scale instead of rotateX and inverted
// const m = mat4.create();
// mat4.scale(m, m, [120, 120, -0.001]);      // tile size 120
// mat4.scale(m, m, [1, Math.cos(Math.PI * (-1/4)), 1]);
// mat4.rotateZ(m, m, Math.PI * (-1/4));   // rotate 45deg
// mat4.translate(m, m, [-5.5, -5.5, 0]);  // (0, 0) tile to (-5.5, -5.5) pos
// mat4.invert(m, m);
const m = new Float32Array([
    0.005892556626349688, 0.005892556626349688, -0, -0,
    -0.008333333767950535, 0.008333333767950535, -0, -0,
    -0, -0, -999.9999389648438, -0,
    5.5, 5.5, -0, 1,
]);

export function updateMouse(game) {
    // mouse pos to tile pos
    let normalMouseX =   2*(game.mouse.x / game.width)  - 1;   // between -1 and 1
    let normalMouseY = -(2*(game.mouse.y / game.height) - 1);  // between -1 and 1

    let normalMouseClickX =   2*(game.mouse.clickX / game.width)  - 1;   // between -1 and 1
    let normalMouseClickY = -(2*(game.mouse.clickY / game.height) - 1);  // between -1 and 1

    let x, y, v0, v1;

    // TODO weird range (-width, +width)
    x = normalMouseX * html.canvas.width;
    y = normalMouseY * html.canvas.height;
    v0 = m[0] * x + m[4] * y + m[12];
    v1 = m[1] * x + m[5] * y + m[13];

    game.mouse.tileX = Math.floor(v0 + 0.5);
    game.mouse.tileY = Math.floor(v1 + 0.5);

    x = normalMouseClickX * html.canvas.width;
    y = normalMouseClickY * html.canvas.height;
    v0 = m[0] * x + m[4] * y + m[12];
    v1 = m[1] * x + m[5] * y + m[13];

    game.mouse.clickedTileX = Math.floor(v0 + 0.5);
    game.mouse.clickedTileY = Math.floor(v1 + 0.5);
}
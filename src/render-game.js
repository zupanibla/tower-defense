import {mat4} from 'gl-matrix';
import {initRenderer as initCuboidRenderer, render as renderCuboids, adjustCanvasSize, setViewMatrix} from './rendering.js';

import duckJson  from './assets/duck.json';
import floorJson from './assets/floor.json';


export function renderGame(game) {
    adjustCanvasSize();

    let cuboids = [];

    for (let ent of game.entities) {
        
        // duck
        if (ent.type == 'duck') {
            let duckCuboids = cuboidsFromJson(duckJson);

            for (let it of duckCuboids) {
                it.x   = ent.x;
                it.y   = ent.y;
                it.z   = ent.z;
                it.rot = ent.rot;
            }

            cuboids.push(...duckCuboids);
        }

    }

    // floor
    cuboids.push(...cuboidsFromJson(floorJson));

    renderCuboids(cuboids);
}


export function initGameRenderer() {
    initCuboidRenderer();

    // set camera
    let m = mat4.create();
    mat4.translate(m, m, [0, 0, -10]);
    mat4.rotateX(m, m, Math.PI * (-1/4));
    setViewMatrix(m);
}


function cuboidsFromJson(modelJson) {
    let cuboids = [];

    for (let it of modelJson) {
        cuboids.push({
            name: it.name,
            x: 0, y: 0, z: 0,
            sx: it.sx * (3/256), sy: it.sy * (3/256), sz: it.sz * (3/256),
            r: it.r/255, g: it.g/255, b: it.b/255,
            rot: 0,
            px: -it.x * (3/256), py: -it.y * (3/256), pz: -it.z * (3/256),
        });

        if (it.mirror) {
            cuboids.push({
                name: it.name,
                x: 0, y: 0, z: 0,
                sx: it.sx * (3/256), sy: it.sy * (3/256), sz: it.sz * (3/256),
                r: it.r/255, g: it.g/255, b: it.b/255,
                rot: 0,
                px: +it.x * (3/256), py: -it.y * (3/256), pz: -it.z * (3/256),
            });
        }
    }

    return cuboids;
}


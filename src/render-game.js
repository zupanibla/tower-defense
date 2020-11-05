import {mat4} from 'gl-matrix';
import {initCuboidRenderer, renderCuboids, adjustCanvasSize, setViewMatrix} from './render-cuboids.js';

import duckJson      from './assets/duck.json';
import floorJson     from './assets/floor.json';
import tileJson      from './assets/tile.json';
import greenTileJson from './assets/green-tile.json';
import rockyTileJson from './assets/rocky-tile.json';
import pathTileJson  from './assets/path-tile.json';


export function renderGame(game) {
	adjustCanvasSize();

	let cuboids = [];

    // tiles
    for (let y = 0; y < game.tiles.length; y++) {
        for (let x = 0; x < game.tiles[y].length; x++) {
            let tile = game.tiles[y][x];
            let tileCuboids = null;

            if (tile == 1) tileCuboids = cuboidsFromJson(rockyTileJson);
            if (tile == 2) tileCuboids = cuboidsFromJson(pathTileJson);

            for (let it of tileCuboids) {
                it.x = x;
                it.y = y;
            }

            cuboids.push(...tileCuboids);
        }
    }

    // enemies
	for (let ent of game.enemies) {
		
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

	renderCuboids(cuboids);
}


export function initGameRenderer() {
	initCuboidRenderer();

	// set camera
    // NOTE transformations are applied bottom up
	let m = mat4.create();
	mat4.translate(m, m, [0, 6, -20]);      // camera pos
	mat4.rotateX(m, m, Math.PI * (-1/10));  // tilt world
    mat4.scale(m, m, [3, 3, 3]);            // tile size 3
    mat4.translate(m, m, [-7, -5.5, 0]);    // (0, 0) tile to (-7, -5.5) pos
	setViewMatrix(m);
}


function cuboidsFromJson(modelJson) {
	let cuboids = [];

	for (let it of modelJson) {
		cuboids.push({
			name: it.name,
			x: 0, y: 0, z: 0,
			sx: it.sx * 1/256, sy: it.sy * 1/256, sz: it.sz * 1/256,
			r: it.r/255, g: it.g/255, b: it.b/255,
			rot: 0,
			px: -it.x * 1/256, py: -it.y * 1/256, pz: -it.z * 1/256,
		});

		if (it.mirror) {
			cuboids.push({
				name: it.name,
				x: 0, y: 0, z: 0,
				sx: it.sx * 1/256, sy: it.sy * 1/256, sz: it.sz * 1/256,
				r: it.r/255, g: it.g/255, b: it.b/255,
				rot: 0,
				px: +it.x * 1/256, py: -it.y * 1/256, pz: -it.z * 1/256,
			});
		}
	}

	return cuboids;
}


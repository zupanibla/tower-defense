import {mat4} from 'gl-matrix';
import {initCuboidRenderer, renderCuboids, adjustCanvasSize, setViewMatrix} from './render-cuboids.js';

import duckJson           from './assets/duck.json';
import floorJson          from './assets/floor.json';
import tileJson           from './assets/tile.json';
import greenTileJson      from './assets/green-tile.json';
import rockyTileJson      from './assets/rocky-tile.json';
import pathTileJson       from './assets/path-tile.json';
import balisticTurretJson from './assets/balistic-turret.json';
import flameTurretJson    from './assets/flame-turret.json';
import snezakJson         from './assets/snezak.json';
import missileJson        from './assets/missile.json';
import bluePortalJson     from './assets/blue-portal.json';
import redPortalJson     from './assets/red-portal.json';


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

    // towers
    for (let y = 0; y < game.towers.length; y++) {
        for (let x = 0; x < game.towers[y].length; x++) {
            let tw = game.towers[y][x];
            if (tw === null) continue;

            let towerCuboids = null;
            
            if (tw.type == 'balistic') towerCuboids = cuboidsFromJson(balisticTurretJson);
            if (tw.type == 'flame')    towerCuboids = cuboidsFromJson(flameTurretJson);
            
            for (let it of towerCuboids) {
                it.x   = x;
                it.y   = y;

                if (it.name != 'stand' && it.name != 'base') {
                    it.rot = tw.rot;
                }
            }

            cuboids.push(...towerCuboids);
        }
    }

    // enemies
	for (let en of game.enemies) {

		// duck, snezak
        let enCuboids = [];

        if (en.type == 'duck')    enCuboids = cuboidsFromJson(duckJson);
        if (en.type == 'snezak')  enCuboids = cuboidsFromJson(snezakJson);

		for (let it of enCuboids) {
			it.x   = en.x;
			it.y   = en.y;
			it.z   = en.z;
			it.rot = en.rot;
		}

		cuboids.push(...enCuboids);
    }
    
    // environment
    for (let en of game.environment) {

        // bluePortal, redPortal
        let enCuboids = [];

        if (en.type == 'bluePortal') enCuboids = cuboidsFromJson(bluePortalJson);
        if (en.type == 'redPortal')  enCuboids = cuboidsFromJson(redPortalJson);

        for (let it of enCuboids) {
            it.x   = en.x;
            it.y   = en.y;
            it.z   = en.z;
            it.rot = en.rot;
        }

        cuboids.push(...enCuboids);
    }

    // bullets
    for (let bl of game.bullets) {
        // missile
        let blCuboids = [];

        if (bl.type == 'missile') blCuboids = cuboidsFromJson(missileJson);

        for (let it of blCuboids) {
            it.x   = bl.x;
            it.y   = bl.y;
            it.z   = bl.z;
            it.rot = bl.rot;
        }

        cuboids.push(...blCuboids);
    }

	renderCuboids(cuboids);
}


export function initGameRenderer() {
	initCuboidRenderer();

	// set camera, isometric view
    // NOTE transformations are applied bottom up
    let canvas = document.querySelector('.game-canvas');

    let m = mat4.create();
    mat4.scale(m, m, [120 / canvas.clientWidth, 120 / canvas.clientHeight, -0.001]);  // tile size 120px
    mat4.rotateX(m, m, Math.PI * (-1/4));   // tilt world
    mat4.rotateZ(m, m, Math.PI * (-1/4));   // rotate 45deg
    mat4.translate(m, m, [-5.5, -5.5, 0]);  // (0, 0) tile to (-5.5, -5.5) pos
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


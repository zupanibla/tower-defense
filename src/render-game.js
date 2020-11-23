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
import redPortalJson      from './assets/red-portal.json';
import greenHighlightJson from './assets/green-highlight.json';


export function renderGame(game) {
	adjustCanvasSize();

	let cuboids = [];

	// highlight
	//if (game.mouse.tileX >= 0 && game.mouse.tileX < 12 & game.mouse.tileY >= 0 && game.mouse.tileY < 12) {
	//    let hlCuboids = cuboidsFromJson(greenHighlightJson);
	//    for (let it of hlCuboids) {
	//        it.x = game.mouse.tileX;
	//        it.y = game.mouse.tileY;
	//    }
	//    cuboids.push(...hlCuboids);
	//}

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

	// handle tower on mouse
	if (game.mouse.tileX >= 0 && game.mouse.tileX < 12 & game.mouse.tileY >= 0 && game.mouse.tileY < 12 &&
		game.mouse.tower !== null && game.towers[game.mouse.tileY][game.mouse.tileX] === null
		&& game.tiles[game.mouse.tileY][game.mouse.tileX] !== 2) {

		// place tower
		if (game.mouse.isDown) {
			game.towers[game.mouse.tileY][game.mouse.tileX] =
				{type: game.mouse.tower.type, rot: 0, targetRot: 0, targetEn: null, cooldown: 0};
			// take player money and deselect tower from shop
			game.player.money -= game.mouse.tower.cost;
			game.mouse.tower.button.classList.remove('tower-selected');
			game.mouse.tower = null;
		}
		// show tower on mouse while placing
		else {
			let towerCuboids = null;

			if (game.mouse.tower.type == 'balistic')    towerCuboids = cuboidsFromJson(balisticTurretJson);
			if (game.mouse.tower.type == 'flame')       towerCuboids = cuboidsFromJson(flameTurretJson);

			for (let it of towerCuboids) {
				it.x = game.mouse.tileX;
				it.y = game.mouse.tileY;
				it.a = 0.6;
			}

			cuboids.push(...towerCuboids);
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

		// health bar
		let size = 0.6/100;
		let green = {
			x: en.x, y: en.y, z: 0,
			name: 'green',
			pz: -1.5, py: 0,
			sz: 10/256,    sy: 10/256,
			sx: en.health * size, px: (en.maxHealth - en.health)/2 * size,
			r: 0, g: 1, b: 0, a: 1,
			rot: Math.PI / 4,
		};
		let red = {
			x: en.x, y: en.y, z: 0,
			name: 'green',
			pz: -1.5, py: 0,
			sz: 10/256,  sy: 10/256,
			sx: (en.maxHealth - en.health) * size, px: -en.health/2 * size,
			r: 1, g: 0, b: 0, a: 1,
			rot: Math.PI / 4,
		};

		cuboids.push(green, red);
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

			// make the opening part of the portal transparent
			if (en.type == 'bluePortal' || en.type == 'redPortal') {
				if (it.name == 'plasma' || it.name == 'particle' || it.name == 'particle_mirror') {
					it.a   = 0.6;
				}
			}   
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

	// particles
	for (let pt of game.particles) {
		let cub = {
			name: 'particle',
			x: pt.x, y: pt.y, z: pt.z, rot: pt.rot,
			sx: pt.sx, sy: pt.sy, sz: pt.sz,
			px: 0, py: 0, pz: -pt.sz/2,
			r: pt.r, g: pt.g, b: pt.b, a: pt.a,
		}
		cuboids.push(cub);
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
			r: it.r/255, g: it.g/255, b: it.b/255, a: 1,
			rot: 0,
			px: -it.x * 1/256, py: -it.y * 1/256, pz: -it.z * 1/256,
		});

		if (it.mirror) {
			cuboids.push({
				name: it.name,
				x: 0, y: 0, z: 0,
				sx: it.sx * 1/256, sy: it.sy * 1/256, sz: it.sz * 1/256,
				r: it.r/255, g: it.g/255, b: it.b/255, a: 1,
				rot: 0,
				px: +it.x * 1/256, py: -it.y * 1/256, pz: -it.z * 1/256,
			});
		}
	}

	return cuboids;
}


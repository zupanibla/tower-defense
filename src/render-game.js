import {mat4} from 'gl-matrix';
import {initCuboidRenderer, renderCuboids, adjustCanvasSize, setViewMatrix, setProjectionMatrix} from './render-cuboids.js';

import duckJson           	from './models/duck.json';
import floorJson          	from './models/floor.json';
import tileJson           	from './models/tile.json';
import greenTileJson      	from './models/green-tile.json';
import rockyTileJson      	from './models/rocky-tile.json';
import pathTileJson       	from './models/path-tile.json';
import balisticTurretJson 	from './models/balistic-turret.json';
import flameTurretJson    	from './models/flame-turret.json';
import laserTurretJson    	from './models/laser-turret.json';
import oilTurretJson      	from './models/oil-turret.json';
import snezakJson         	from './models/snezak.json';
import butcherJson        	from './models/butcher.json';
import missileJson        	from './models/missile.json';
import bluePortalJson     	from './models/blue-portal.json';
import redPortalJson      	from './models/red-portal.json';
import greenHighlightJson 	from './models/green-highlight.json';
import vekJson            	from './models/vek.json';
import vek2Json           	from './models/vek2.json';
import gooJson				from './models/goo.json';
import grapplingTurretJson from './models/grappling-turret.json';


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

	// handle tower on mouse
	if (game.mouse.tileX >= 0 && game.mouse.tileX < 12 & game.mouse.tileY >= 0 && game.mouse.tileY < 12 &&
		game.mouse.tower !== null && game.towers[game.mouse.tileY][game.mouse.tileX] === null
		&& game.tiles[game.mouse.tileY][game.mouse.tileX] !== 2) {

		// show tower on mouse while placing
		let towerCuboids = null;

		if (game.mouse.tower.type == 'balistic')	towerCuboids = cuboidsFromJson(balisticTurretJson);
		if (game.mouse.tower.type == 'flame')	    towerCuboids = cuboidsFromJson(flameTurretJson);
        if (game.mouse.tower.type == 'laser')       towerCuboids = cuboidsFromJson(laserTurretJson);
        if (game.mouse.tower.type == 'oil')         towerCuboids = cuboidsFromJson(oilTurretJson);

		for (let it of towerCuboids) {
			it.x = game.mouse.tileX;
			it.y = game.mouse.tileY;
			it.a = 0.6;
		}

		cuboids.push(...towerCuboids);
	}

	// towers
	for (let y = 0; y < game.towers.length; y++) {
		for (let x = 0; x < game.towers[y].length; x++) {
			let tw = game.towers[y][x];
			if (tw === null) continue;

			let towerCuboids = null;
			
			if (tw.type == 'balistic')  towerCuboids = cuboidsFromJson(balisticTurretJson);
			if (tw.type == 'flame')     towerCuboids = cuboidsFromJson(flameTurretJson);
			if (tw.type == 'laser')	    towerCuboids = cuboidsFromJson(laserTurretJson);
            if (tw.type == 'oil')       towerCuboids = cuboidsFromJson(oilTurretJson);
            if (tw.type == 'grappling') towerCuboids = cuboidsFromJson(grapplingTurretJson);
            if (tw.type == 'blank')     towerCuboids = [];

            // hook animation
            if (tw.type == 'grappling') {
                for (let it of towerCuboids) {
                    if (it.name == 'hook') it.py += tw.hookDist;
                    if (it.name == 'rope') {
                        it.py += tw.hookDist/2;
                        it.sy += tw.hookDist;
                    }
                    if (it.name == 'indicator') {
                        let p = Math.min(1, (game.time - tw.usedTime) / 240); 
                        if (tw.ready) p = 0;

                        it.r = p * it.r + (1-p) * 1;
                        it.g = p * it.g + (1-p) * 1;
                        it.b = p * it.b + (1-p) * 0;
                    }
                }
            }

			
			for (let it of towerCuboids) {
				it.x   = x;
				it.y   = y;

				if (it.name != 'stand' && it.name != 'base' && it.name != 'fixed') {
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

		if (en.type == 'duck')	  enCuboids = cuboidsFromJson(duckJson);
		if (en.type == 'snezak')  enCuboids = cuboidsFromJson(snezakJson);
        if (en.type == 'butcher') enCuboids = cuboidsFromJson(butcherJson);
        if (en.type == 'vek')     enCuboids = cuboidsFromJson(vekJson);
        if (en.type == 'vek2')    enCuboids = cuboidsFromJson(vek2Json);
        if (en.type == 'goo')     enCuboids = cuboidsFromJson(gooJson);


        // vek animation
        if (en.type == 'vek') {
            for (let it of enCuboids) {
                if (['legs1', 'legs1inner', 'legs2', 'legs2inner', 'legs3', 'legs3inner'].includes(it.name)) {
                    it.py += Math.sin(game.time / 2) * 0.03
                    * Math.sign(it.px)
                    * (['legs2', 'legs2inner'].includes(it.name) ? -2 : 2);
                    it.pz += -Math.cos(game.time / 2) * 0.022
                    * Math.sign(it.px)
                    * (['legs2', 'legs2inner'].includes(it.name) ? -2 : 2);
                }
            }
        }

        // vek2 animation
        if (en.type == 'vek2') {
            for (let it of enCuboids) {
                if (['legs1', 'legs1inner', 'legs2', 'legs2inner', 'legs3', 'legs3inner'].includes(it.name)) {
                    it.py += Math.sin(game.time / 3) * 0.05
                             * Math.sign(it.px)
                             * (['legs2', 'legs2inner'].includes(it.name) ? -2 : 2);
                    it.pz += -Math.cos(game.time / 3) * 0.04
                                 * Math.sign(it.px)
                                 * (['legs2', 'legs2inner'].includes(it.name) ? -2 : 2);
                }
            }
		}

		// fried ducks
		if (en.type == 'duck') {
			for (let it of enCuboids) {
				// don't fry them cute eyes
				if (it.name == 'eyes') continue;
                applyFriednessFilter(it, en.friedness / 100);
                applyOilynessFilter( it, en.oilyness / 100);
			}
		} else {
            for (let it of enCuboids) {
                applyOilynessFilter(it, en.oilyness / 100);
            }
        }


		let alpha = 1;
		if (en.type == 'goo') {
            alpha = 0.5;
		}
		// fade in enemies when they come out of portal (first 0.5 of the path)
		if (en.pathPos < 0.5) {
			alpha = Math.max(0, en.pathPos) * alpha * 2;
		}
		// fade out enemies when that go in portal (last 0.5 of the path)
		if (en.pathPos > game.pathLen - 0.5) {
			alpha = 1 - Math.min(en.pathPos - (game.pathLen-0.5), 0.5) * alpha * 2;
		}

		for (let it of enCuboids) {
			it.x   = en.x;
			it.y   = en.y;
			it.z   = en.z;
			it.rot = en.rot;
			it.a   = alpha;
		}
		// goo flatten on landing
		if (en.type == 'goo') {
            for (let it of enCuboids) {
				if (en.jumpCooldown < 15) {
					it.sz *= 0.5 + 0.5 * en.jumpCooldown / 15;
					it.sx *= 1 + 0.5 * (1 - en.jumpCooldown / 15);
					it.sy *= 1 + 0.5 * (1 - en.jumpCooldown / 15);
				}
			}
		}

		cuboids.push(...enCuboids);

		// health bar
		let size    = 0.6/100;
		let zOffset = -1.5;
		if (en.type == 'butcher') zOffset = -3;
		
		let green = {
			x: en.x, y: en.y, z: 0,
			name: 'green',
			pz: zOffset, py: 0,
			sz: 10/256,    sy: 10/256,
			sx: en.health * size, px: (en.maxHealth - en.health)/2 * size,
			r: 0, g: 1, b: 0, a: 1,
			rot: Math.PI / 4,
		};
		let red = {
			x: en.x, y: en.y, z: 0,
			name: 'green',
			pz: zOffset, py: 0,
			sz: 10/256,  sy: 10/256,
			sx: (en.maxHealth - en.health) * size, px: -en.health/2 * size,
			r: 1, g: 0, b: 0, a: 1,
			rot: Math.PI / 4,
		};

		cuboids.push(green, red);
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

	let v = mat4.create();
	mat4.scale(v, v, [120 / canvas.clientWidth, 120 / canvas.clientHeight, -0.001]);  // tile size 120px
	mat4.rotateX(v, v, Math.PI * (-1/4));   // tilt world
	mat4.rotateZ(v, v, Math.PI * (-1/4));   // rotate 45deg
	mat4.translate(v, v, [-5.5, -5.5, 0]);  // (0, 0) tile to (-5.5, -5.5) pos
	setViewMatrix(v);

    // TODO move projection component here
    let p = mat4.create();
    setProjectionMatrix(p);
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

// params all between 0 and 1
function applyOilynessFilter(rgb, oilyness) {
    let oilColor = [47, 214, 100];
    rgb.r = rgb.r * (1 - oilyness*0.8) + oilColor[0]/256 * oilyness*0.8;
    rgb.g = rgb.g * (1 - oilyness*0.8) + oilColor[1]/256 * oilyness*0.8;
    rgb.b = rgb.b * (1 - oilyness*0.8) + oilColor[2]/256 * oilyness*0.8;
}
export function applyFriednessFilter(rgb, friedness) {
    rgb.r *= 1 - friedness;
    rgb.g *= 1 - friedness;
    rgb.b *= 1 - friedness;
}

// distance between two points : {x,y,z}
function dist(a, b) {
    return Math.sqrt((a.x - b.x)*(a.x - b.x) + (a.y - b.y)*(a.y - b.y) + (a.z - b.z)*(a.z - b.z));
}
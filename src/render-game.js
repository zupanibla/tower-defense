import {initCuboidRenderer, renderCuboids, adjustCanvasSize, setViewProjectionMatrix, pushCuboid as pushCuboidData, getCuboidCount, setCuboidCount, setSkippableCuboidCount} from './render-cuboids.js';

import iceTileJson          from './models/ice-tile.json';
import mountainTileJson     from './models/mountain-tile.json';
import snowTileJson         from './models/snow-tile.json';
import asphaltTileJson      from './models/asphalt-tile.json';
import missileTurretJson 	from './models/missile-turret.json';
import flameTurretJson    	from './models/flame-turret.json';
import laserTurretJson    	from './models/laser-turret.json';
import oilTurretJson      	from './models/oil-turret.json';
import novaTurretJson		from './models/nova-turret.json';
import missileJson        	from './models/missile.json';
import bluePortalJson     	from './models/blue-portal.json';
import redPortalJson      	from './models/red-portal.json';
import vekJson            	from './models/vek.json';
import vek2Json           	from './models/vek2.json';
import gooJson				from './models/goo.json';
import gooSmallJson			from './models/goo-small.json';
import gooBigJson			from './models/goo-big.json';
import gooBossJson			from './models/goo-boss.json';
import yellowScarabJson		from './models/scarab-yellow.json';
import blueScarabJson		from './models/scarab-blue.json';


const cuboids = {
    'ice-tile':        cuboidsFromJson(iceTileJson),
    'mountain-tile':   cuboidsFromJson(mountainTileJson),
    'snow-tile':       cuboidsFromJson(snowTileJson),
    'asphalt-tile':    cuboidsFromJson(asphaltTileJson),
    'missile':         cuboidsFromJson(missileTurretJson),
    'flame':           cuboidsFromJson(flameTurretJson),
    'laser':           cuboidsFromJson(laserTurretJson),
    'oil':             cuboidsFromJson(oilTurretJson),
    'nova':            cuboidsFromJson(novaTurretJson),
    'missile-bullet':  cuboidsFromJson(missileJson),
    'blue-portal':     cuboidsFromJson(bluePortalJson),
    'red-portal':      cuboidsFromJson(redPortalJson),
    'vek':             cuboidsFromJson(vekJson),
    'vek2':            cuboidsFromJson(vek2Json),
    'goo':             cuboidsFromJson(gooJson),
    'goo-small':       cuboidsFromJson(gooSmallJson),
    'goo-big':         cuboidsFromJson(gooBigJson),
    'goo-boss':        cuboidsFromJson(gooBossJson),
    'scarab-yellow':   cuboidsFromJson(yellowScarabJson),
    'scarab-blue':     cuboidsFromJson(blueScarabJson),
}

// make the opening part of the portal transparent
for (const it of [...cuboids['blue-portal'], ...cuboids['blue-portal']]) {
    if (it.name == 'plasma' || it.name == 'particle' || it.name == 'particle_mirror') {
        it.a   = 0.6;
    }
}

const tempCuboid = {
    name: 'temp',
    x: 0, y: 0, z: 0,
    sx: 0, sy: 0, sz: 0,
    r: 0, g: 0, b: 0, a: 1,
    rot: 0,
    px: 0, py: 0,
};

let canvas = document.querySelector('.game-canvas');
let staticCuboidCount = 0;

// set camera, isometric view
// NOTE transformations are applied bottom up
// const m = mat4.create();
// mat4.scale(m, m, [120, 120, -0.001]);  // tile size 120px
// mat4.rotateX(m, m, Math.PI * (-1/4));   // tilt world
// mat4.rotateZ(m, m, Math.PI * (-1/4));   // rotate 45deg
// mat4.translate(m, m, [-5.5, -5.5, 0]);  // (0, 0) tile to (-5.5, -5.5) pos
const m = new Float32Array([
        84.85281372070312, -60, -0.0005000000237487257, 0,
        84.85281372070312, 60, 0.0005000000237487257,
        0, 0, 84.85281372070312, -0.0007071068393997848, 0,
        -933.3809814453125, 0, 0, 1,
]);

const viewProjectionMatrix = new Float32Array(m);

export function renderGame(game) {
    adjustCanvasSize();

    viewProjectionMatrix.set(m);
    // mat4.scale(viewProjectionMatrix, viewProjectionMatrix, [1 / canvas.width, 1 / canvas.height, 1]);
    viewProjectionMatrix[0]  /= canvas.width;
    viewProjectionMatrix[4]  /= canvas.width;
    viewProjectionMatrix[8]  /= canvas.width;
    viewProjectionMatrix[12] /= canvas.width;
    viewProjectionMatrix[1]  /= canvas.height;
    viewProjectionMatrix[5]  /= canvas.height;
    viewProjectionMatrix[9]  /= canvas.height;
    viewProjectionMatrix[13] /= canvas.height;

    setViewProjectionMatrix(viewProjectionMatrix);

    // load static cuboids into buffer only once
    if (staticCuboidCount == 0) {
        // tiles
        for (let y = game.tiles.length-1; y >= 0; y--) {
            for (let x = 0; x < game.tiles[y].length; x++) {
                let tile = game.tiles[y][x];

                let tileCuboids = null;
                if (tile == 1) tileCuboids = cuboids['snow-tile'];
                if (tile == 2) tileCuboids = cuboids['asphalt-tile'];
                if (tile == 3) tileCuboids = cuboids['ice-tile'];
                if (tile == 4) tileCuboids = cuboids['mountain-tile'];

                // we don't need to render covered parts of tiles if they aren't in front
                if (x != 11 && y != 0) tileCuboids = tileCuboids.filter(it => it.name != 'covered');

                for (let it of tileCuboids) {
                    pushCuboidXYZRot(it, x, y, 0, 0);
                }
            }
        }

        // draw portals
        for (const it of cuboids['blue-portal']) {
            pushCuboidXYZRot(it, 8, -1, -0.35, 0);
        }
        for (const it of cuboids['red-portal']) {
            pushCuboidXYZRot(it,  1, 12, -0.35, 0);
        }

        staticCuboidCount = getCuboidCount();
    } else {
        setCuboidCount(staticCuboidCount);
        setSkippableCuboidCount(staticCuboidCount);
    }



    // tower silhouette on hovered tile
    if (game.mouse.tileX >= 0 && game.mouse.tileX < 12 & game.mouse.tileY >= 0 && game.mouse.tileY < 12 &&
        game.selectedShopItemIdx != -1 && game.towers[game.mouse.tileY][game.mouse.tileX] === null
        && game.tiles[game.mouse.tileY][game.mouse.tileX] == 1) {

        const selectedTowerType = game.shopItems[game.selectedShopItemIdx].type;
        const towerCuboids = cuboids[selectedTowerType]

        for (let it of towerCuboids) {
            pushCuboidXYZRotAlpha(it, game.mouse.tileX, game.mouse.tileY, 0, 0, 0.6);
        }
    }

    // towers
    for (let y = 0; y < game.towers.length; y++) {
        for (let x = 0; x < game.towers[y].length; x++) {
            let tw = game.towers[y][x];
            if (tw === null) continue;
            

            const towerCuboids = cuboids[tw.type];

            for (let it of towerCuboids) {
                copyCuboid(tempCuboid, it);
                it = tempCuboid;

                // nova tower regen animation
                if (tw.type == 'nova') {
                    if (it.name == 'base') {
                        let p = (1 - tw.cooldown / 120); 

                        it.r = p * it.r;
                        it.g = p * it.g;
                        it.b = p * it.b;
                    }
                }

                // missile turret kickback
                if (tw.type == 'missile') {
                    if (it.name != 'stand') {
                        const p = Math.min(60 - tw.cooldown, 10) / 10;
                        it.py -= Math.sin(Math.PI * p) * 0.2;
                    }
                }

				if (it.name != 'stand' && it.name != 'base' && it.name != 'fixed') {
                    pushCuboidXYZRot(it, x, y, 0, tw.rot);
				} else {
                    pushCuboidXYZRot(it, x, y, 0, 0);
                }
			}
		}
	}

	// particles
	for (let pt of game.particles) {
		pushCuboidData(
            pt.x, pt.y, pt.z + pt.sz/2,
            pt.sx, pt.sy, pt.sz,
            0, 0,
            pt.rot,
            pt.r, pt.g, pt.b, pt.a
        );
	}

	// enemies
	for (let en of [...game.enemies].reverse()) {

		// health bar
		let size    = 0.6/100;
		let zOffset = -1.5;
		if (en.type == 'butcher') zOffset = -3;
		if (en.type == 'goo-boss') zOffset = -3;
		if (en.type == 'goo-big') zOffset = -2;

		pushCuboidData(  // green
            en.x, en.y, -zOffset,
            en.health * size, 10/256, 10/256,
            (en.maxHealth - en.health)/2 * size, 0,
            Math.PI / 4,
            0, 1, 0, 1,
        );

        pushCuboidData(  // red
            en.x, en.y, -zOffset,
            (en.maxHealth - en.health) * size, 10/256, 10/256,
            -en.health/2 * size, 0,
            Math.PI / 4,
            1, 0, 0, 1,
        );

		const enCuboids = cuboids[en.type];

        for (let it of enCuboids) {
            copyCuboid(tempCuboid, it);
            it = tempCuboid;

            // oilyness
            applyOilynessFilter(it, en.oilyness / 100);

            // vek animation
            if (en.type == 'vek' && ['legs1', 'legs1inner', 'legs2', 'legs2inner', 'legs3', 'legs3inner'].includes(it.name)) {
                it.py +=  Math.sin(game.time / 2) * 0.03
                			* Math.sign(it.px)
                			* (['legs2', 'legs2inner'].includes(it.name) ? -2 : 2);
                it.z  -= -Math.cos(game.time / 2) * 0.022
                			* Math.sign(it.px)
                			* (['legs2', 'legs2inner'].includes(it.name) ? -2 : 2);
            }

            // vek2 animation
            if (en.type == 'vek2' && ['legs1', 'legs1inner', 'legs2', 'legs2inner', 'legs3', 'legs3inner'].includes(it.name)) {
                it.py += Math.sin(game.time / 3) * 0.05
                         	* Math.sign(it.px)
                         	* (['legs2', 'legs2inner'].includes(it.name) ? -2 : 2);
                it.z -= -Math.cos(game.time / 3) * 0.04
                            * Math.sign(it.px)
                            * (['legs2', 'legs2inner'].includes(it.name) ? -2 : 2);
            }

		    // scarab animation
		    if ((en.type == 'scarab-blue' || en.type == 'scarab-yellow') && ['legs1', 'legs1inner', 'legs3'].includes(it.name)) {
                it.py += Math.sin(game.time / 2) * 0.03
                			* Math.sign(it.px)
                			* (['legs3'].includes(it.name) ? -2 : 2);
                it.z  -= -Math.cos(game.time / 2) * 0.022
                			* Math.sign(it.px)
                			* (['legs3'].includes(it.name) ? -2 : 2);
		    }

            let alpha = 1;
            if (en.type == 'goo' || en.type == 'goo-small' || en.type == 'goo-big' || en.type == 'goo-boss') {
                alpha = 0.6;
    		}
    		// fade in enemies when they come out of portal (first 0.5 of the path)
    		if (en.pathPos < 0.5) {
    			alpha = Math.max(0, en.pathPos) * alpha * 2;
    		}
    		// fade out enemies when that go in portal (last 0.5 of the path)
    		if (en.pathPos > game.pathLen - 0.5) {
    			alpha = 1 - Math.min(en.pathPos - (game.pathLen-0.5), 0.5) * alpha * 2;
    		}

			if (it.name == 'canister') it.a = 0.7;

    		// goo flatten on landing
    		if ( (en.type == 'goo' || en.type == 'goo-small' || en.type == 'goo-big' || en.type == 'goo-boss') && en.jumpCooldown < 15) {
				it.sz *= 0.5 + 0.5 * en.jumpCooldown / 45;
				it.sx *= 1 + 0.5 * (1 - en.jumpCooldown / 45);
				it.sy *= 1 + 0.5 * (1 - en.jumpCooldown / 45);
    		}

    		// remove vek armor on less than half hp
    		if (en.type == 'vek' && it.name == 'armor' && !en.hasArmor) {
			    alpha = 0;
		    }

	        pushCuboidXYZRotAlpha(it, en.x, en.y, en.z, en.rot, alpha);
        }
	}

	// bullets (missiles)
	for (let bl of game.bullets) { 
        for (const it of cuboids['missile-bullet']) {
            pushCuboidXYZRot(it, bl.x, bl.y, bl.z, bl.rot);
        }
	}

	renderCuboids();
}

export function initGameRenderer() {
    initCuboidRenderer();
}

function copyCuboid(dst, src) {
    dst.name = src.name;
    dst.x    = src.x;
    dst.y    = src.y;
    dst.z    = src.z;
    dst.sx   = src.sx;
    dst.sy   = src.sy;
    dst.sz   = src.sz;
    dst.r    = src.r;
    dst.g    = src.g;
    dst.b    = src.b;
    dst.a    = src.a;
    dst.rot  = src.rot;
    dst.px   = src.px;
    dst.py   = src.py;
}

function pushCuboidXYZRot(cub, x, y, z, rot) {
    pushCuboidData(cub.x + x, cub.y + y, cub.z + z, cub.sx, cub.sy, cub.sz, cub.px, cub.py, cub.rot + rot, cub.r, cub.g, cub.b, cub.a);
}

function pushCuboidXYZRotAlpha(cub, x, y, z, rot, a) {
    pushCuboidData(cub.x + x, cub.y + y, cub.z + z, cub.sx, cub.sy, cub.sz, cub.px, cub.py, cub.rot + rot, cub.r, cub.g, cub.b, a);
}

function cuboidsFromJson(modelJson) {
    let cuboids = [];

    for (let it of modelJson) {
        cuboids.push({
            name: it.name,
            x: 0, y: 0, z: it.z * 1/256,
            sx: it.sx * 1/256, sy: it.sy * 1/256, sz: it.sz * 1/256,
            r: it.r/255, g: it.g/255, b: it.b/255, a: 1,
            rot: 0,
            px: -it.x * 1/256, py: -it.y * 1/256,
        });

        if (it.mirror) {
            cuboids.push({
                name: it.name,
                x: 0, y: 0, z: it.z * 1/256,
                sx: it.sx * 1/256, sy: it.sy * 1/256, sz: it.sz * 1/256,
                r: it.r/255, g: it.g/255, b: it.b/255, a: 1,
                rot: 0,
                px: +it.x * 1/256, py: -it.y * 1/256,
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

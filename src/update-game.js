import {mat4} from 'gl-matrix';

export function updateGame(game) {
	game.time++;
	if (game.time % 5 === 0) game.player.money++;

    // mouse pos to tile pos
    // viewMatrix from render-game.js with a scale instead of rotateX and inverted
    let m = mat4.create();
    mat4.scale(m, m, [120/game.width, 120/game.height, -0.001]);      // tile size 120
    mat4.scale(m, m, [1, Math.cos(Math.PI * (-1/4)), 1]);
    mat4.rotateZ(m, m, Math.PI * (-1/4));   // rotate 45deg
    mat4.translate(m, m, [-5.5, -5.5, 0]);  // (0, 0) tile to (-5.5, -5.5) pos
    mat4.invert(m, m);

    let normalMouseX =   2*(game.mouse.x / game.width)  - 1;   // between -1 and 1
    let normalMouseY = -(2*(game.mouse.y / game.height) - 1);  // between -1 and 1

    let normalMouseClickX =   2*(game.mouse.clickX / game.width)  - 1;   // between -1 and 1
    let normalMouseClickY = -(2*(game.mouse.clickY / game.height) - 1);  // between -1 and 1

    let a = [normalMouseX, normalMouseY, 0, 1,
             normalMouseClickX, normalMouseClickY, 0, 1,
             0, 0, 0, 0,
             0, 0, 0, 0,];

    mat4.mul(a, m, a);

    game.mouse.tileX = Math.floor(a[0]+0.5);
    game.mouse.tileY = Math.floor(a[1]+0.5);
    game.mouse.clickedTileX = Math.floor(a[4]+0.5);
    game.mouse.clickedTileY = Math.floor(a[5]+0.5);

	// towers
	for (let y = 0; y < game.towers.length; y++) {
		for (let x = 0; x < game.towers[y].length; x++) {
			let tw = game.towers[y][x];
			if (tw === null) continue;

			// lock on
			tw.targetEn = null;
			// target highest pathPos enemy in range
			let RANGE = 3;
			for (let en of game.enemies) {
				if (dist({x,y,z:0}, en) > RANGE) continue;
				if (!tw.targetEn || en.pathPos > tw.targetEn.pathPos) {
					tw.targetEn = en;
				}
			}

			// calculate targetRot
			if (tw.targetEn) {
				tw.targetRot = Math.atan2(tw.targetEn.y - y, tw.targetEn.x - x) + Math.PI / 2;
			}

			// rotate towards targetRot at ROT_SPEED
			let ROT_SPEED = 3 / 60;

			let a = angleBetween(tw.targetRot, tw.rot);
			if (Math.abs(a) < ROT_SPEED) {
				tw.rot = tw.targetRot;
			} else {
				tw.rot += Math.sign(a) * ROT_SPEED;
			}

			// shooting
			if (tw.targetEn && tw.rot == tw.targetRot && tw.cooldown == 0) {
				game.bullets.push({
					type: 'missile',
					x, y, z: 0.5,
					rot: 0,
					targetEn: tw.targetEn,
				});
				tw.cooldown = 60;
			}

			// cooldown
			if (tw.cooldown > 0) tw.cooldown--;
		}
	}

	// bullets
	for (let bl of game.bullets) {
		// missile
		if (bl.targetEn) {
			// calculate direction
			let dx = bl.targetEn.x - bl.x;
			let dy = bl.targetEn.y - bl.y;
			let dz = bl.targetEn.z - bl.z;
			let d  = Math.sqrt(dx*dx + dy*dy + dz*dz);
			dx /= d;
			dy /= d;
			dz /= d;

			let BULLET_VELOCITY = 0.1;

			// update pos/rot
			bl.x += dx * BULLET_VELOCITY;
			bl.y += dy * BULLET_VELOCITY;
			bl.z += dz * BULLET_VELOCITY;
			bl.rot = Math.atan2(dy, dx) + Math.PI/2;

			// on collision
			if (d < 0.1) {
				game.bullets.splice(game.bullets.indexOf(bl), 1);
                bl.targetEn.health -= 0.2;
			}
		}
	}

	// enemies
	for (let en of game.enemies) {

		// duck
		if (en.type == 'duck') {
			en.pathPos += 2.0 / 60;

			// position on path
			let [x,  y]  = positionOnPath(en.pathPos, game.path);
			let [x2, y2] = positionOnPath(en.pathPos + 1, game.path);
			en.x   = x;
			en.y   = y;
			en.rot = Math.atan2(y2-y, x2-x) + Math.PI/2;

			// jumping
			if (en.z <= 0) {
				en.z  = 0;
				en.vz = 0.10;
			}

			// apply velocity
			en.z  += en.vz;

			// gravity
			en.vz -= 0.010;
		}

		// snezak
		if (en.type == 'snezak') {
			en.pathPos += 2.0 / 60;

			// position on path
			let [x,  y]  = positionOnPath(en.pathPos, game.path);
			let [x2, y2] = positionOnPath(en.pathPos + 1, game.path);
			en.x   = x;
			en.y   = y;
			en.rot = Math.atan2(y2-y, x2-x) + Math.PI/2;
		}

        // death
        if (en.health <= 0) {
            game.enemies.splice(game.enemies.indexOf(en), 1);                    
        }
	}

	// ui
	// TODO: maybe don't update these values every frame?
	document.querySelector('.money').innerHTML      = game.player.money;
	document.querySelector('.health').innerHTML     = game.player.health;
	document.querySelector('.combat-log').innerHTML = game.ui.combatLog;
}


function positionOnPath(p, path) {
	if (p < 0) return path[0].slice();

	let prevIt = path[0];

	for (let it of path) {
		// calculate segment length
		let d = Math.sqrt((it[0] - prevIt[0])*(it[0] - prevIt[0]) + (it[1] - prevIt[1])*(it[1] - prevIt[1]));

		// interpolate (x, y) between path vertices
		if (p - d < 0) {
			return [
				prevIt[0] * (1 - p/d) + it[0] * p/d,
				prevIt[1] * (1 - p/d) + it[1] * p/d,
			];
		}

		prevIt = it;
		p -= d;
	}

	return [
		path[path.length-1][0],
		path[path.length-1][1],
	];
}


// smallest rot needed to align a to b
function angleBetween(a, b) {
	return Math.atan2(Math.sin(a-b), Math.cos(a-b));
}

// distance between two points : {x,y,z}
function dist(a, b) {
	return Math.sqrt((a.x - b.x)*(a.x - b.x) + (a.y - b.y)*(a.y - b.y) + (a.z - b.z)*(a.z - b.z));
}


export function updateGame(game) {
	// towers
	for (let y = 0; y < game.towers.length; y++) {
		for (let x = 0; x < game.towers[y].length; x++) {
			let tw = game.towers[y][x];
			if (tw === null) continue;

            // lock on
			let RANGE    = 3;
            let targetEn = null;
            // target highest pathPos enemy in range
            for (let en of game.enemies) {
                if (dist({x,y,z:0}, en) > RANGE) continue;
                if (!targetEn || en.pathPos > targetEn.pathPos) {
                    targetEn = en;
                }
            }

            // calculate targetRot
            if (targetEn) {
    			tw.targetRot = Math.atan2(targetEn.y - y, targetEn.x - x) + Math.PI / 2;
            }

            // rotate towards targetRot at ROT_SPEED
            let ROT_SPEED = 3 / 60;

            let a = angleBetween(tw.targetRot, tw.rot);
            if (Math.abs(a) < ROT_SPEED) {
                tw.rot = tw.targetRot;
            } else {
                tw.rot += Math.sign(a) * ROT_SPEED;
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
	}

	// bullets
	for (let bl of game.bullets) {
		// missile
		if (bl.lockedOn) {
			// calculate direction
			let dx = bl.lockedOn.x - bl.x;
			let dy = bl.lockedOn.y - bl.y;
			let dz = bl.lockedOn.z - bl.z;
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
			}
		}
	}    

	game.time++;
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

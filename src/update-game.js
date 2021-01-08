import {mat4} from 'gl-matrix';
import {createCombatLogEntry, pauseGame, showEndPopout, waves, enemyTypes} from './game';
import {applyFriednessFilter} from './render-game';
import {playSound} from './audio.js'

let waveReward = 50;

export function updateGame(game) {
    game.time++;
    
    // check if player dead
    if (game.player.health <= 0) showEndPopout(false);

    if (game.time === 1) {
        let STAR_AMOUNT = 400;

        for (let i = 0; i < STAR_AMOUNT; i++) {
            createStar();
        }
    }

    let snowFrequency = Math.max(0, Math.sin(2 * Math.PI * (0.5 + game.time / (120 * 60)))) * 1/3;
    if (game.time % ~~(1/snowFrequency) == 1) createSnow();

    // end of wave
    if (game.enemies.length === 0 && game.wave.isActive && game.player.health > 0) {
        createCombatLogEntry("You survived wave " + game.wave.number + "!");
        if (game.wave.number === waves.length) showEndPopout(true);
        else game.wave.number++;
        game.player.money += waveReward;
        waveReward += 10;
        game.wave.isActive = false;
        game.grapplingTurret.ready = true;
        pauseGame();
    }

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

            // cooldown
            if (tw.cooldown > 0) tw.cooldown--;

            if (tw.type == 'blank') continue;

            if (tw.type == 'grappling') {   // HARDCODED for horizontal pulling
                // targeting
                if (!tw.targetEn && tw.ready) {
                    for (let en of game.enemies) {
                        if (
                            dist({x,y,z:0}, en) > 2 &&
                            Math.abs(angleBetween(tw.rot, Math.atan2(en.y - y, en.x - x) + Math.PI / 2)) < 0.001
                        ) {  // shoot the hook
                            tw.targetEn = en;
                            tw.hookDist = 0;
                            tw.ready = false;
                            tw.usedTime = game.time;
                        }
                    }
                }

                if (!tw.pulling && tw.targetEn) {  // shooting
                    tw.hookDist += 0.3;
                    if (x + tw.hookDist > tw.targetEn.x) {
                        tw.pulling = true;
                    }
                }

                if (tw.pulling) {  // pulling
                    tw.hookDist -= 0.03;

                    if (tw.targetEn) {
                        tw.targetEn.freeMode = true;
                        tw.targetEn.x = x + tw.hookDist;
                        tw.targetEn.rot -= angleBetween(0, tw.targetEn.rot) / 30;

                        if (tw.hookDist <= 1) {  // release enemy
                            tw.targetEn.pathPos = 18.5;
                            tw.targetEn.freeMode = false;
                            tw.targetEn = null;
                            tw.hookDist -= 0.08;
                        }
                    }

                    if (tw.hookDist <= 0) {
                        tw.pulling  = false;
                        tw.hookDist = 0;
                    }
                }

                continue;
            }

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
			let ROT_SPEED = 5 / 60;

			let a = angleBetween(tw.targetRot, tw.rot);
			if (Math.abs(a) < ROT_SPEED) {
				tw.rot = tw.targetRot;
			} else {
				tw.rot += Math.sign(a) * ROT_SPEED;
			}

			// shooting
			if (tw.targetEn && tw.rot == tw.targetRot && tw.cooldown == 0) {
                if (tw.type == 'balistic') {
    				game.bullets.push({
    					type: 'missile',
    					x, y, z: 0.5,
    					rot: 0,
    					targetEn: tw.targetEn,
    				});
                    tw.cooldown = 60;
                }

                if (tw.type == 'laser') {
                    for (let en of game.enemies) {
                        // calculate distance between enemy and laser
                        // d1: projection length; x1, y1: projection coords, d2: result
                        let d1 = -Math.sin(-tw.rot) * (en.x - x) + -Math.cos(-tw.rot) * (en.y - y);
                        let x1 = x + -Math.sin(-tw.rot) * d1;
                        let y1 = y + -Math.cos(-tw.rot) * d1;
                        let d2 = Math.sqrt((en.x - x1)*(en.x - x1) + (en.y - y1)*(en.y - y1));

                        // damage
                        if (d2 <= 0.5) en.health -= 20;
                        else if (d2 <= 1 && en.type == 'goo-boss') en.health -= 20;
                    }

                    game.particles.push({
                        type: 'laser',
                        x: x +  -Math.sin(-tw.rot) * 50.2,
                        y: y +  -Math.cos(-tw.rot) * 50.2,
                        z: 0.35,
                        vx: 0, vy: 0, vz: 0,
                        rot: tw.rot,
                        rotv: 0,
                        sx: 0.1,
                        sz: 0.1,
                        sy: 100,
                        r: 200/255, g: 255/255, b: 255/255, a: 2.5,
                    });

                    tw.cooldown = 60;
                }

                if (tw.type == 'flame') {
                    // flame origin
                    let xo = x, yo = y, zo = 0.5;

                    xo += Math.cos(tw.rot - Math.PI / 2) * 0.40;
                    yo += Math.sin(tw.rot - Math.PI / 2) * 0.40;

                    let FLAME_VELOCITY = 0.1;

                    let flameRot = tw.rot - Math.PI / 2 + (Math.random() - 0.5)*(Math.random() - 0.5)*2;

                    let vx = Math.cos(flameRot) * FLAME_VELOCITY;
                    let vy = Math.sin(flameRot) * FLAME_VELOCITY;
                    let vz = 0;

                    let colors = [
                        [252, 165, 3],
                        [252, 69, 3],
                        [252, 202, 3],
                    ];

                    let color = colors[~~(Math.random() * colors.length)];

                    game.particles.push({
                        type: 'flame',
                        x: xo,
                        y: yo,
                        z: zo,
                        vx, vy, vz,
                        rot: 0,
                        rotv: (Math.random() - 0.5) * 3,
                        sx: 0.1,
                        sy: 0.1,
                        sz: 0.1,
                        r: color[0]/255, g: color[1]/255, b: color[2]/255, a: 2.5,
                    });

                    // damage
                    tw.targetEn.health    -= 0.5;
                    tw.targetEn.burning    = true;
                    tw.targetEn.friedness  = Math.min(tw.targetEn.friedness + 1, 100);

                    // sound
                    if (!tw.sound) {
                        tw.sound = playSound(4);
                        tw.sound.loop = true;
                    }
                }

                // TODO: less oil particles
                if (tw.type == 'oil') {
                    // oil origin
                    let xo = x, yo = y, zo = 0.7;

                    xo += Math.cos(tw.rot - Math.PI / 2) * 0.15;
                    yo += Math.sin(tw.rot - Math.PI / 2) * 0.15;

                    let OIL_VELOCITY = 0.05;

                    let oilRot = tw.rot - Math.PI / 2 + (Math.random() - 0.5)*(Math.random() - 0.5)*0.2;

                    let vx = Math.cos(oilRot) * OIL_VELOCITY;
                    let vy = Math.sin(oilRot) * OIL_VELOCITY;
                    let vz = 0.1;

                    let color = [47, 214, 100];

                    game.particles.push({
                        type: 'oil',
                        x: xo,
                        y: yo,
                        z: zo,
                        vx, vy, vz,
                        rot: 0,
                        rotv: (Math.random() - 0.5) * 3,
                        sx: 0.1,
                        sy: 0.1,
                        sz: 0.1,
                        r: color[0]/255, g: color[1]/255, b: color[2]/255, a: 2.5,
                    });

                    tw.targetEn.oilyness = Math.min(tw.targetEn.oilyness + 1, 100);

                    // sound
                    if (!tw.sound) {
                        tw.sound = playSound(6);
                        tw.sound.loop = true;
                    }
                }

                if (tw.type == 'nova') {
                    // blue nova
                    //game.particles.push(...novaParticles(x, y, 0.1,  64/250, 219/250, 221/250, 2.5, 5, 10, 0.1));
                    //game.particles.push(...novaParticles(x, y, 0.1,  46/250, 155/250, 209/250, 2.5, 5, 10, 0.1));
                    //game.particles.push(...novaParticles(x, y, 0.1, 119/250, 194/250, 212/250, 2.5, 5, 10, 0.1));
                    //game.particles.push(...novaParticles(x, y, 0.1,  53/250,  93/250, 167/250, 2.5, 5, 10, 0.1));

                    // yellow nova
                    game.particles.push(...novaParticles(x, y, 0.1,  255/250, 255/250,   0/250, 2.5, 5, 10, 0.1));
                    game.particles.push(...novaParticles(x, y, 0.1,  252/250, 255/250,  92/250, 2.5, 5, 10, 0.1));
                    game.particles.push(...novaParticles(x, y, 0.1,  255/250, 255/250, 179/250, 2.5, 5, 10, 0.1));

                    for (let en of game.enemies) {
                        if (dist({x,y,z:0}, en) > RANGE) continue;
                        en.health -= 20;
                    }

                    playSound(1);

                    tw.cooldown = 120;
                }
            }
            // not shooting
            else {
                if (tw.sound) {
                    tw.sound.loop = false;
                    tw.sound = null;
                }
            }
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
		}
	}

    // bullet death
    for (let i = 0; i < game.bullets.length; i++) {
        let bl = game.bullets[i];

        let dx = bl.targetEn.x - bl.x;
        let dy = bl.targetEn.y - bl.y;
        let dz = bl.targetEn.z - bl.z;
        let d  = Math.sqrt(dx*dx + dy*dy + dz*dz);

        // on collision
        if (d < 0.1) {
            game.bullets.splice(i, 1);
            game.particles.push(...explosionParticles(bl.targetEn.x, bl.targetEn.y, bl.targetEn.z, 1, 1, 1, 2, 2, 5, 0.03));
            if (bl.targetEn.hasArmor) {
                playSound(11);
            }
            else {
                bl.targetEn.health -= 15;
                playSound(2);
            }
        }
    }

	// enemies
	for (let en of game.enemies) {

        // oil decay
        en.oilyness = Math.max(0, en.oilyness - 0.1);

        // burning
        if (en.oilyness == 0) {
            en.burning = false;
        }

        if (en.burning) {
            let newOilyness = Math.max(0, en.oilyness - 0.2);
            en.health -= (en.oilyness - newOilyness);
            en.friedness = Math.min(100, en.friedness + (en.oilyness - newOilyness));
            en.oilyness = newOilyness;

            let colors = [
                [252, 165, 3],
                [252, 69, 3],
                [252, 202, 3],
                [200, 200, 200],
                [50, 50, 50],
            ];
            let color = colors[~~(Math.random() * colors.length)];

            game.particles.push({
                type: 'fire',
                x: en.x + (Math.random() - 0.5) * 0.2,
                y: en.y + (Math.random() - 0.5) * 0.2,
                z: 0.5 + (Math.random() - 0.5) * 0.2,
                vx: 0, vy: 0, vz: 0,
                rot: (Math.random() - 0.5),
                rotv: (Math.random() - 0.5) * 3,
                sx: 0.1,
                sy: 0.1,
                sz: 0.1,
                r: color[0]/255, g: color[1]/255, b: color[2]/255, a: 2.5,
            });
        }

        // don't move while hooked
        if (en.freeMode) continue;

        let speed = 2;
        if (en.type == 'goo-boss')      speed = 1;
        if (en.type == 'goo-big')       speed = 1.5;
        if (en.type == 'goo')           speed = 2;
        if (en.type == 'goo-small')     speed = 2.5;
        if (en.type == 'scarab-blue')   speed = 3.5;
        if (en.type == 'scarab-yellow') speed = 5;

        // move (slowed by oil)
        if (en.type != 'goo' && en.type != 'goo-small' && en.type != 'goo-big' && en.type != 'goo-boss') {
            en.pathPos += (speed / 60) * (1 - (en.oilyness/100) * 0.5);
        }
        // goo movement
        else {
            if (en.z > 0) {
                en.pathPos += (speed / 60) * (1 - (en.oilyness/100) * 0.5);
            }
        }
		
		// position on path
		let [x,  y]  = positionOnPath(en.pathPos, game.path);
		let [x2, y2] = positionOnPath(en.pathPos + 1, game.path);
		en.x   = x;
		en.y   = y;
		en.rot = Math.atan2(y2-y, x2-x) + Math.PI/2;

        if (y2 == y && x2 == x) {
            en.rot = 0;
        }

        if (en.type == 'duck') {
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

        if (en.type == 'goo' || en.type == 'goo-small' || en.type == 'goo-big' || en.type == 'goo-boss') {
            // jump
            if (en.z <= 0 && en.jumpCooldown == 0) {
                en.vz = 0.15;
                en.jumpCooldown = 45;
            }

    		// apply velocity
    		en.z  += en.vz;

    		// gravity
            en.vz -= 0.010;
            
            // don't go below surface
    		if (en.z <= 0) {
    			en.z  = 0;
            }

            // spawn particles on landing
            if (en.jumpCooldown == 15) {
                let color = [70/255, 206/255, 74/255]
                let density = 2;
                if (en.type == 'goo-small') game.particles.push(...debrisParticles(en.x, en.y, en.z, ...color, 0.5, density, 10, 0.03));
                if (en.type == 'goo')       game.particles.push(...debrisParticles(en.x, en.y, en.z, ...color, 0.5, density, 10, 0.05));
                if (en.type == 'goo-big')   game.particles.push(...debrisParticles(en.x, en.y, en.z, ...color, 0.5, density, 10, 0.07));
                if (en.type == 'goo-boss')  game.particles.push(...debrisParticles(en.x, en.y, en.z, ...color, 0.5, density, 10, 0.1));
            }
            
            if (en.jumpCooldown > 0) en.jumpCooldown--;
        }
	}

    // enemy death / health change effects
    for (let i = 0; i < game.enemies.length; i++) {
        let en = game.enemies[i];

        if (en.health <= 0) {  // on death

            game.enemies.splice(i, 1);
            i--;

            // give money to player
            game.player.money += en.reward;

            // spawn debris
            let alpha = 1;
            let color = [0, 0, 0]
            let density = 4;
            let velocity = 20;
            let size = 0.1;
            if (en.type == 'snezak') {
                color = [217/255, 218/255, 242/255];
            }
            if (en.type == 'duck') {
                let rgb = {r: 232/255, g: 220/255, b: 59/255};
                applyFriednessFilter(rgb, en.friedness / 100);
                color = [rgb.r, rgb.g, rgb.b];
                density = 3;
            }
            if (en.type == 'butcher') {
                color = [153/255, 0/255, 0/255];
                density = 6;
            }
            if (en.type == 'vek') {
                color = [100/255, 120/255, 100/255];
                playSound(8);
            }
            if (en.type == 'vek2') {
                color = [200/255, 155/255, 90/255];
                playSound(9);
            }
            if (en.type == 'goo' || en.type == 'goo-small' || en.type == 'goo-big' || en.type == 'goo-boss') {
                color = [70/255, 206/255, 74/255];
                alpha = 0.5;
                density = 3;
                playSound(5);
            }
            if (en.type == 'goo-small') {
                size = 0.06;
                velocity = 13;
            }
            if (en.type == 'goo') {
                size = 0.08;
                velocity = 13;
            }
            if (en.type == 'goo-big') {
                size = 0.10;
                velocity = 13;
            }
            if (en.type == 'goo-boss') {
                size = 0.15;
                velocity = 13;
            }
            if (en.type == 'scarab-blue') {
                let rgb = {r: 55/255, g: 225/255, b: 197/255};
                applyFriednessFilter(rgb, en.friedness / 100);
                color = [rgb.r, rgb.g, rgb.b];
                density = 3;
                size = 0.07;
                let alpha = 0.7;
                playSound(12);
            }
            if (en.type == 'scarab-yellow') {
                let rgb = {r: 228/255, g: 232/255, b: 33/255};
                applyFriednessFilter(rgb, en.friedness / 100);
                color = [rgb.r, rgb.g, rgb.b];
                density = 3;
                size = 0.07;
                let alpha = 0.7;
                playSound(12);
            }

            game.particles.push(...debrisParticles(en.x, en.y, en.z, ...color, alpha, density, velocity, size));

            // split goo
            if (en.type == 'goo') {
                let goo1 = {...enemyTypes[5]};
                goo1.pathPos = en.pathPos + 0.5;
                goo1.z = en.z;
                goo1.jumpCooldown = en.jumpCooldown;
                let goo2 = {...enemyTypes[5]};
                goo2.pathPos = en.pathPos - 0.5;
                goo2.z = en.z;
                goo2.jumpCooldown = en.jumpCooldown;
                game.enemies.unshift(goo1);
                game.enemies.unshift(goo2);
            }

            // split big goo
            if (en.type == 'goo-big') {
                let goo1 = {...enemyTypes[6]};
                goo1.pathPos = en.pathPos + 0.5;
                goo1.z = en.z;
                goo1.jumpCooldown = en.jumpCooldown;
                let goo2 = {...enemyTypes[6]};
                goo2.pathPos = en.pathPos - 0.5;
                goo2.z = en.z;
                goo2.jumpCooldown = en.jumpCooldown;
                game.enemies.unshift(goo1);
                game.enemies.unshift(goo2)
            }

            // split boss goo
            if (en.type == 'goo-boss') {
                let goo1 = {...enemyTypes[7]};
                goo1.pathPos = en.pathPos + 1;
                goo1.z = en.z;
                goo1.jumpCooldown = en.jumpCooldown;
                let goo2 = {...enemyTypes[7]};
                goo2.pathPos = en.pathPos - 1;
                goo2.z = en.z;
                goo2.jumpCooldown = en.jumpCooldown;
                game.enemies.unshift(goo1);
                game.enemies.unshift(goo2)
            }

            
        } else if (en.pathPos >= game.pathLen) {  // on portal pass
            game.enemies.splice(i, 1);
            i--;

            playSound(3);
            game.player.health -= en.damage;
        }

        // vek armor break
        if (en.type == 'vek' && en.hasArmor && en.health <= en.maxHealth / 2) {
            let color = [125/255, 80/255, 80/255];
            game.particles.push(...debrisParticles(en.x, en.y, en.z, ...color, 1, 3, 20, 0.1));
            playSound(10);
            en.hasArmor = false;
        }
    }

    // grappling tower smoke
    if (!game.grapplingTurret.ready && game.time % 8 == 0) {
        let colors = [
            [200, 200, 200],
            [175, 175, 175],
            [150, 150, 150],
            [125, 125, 125],
            [100, 100, 100],
        ];
        let color = colors[~~(Math.random() * colors.length)];
        game.particles.push({
            type: 'smoke',
            x: 3.1,
            y: 4.1,
            z: 1.25,
            vx: 0, vy: 0.01, vz: -0.003,
            rot: (Math.random() - 0.5),
            rotv: (Math.random() - 0.5) * 3,
            sx: 0.1,
            sy: 0.1,
            sz: 0.1,
            r: color[0]/255, g: color[1]/255, b: color[2]/255, a: 2.5,
        });
    }

    // particles
    for (let pt of game.particles) {

        if (pt.type == 'debris') {
            // bounce
            let BOUNCE_FACTOR = 0.5;
            if (pt.z <= 0.01 && pt.x >= -0.5 && pt.x <= 11.5 && pt.y >= -0.5 && pt.y <= 11.5) {  // HARDCODED   

                pt.z  = 0;
                pt.vz = -pt.vz * BOUNCE_FACTOR;

                pt.vx = pt.vx * BOUNCE_FACTOR;
                pt.vy = pt.vy * BOUNCE_FACTOR;

                let v = Math.sqrt(pt.vx*pt.vx + pt.vy*pt.vy + pt.vz*pt.vz);

                pt.rotv /= 2;
                pt.rotv += 2*(Math.random() - 0.5)*2*(Math.random() - 0.5) * v;
            }

            // gravity
            if (pt.z > 0) {
                pt.vz -= 0.01;
            }
        }

        if (pt.type == 'oil') {
            // bounce
            let BOUNCE_FACTOR = Math.random() * 0.5;
            if (pt.z <= 0.01 && pt.x >= -0.5 && pt.x <= 11.5 && pt.y >= -0.5 && pt.y <= 11.5) {  // HARDCODED   

                pt.z  = 0;
                pt.vz = -pt.vz * BOUNCE_FACTOR;

                pt.vx = pt.vx * BOUNCE_FACTOR;
                pt.vy = pt.vy * BOUNCE_FACTOR;

                let v = Math.sqrt(pt.vx*pt.vx + pt.vy*pt.vy + pt.vz*pt.vz);

                pt.sz /= 2;
                if (pt.sx < 1) {
                    pt.sx += 0.1;
                    pt.sy += 0.1;
                }

                pt.rotv /= 2;
                pt.rotv += 2*(Math.random() - 0.5)*2*(Math.random() - 0.5) * v;
            }

            // gravity
            if (pt.z > 0) {
                pt.vz -= 0.01;
            }
        }

        if (pt.type == 'fire') {
            let K = 0.001;
            pt.vx += (Math.random() - 0.5) * K;
            pt.vy += (Math.random() - 0.5) * K;
            pt.vz += Math.random() * K;
        }

        if (pt.type == 'smoke') {
            let K = 0.001;
            pt.vx += (Math.random() - 0.5) * K;
            pt.vy += (Math.random() - 0.5) * K;
            pt.vx *= 0.985;
            pt.vy *= 0.985;
            // pt.vz *= 0.97;
            pt.vz += Math.random() * K;
        }

        if (pt.type == 'snow') {
            if (pt.z <= 0) {
                pt.vz = 0;
                pt.rotv = 0;
                pt.z -= 0.00005;
            }
        }

        if (pt.type == 'laser') {
            pt.sz += 0.02;
            pt.sx += 0.02;
            pt.a  -= 0.07;
        }

        // update pos
        pt.x += pt.vx;
        pt.y += pt.vy;
        pt.z += pt.vz;

        // update rot
        pt.rot += pt.rotv;

        // decay
        if (pt.type == 'debris')    pt.a -= (1/6)/60;
        if (pt.type == 'snow')      pt.a -= (1/12)/60;
        if (pt.type == 'flame')     pt.a -= 4/60
        if (pt.type == 'explosion') pt.a -= 8/60
        if (pt.type == 'nova')      pt.a -= 10/60
        if (pt.type == 'fire')      pt.a -= 1/60
        if (pt.type == 'smoke')     pt.a -= 1/60
        if (pt.type == 'star')      pt.a -= (1/6)/60;
        if (pt.type == 'oil')       pt.a -= 1/60;
        if (pt.type == 'snow')      pt.a -= (1/12)/60;
        if (pt.type == 'laser')     pt.a -= 4/60;

    }

    // particle death
    for (let i = 0; i < game.particles.length; i++) {
        let pt = game.particles[i];

        // remove when a <= 0
        if (pt.a <= 0) {
            // make new star when old one dies
            if (pt.type == 'star') {
                createStar();
            }

            game.particles.splice(i, 1);
            i--;
        }
    }

	// ui
	// TODO: maybe don't update these values every frame?
	document.querySelector('.money').innerHTML      = game.player.money;
	document.querySelector('.health').innerHTML     = game.player.health;
    document.querySelector('.combat-log').innerHTML = game.ui.combatLog;
    document.querySelector('.wave').innerHTML       = game.wave.number;
}


function positionOnPath(p, path) {
	if (p < 0) return [-100, -100];

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

// random float between min and max
function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
}

function debrisParticles(x, y, z, r, g, b, a, d, v, s) {
    let CUBE_DENSITY      = d;
    let CUBE_SIZE         = 0.2;
    let PARTICLE_SIZE     = s;
    let PARTICLE_VELOCITY = v/60;
    let ROTATION_SCALE    = 0.3;

    let particles = [];

    for (let i = -CUBE_DENSITY/2 + 0.5; i < CUBE_DENSITY/2 + 0.5; i++) {
        for (let j = -CUBE_DENSITY/2 + 0.5; j < CUBE_DENSITY/2 + 0.5; j++) {
            for (let k = -CUBE_DENSITY/2 + 0.5; k < CUBE_DENSITY/2 + 0.5; k++) {
                if (i*i + j*j + k*k > (CUBE_DENSITY/2)*(CUBE_DENSITY/2)) continue;
                let i2 = i + Math.random() - 0.5; 
                let j2 = j + Math.random() - 0.5; 
                let k2 = k + Math.random() - 0.5; 
                particles.push({
                    type: 'debris',
                    x: x + i2 * CUBE_SIZE / CUBE_DENSITY,
                    y: y + j2 * CUBE_SIZE / CUBE_DENSITY,
                    z: z + k2 * CUBE_SIZE / CUBE_DENSITY,
                    vx: i2 * PARTICLE_VELOCITY / CUBE_DENSITY,
                    vy: j2 * PARTICLE_VELOCITY / CUBE_DENSITY,
                    vz: k2 * PARTICLE_VELOCITY / CUBE_DENSITY,
                    rot: 0,
                    rotv: (Math.random() - 0.5) * ROTATION_SCALE,
                    sx: PARTICLE_SIZE*Math.floor(2.5*Math.random() + 1),
                    sy: PARTICLE_SIZE,
                    sz: PARTICLE_SIZE,
                    r, g, b, a: a,
                });
            }
        }
    }

    return particles;
}

function explosionParticles(x, y, z, r, g, b, a, d, v, s) {
    let CUBE_DENSITY      = d;
    let CUBE_SIZE         = 0.2;
    let PARTICLE_SIZE     = s;
    let PARTICLE_VELOCITY = v/60;
    let ROTATION_SCALE    = 0.3;

    let particles = [];

    for (let i = -CUBE_DENSITY/2 + 0.5; i < CUBE_DENSITY/2 + 0.5; i++) {
        for (let j = -CUBE_DENSITY/2 + 0.5; j < CUBE_DENSITY/2 + 0.5; j++) {
            for (let k = -CUBE_DENSITY/2 + 0.5; k < CUBE_DENSITY/2 + 0.5; k++) {
                if (i*i + j*j + k*k > (CUBE_DENSITY/2)*(CUBE_DENSITY/2)) continue;
                let i2 = i + Math.random() - 0.5; 
                let j2 = j + Math.random() - 0.5; 
                let k2 = k + Math.random() - 0.5; 
                particles.push({
                    type: 'explosion',
                    x: x + i2 * CUBE_SIZE / CUBE_DENSITY,
                    y: y + j2 * CUBE_SIZE / CUBE_DENSITY,
                    z: z + k2 * CUBE_SIZE / CUBE_DENSITY,
                    vx: i2 * PARTICLE_VELOCITY / CUBE_DENSITY,
                    vy: j2 * PARTICLE_VELOCITY / CUBE_DENSITY,
                    vz: k2 * PARTICLE_VELOCITY / CUBE_DENSITY,
                    rot: 0,
                    rotv: (Math.random() - 0.5) * ROTATION_SCALE,
                    sx: PARTICLE_SIZE*Math.floor(2.5*Math.random() + 1),
                    sy: PARTICLE_SIZE,
                    sz: PARTICLE_SIZE,
                    r, g, b, a: a,
                });
            }
        }
    }

    return particles;
}

function novaParticles(x, y, z, r, g, b, a, d, v, s) {
    let CUBE_DENSITY      = d;
    let CUBE_SIZE         = 0.2;
    let PARTICLE_SIZE     = s;
    let PARTICLE_VELOCITY = v/60;
    let ROTATION_SCALE    = 0.3;

    let particles = [];

    for (let i = -CUBE_DENSITY/2 + 0.5; i < CUBE_DENSITY/2 + 0.5; i++) {
        for (let j = -CUBE_DENSITY/2 + 0.5; j < CUBE_DENSITY/2 + 0.5; j++) {
            for (let k = -CUBE_DENSITY/2 + 0.5; k < CUBE_DENSITY/2 + 0.5; k++) {
                if (i*i + j*j + k*k > (CUBE_DENSITY/2)*(CUBE_DENSITY/2)) continue;
                let rot = randomBetween(0, Math.PI * 2)
                particles.push({
                    type: 'nova',
                    x: x + i * CUBE_SIZE / CUBE_DENSITY,
                    y: y + j * CUBE_SIZE / CUBE_DENSITY,
                    z: z + k * CUBE_SIZE / CUBE_DENSITY,
                    vx: PARTICLE_VELOCITY * Math.sin(rot),
                    vy: PARTICLE_VELOCITY * Math.cos(rot),
                    vz: 0,
                    rot: 0,
                    rotv: (Math.random() - 0.5) * ROTATION_SCALE,
                    sx: PARTICLE_SIZE*Math.floor(2.5*Math.random() + 1),
                    sy: PARTICLE_SIZE,
                    sz: PARTICLE_SIZE,
                    r, g, b, a: a,
                });
            }
        }
    }

    return particles;
}

function createSnow() {
    let SNOW_SIZE_MIN = 0.03;
    let SNOW_SIZE_MAX = 0.1;
    let ROTATION_SCALE = 0.3;
    let PARTICLE_VELOCITY = 0.05;

    let snowSize = randomBetween(SNOW_SIZE_MIN, SNOW_SIZE_MAX);

    game.particles.push({
        type: 'snow',
        x: randomBetween(-0.5, 11.5),    // HARDCODED
        y: randomBetween(-0.5, 11.5),    // HARDCODED
        z: 10,
        vx: 0,
        vy: 0,
        vz: -PARTICLE_VELOCITY,
        rot: 0,
        rotv: (Math.random() - 0.5) * ROTATION_SCALE,
        sx: snowSize,
        sy: snowSize,
        sz: snowSize,
        r: 240/255, g: 240/255, b: 255/255, a: 2,
    });
}

function createStar() {
    let STAR_SIZE_MIN = 0.01;
    let STAR_SIZE_MAX = 0.1;
    let STAR_ALIVE_MIN = 1;
    let STAR_ALIVE_MAX = 20;

    let starSize = randomBetween(STAR_SIZE_MIN, STAR_SIZE_MAX);

    game.particles.push({
        type: 'star',
        x: randomBetween(-10, 22),    // HARDCODED
        y: randomBetween(-10, 22),    // HARDCODED
        z: -2,
        vx: 0,
        vy: 0,
        vz: 0,
        rot: 0,
        rotv: 0,
        sx: starSize,
        sy: starSize,
        sz: starSize,
        r: 240/255, g: 240/255, b: 100/255, a: randomBetween(STAR_ALIVE_MIN, STAR_ALIVE_MAX),
    });
}

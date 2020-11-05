
export function updateGame(game) {
    // towers
    for (let y = 0; y < game.towers.length; y++) {
        for (let x = 0; x < game.towers[y].length; x++) {
            let tw = game.towers[y][x];
            if (tw === null) continue;

            tw.rot += Math.PI / 60;
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

        // snezak, snezak2
        if (en.type == 'snezak' || en.type == 'snezak2') {
            en.pathPos += 2.0 / 60;

            // position on path
            let [x,  y]  = positionOnPath(en.pathPos, game.path);
            let [x2, y2] = positionOnPath(en.pathPos + 1, game.path);
            en.x   = x;
            en.y   = y;
            en.rot = Math.atan2(y2-y, x2-x) + Math.PI/2;
        }
    }

    game.time++;
}


function positionOnPath(p, path) {
    let prevIt = path[0];

    for (let it of path) {
        let d = Math.sqrt((it[0] - prevIt[0])*(it[0] - prevIt[0]) + (it[1] - prevIt[1])*(it[1] - prevIt[1]));

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

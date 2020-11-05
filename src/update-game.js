
export function updateGame(game) {
    for (let ent of game.enemies) {

        // duck
        if (ent.type == 'duck') {
            ent.pathPos += 2.0 / 60;

            // position on path
            let [x,  y]  = positionOnPath(ent.pathPos, game.path);
            let [x2, y2] = positionOnPath(ent.pathPos + 1, game.path);
            ent.x   = x;
            ent.y   = y;
            ent.rot = Math.atan2(y2-y, x2-x) + Math.PI/2;

            // jumping
            if (ent.z <= 0) {
                ent.z  = 0;
                ent.vz = 0.10;
            }

            // apply velocity
            ent.z  += ent.vz;

            // gravity
            ent.vz -= 0.010;
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

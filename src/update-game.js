
export function updateGame(game) {
    for (let ent of game.entities) {

        // duck
        if (ent.type == 'duck') {
            ent.pathPos += 0.15 / 60;

            // position on path
            let [x,  y]  = path(ent.pathPos);
            let [x2, y2] = path(ent.pathPos + 0.05);
            ent.x   = x;
            ent.y   = y;
            ent.rot = Math.atan2(y2-y, x2-x) + Math.PI/2;

            // jumping
            if (ent.z <= 0) {
                ent.z  = 0;
                ent.vz = 0.15;
            }

            // apply velocity
            ent.z  += ent.vz;

            // gravity
            ent.vz -= 0.014;            
        }

    }

    game.time++;
}

function path(x) {
    return [4 * Math.cos(x * 2 * Math.PI), 4 * Math.sin(x * 2 * Math.PI)]
}
import {updateGame} from './update-game.js';
import {initGameRenderer, renderGame} from './render-game.js';


let game = {
    tiles: [
        [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ],
        [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, ],
        [1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, ],
        [1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, ],
        [1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, ],
        [1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, ],
        [1, 2, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2, 1, ],
        [1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, ],
        [1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 2, 2, 1, ],
        [1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, ],
        [1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 1, 1, 1, ],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, ],  // 12x15
    ].reverse(),  // bottom left is (0, 0) PepePains
    towers: [],
    path: [[1,15], [1, 1], [7, 1], [7, 5], [3, 5], [3, 10], [3, 10], [13, 10], [13, 3], [11, 3], [11, -4], ],
	time: 0,
	enemies: [
        {type: 'duck',    x: 0, y: 0, z: 0, rot: 0, pathPos:  0,  vz: 0,},
        {type: 'duck',    x: 0, y: 0, z: 2, rot: 0, pathPos: -2,  vz: 0,},
        {type: 'duck',    x: 0, y: 0, z: 4, rot: 0, pathPos: -4,  vz: 0,},
        {type: 'duck',    x: 0, y: 0, z: 8, rot: 0, pathPos: -6,  vz: 0,},
        {type: 'snezak2', x: 0, y: 0, z: 0, rot: 0, pathPos: -8,  vz: 0,},
        {type: 'snezak',  x: 0, y: 0, z: 0, rot: 0, pathPos: -10, vz: 0,},
        {type: 'snezak',  x: 0, y: 0, z: 0, rot: 0, pathPos: -12, vz: 0,},
	],
    bullets: [{type: 'missile', x: 14, y: 0, z: 2, rot: 0, lockedOn: null}],
}

game.towers = game.tiles.map(row => row.map(_ => null));
game.towers[2][9] =  {type: 'flame',    rot: 0};
game.towers[8][11] = {type: 'balistic', rot: 0};
game.towers[9][11] = {type: 'balistic', rot: 0};
game.towers[10][2] = {type: 'flame',    rot: 0};
game.bullets[0].lockedOn = game.enemies[0];

function ticker() {
    requestAnimationFrame(ticker);
    
    let timeNow = Date.now();
    let timeBetween = timeNow - timeBefore;

    if (timeBetween > frameDuration) {
        timeBefore = timeNow - (timeBetween % frameDuration);

        updateGame(game);
        renderGame(game);
    }
}

initGameRenderer();
let fps = 60;
let frameDuration = 1000 / fps;
let timeBefore = Date.now();
ticker();

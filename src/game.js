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
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, ],  // 15x12
    ].reverse(),  // bottom left is (0, 0) PepePains
    path: [[1,15], [1, 1], [7, 1], [7, 5], [3, 5], [3, 10], [3, 10], [13, 10], [13, 3], [11, 3], [11, -4], ],
	time: 0,
	enemies: [
        {type: 'duck', x: 0, y: 0, z: 0, rot: 0, pathPos: 0, vz: 0,},
        {type: 'duck', x: 0, y: 0, z: 2, rot: 0, pathPos: -2, vz: 0,},
        {type: 'duck', x: 0, y: 0, z: 4, rot: 0, pathPos: -4, vz: 0,},
        {type: 'duck', x: 0, y: 0, z: 8, rot: 0, pathPos: -6, vz: 0,},
        {type: 'duck', x: 0, y: 0, z: 3, rot: 0, pathPos: -8, vz: 0,},
        {type: 'duck', x: 0, y: 0, z: 7, rot: 0, pathPos: -10, vz: 0,},
	],
}

function ticker() {
	updateGame(game);
	renderGame(game);
	requestAnimationFrame(ticker);
}

initGameRenderer();
ticker();

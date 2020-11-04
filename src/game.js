import {updateGame} from './update-game.js';
import {initGameRenderer, renderGame} from './render-game.js';


let game = {
    time: 0,
    entities: [
        {type: 'duck', x: 0, y: 0, z: 0, rot: 0, pathPos: 0, vz: 0,},
    ],
}

function ticker() {
    updateGame(game);
    renderGame(game);
    requestAnimationFrame(ticker);
}

initGameRenderer();
ticker();

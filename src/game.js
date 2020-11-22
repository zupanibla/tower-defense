import {updateGame} from './update-game.js';
import {initGameRenderer, renderGame} from './render-game.js';

let canvas = document.querySelector('.game-canvas');

let game = {
    tiles: [
        [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1],
        [1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1],
        [1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1],
        [1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1],
        [1, 2, 1, 2, 2, 2, 1, 1, 1, 1, 2, 1],
        [1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1],
        [1, 2, 1, 1, 1, 2, 1, 1, 2, 2, 2, 1],
        [1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1],
        [1, 2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1],  // 12x12
    ].reverse(),  // bottom left is (0, 0) PepePains
    towers: [],
    path: [[1,12], [1, 1], [5, 1], [5, 5], [3, 5], [3, 10], [10, 10], [10, 3], [8, 3], [8, -1], ],
	time: 0,
	enemies: [
        {type: 'duck',          x: 0, y: 0,  z: 0, rot: 0, pathPos:  0,  vz: 0,},
        {type: 'duck',          x: 0, y: 0,  z: 2, rot: 0, pathPos: -2,  vz: 0,},
        {type: 'duck',          x: 0, y: 0,  z: 4, rot: 0, pathPos: -4,  vz: 0,},
        {type: 'duck',          x: 0, y: 0,  z: 8, rot: 0, pathPos: -6,  vz: 0,},
        {type: 'snezak',        x: 0, y: 0,  z: 0, rot: 0, pathPos: -10, vz: 0,},
        {type: 'snezak',        x: 0, y: 0,  z: 0, rot: 0, pathPos: -12, vz: 0,},
    ],
    environment: [
        {type: 'bluePortal',    x: 8, y: -1, z: -0.35, rot: 0},
        {type: 'redPortal',     x: 1, y: 12, z: -0.35, rot: 0},
    ],
    bullets: [],
    mouse: {
        mouseX: -1,
        mouseY: -1,
        isMouseDown: false,
    },
}

game.towers = game.tiles.map(row => row.map(_ => null));
game.towers[2][9] =  {type: 'flame',    rot: 0, targetRot: 0, targetEn: null, cooldown: 0};
game.towers[8][11] = {type: 'balistic', rot: 0, targetRot: 0, targetEn: null, cooldown: 0};
game.towers[9][11] = {type: 'balistic', rot: 0, targetRot: 0, targetEn: null, cooldown: 0};
game.towers[10][2] = {type: 'flame',    rot: 0, targetRot: 0, targetEn: null, cooldown: 0};

canvas.addEventListener('mousemove', (e) => {
    game.mouse.mouseX = e.offsetX;
    game.mouse.mouseY = e.offsetY;
    console.log(game.mouse);
});

canvas.addEventListener('mousedown', (e) => {
    game.mouse.mouseX = e.offsetX;
    game.mouse.mouseY = e.offsetY;
    game.mouse.isMouseDown = true;
});

canvas.addEventListener('mouseup', (e) => {
    game.mouse.mouseX = e.offsetX;
    game.mouse.mouseY = e.offsetY;
    game.mouse.isMouseDown = false;
});

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

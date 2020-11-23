import {updateGame} from './update-game.js';
import {initGameRenderer, renderGame} from './render-game.js';

let canvas          = document.querySelector('.game-canvas');
let ui              = document.querySelector('.game-ui');
let pausePlayButton = document.querySelector('.pause-play-button');
let shopButtons     = [
                      document.querySelector('.tower-0-0'), document.querySelector('.tower-0-1'), document.querySelector('.tower-0-2'),
                      document.querySelector('.tower-1-0'), document.querySelector('.tower-1-1'), document.querySelector('.tower-1-2'),
                      document.querySelector('.tower-2-0'), document.querySelector('.tower-2-1'), document.querySelector('.tower-2-2')
                    ];

let game = {
    width: ui.clientWidth,
    height: ui.clientHeight,
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
        {type: 'duck',          x: 0, y: 0,  z: 0, rot: 0, pathPos:  0,  vz: 0, health: 100, maxHealth: 100},
        {type: 'duck',          x: 0, y: 0,  z: 2, rot: 0, pathPos: -2,  vz: 0, health: 100, maxHealth: 100},
        {type: 'duck',          x: 0, y: 0,  z: 4, rot: 0, pathPos: -4,  vz: 0, health: 100, maxHealth: 100},
        {type: 'duck',          x: 0, y: 0,  z: 8, rot: 0, pathPos: -6,  vz: 0, health: 100, maxHealth: 100},
        {type: 'snezak',        x: 0, y: 0,  z: 0, rot: 0, pathPos: -10, vz: 0, health: 200, maxHealth: 200},
        {type: 'snezak',        x: 0, y: 0,  z: 0, rot: 0, pathPos: -12, vz: 0, health: 200, maxHealth: 200},
    ],
    particles: [],
    environment: [
        {type: 'bluePortal',    x: 8, y: -1, z: -0.35, rot: 0},
        {type: 'redPortal',     x: 1, y: 12, z: -0.35, rot: 0},
    ],
    bullets: [],
    player: {
        health: 100,
        money: 100,
    },
    ui: {
        combatLog: 'Welcome to tower defense!<br />Defeat the evil enemies that are trying to breach into human world to take over.<br />'
    },
    shop: [
        {type: 'balistic', cost: 100, button: shopButtons[0]},
        {type: 'flame',    cost: 200, button: shopButtons[1]},
    ],
    mouse: {
        x: -1,
        y: -1,
        tileX: -1,
        tileY: -1,
        clickX: -1,
        clickY: -1,
        clickedTileX: -1,
        clickedTileY: -1,
        isDown: false,
        clickTime: -1000,
        tower: null
    },
    isPaused: true,
}

// for debug purposes
window.game = game;

game.towers = game.tiles.map(row => row.map(_ => null));
game.towers[2][9] =  {type: 'flame',    rot: 0, targetRot: 0, targetEn: null, cooldown: 0};
game.towers[8][11] = {type: 'balistic', rot: 0, targetRot: 0, targetEn: null, cooldown: 0};
game.towers[9][11] = {type: 'balistic', rot: 0, targetRot: 0, targetEn: null, cooldown: 0};
game.towers[10][2] = {type: 'flame',    rot: 0, targetRot: 0, targetEn: null, cooldown: 0};

ui.addEventListener('mousemove', e => {
    var rect = ui.getBoundingClientRect();
    game.mouse.x = Math.round(e.clientX - rect.left);
    game.mouse.y = Math.round(e.clientY - rect.top);
});

ui.addEventListener('mousedown', e => {
    var rect = ui.getBoundingClientRect();
    game.mouse.x = Math.round(e.clientX - rect.left);
    game.mouse.y = Math.round(e.clientY - rect.top);
    game.mouse.isDown = true;
    game.mouse.clickTime = game.time;
    game.mouse.clickX = game.mouse.x;
    game.mouse.clickY = game.mouse.y;
    createCombatLogEntry('Clicked on x: ' + game.mouse.x + ', y: ' + game.mouse.y);
});

ui.addEventListener('mouseup', e => {
    var rect = ui.getBoundingClientRect();
    game.mouse.x = Math.round(e.clientX - rect.left);
    game.mouse.y = Math.round(e.clientY - rect.top);
    game.mouse.isDown = false;
});

pausePlayButton.addEventListener('mouseup', e => {
    if (game.isPaused) {
        pausePlayButton.classList.remove('play-button');
        pausePlayButton.classList.add('pause-button');
        createCombatLogEntry('You unpaused the game.');
    }
    else {
        pausePlayButton.classList.remove('pause-button');
        pausePlayButton.classList.add('play-button');
        createCombatLogEntry('You paused the game.');
    }

    game.isPaused = !game.isPaused;
});

for (let i = 0; i < game.shop.length; i++) {
    let sh = game.shop[i];
    sh.button.addEventListener('click', e => {
        if (game.player.money >= sh.cost) {
            // deselect all other towers
            for (let sh2 of game.shop) {
                sh2.button.classList.remove('tower-selected');
            }
            // select the clicked tower
            sh.button.classList.add('tower-selected');
            game.mouse.tower = sh;
        }
    });
}

function createCombatLogEntry(s) {
    game.ui.combatLog += s + '<br />';
}

function updateShop() {
    for (let sh of game.shop) {
        // update tower cost text
        sh.button.querySelector('.tower-cost').innerHTML = sh.cost;
        // update icons if player can or cannot afford tower
        if (game.player.money >= sh.cost) {
            sh.button.classList.remove('tower-disabled');
        }
        else {
            sh.button.classList.add('tower-disabled');
        }
    }
}

function ticker() {
    requestAnimationFrame(ticker);
    
    let timeNow = Date.now();
    let timeBetween = timeNow - timeBefore;

    if (timeBetween > frameDuration) {
        timeBefore = timeNow - (timeBetween % frameDuration);

        updateShop();
        updateGame(game);
        renderGame(game);
    }
}

initGameRenderer();
let fps = 60;
let frameDuration = 1000 / fps;
let timeBefore = Date.now();
ticker();

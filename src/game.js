import {updateGame}                   from './update-game.js';
import {initGameRenderer, renderGame} from './render-game.js';
import {initAudio, playSound}                    from './audio.js';

let canvas          = document.querySelector('.game-canvas');
let ui              = document.querySelector('.game-ui');
let gameHtml        = document.querySelector('.game');
let pausePlayButton = document.querySelector('.pause-play-button');
let shopButtons     = [
                      document.querySelector('.tower-0-0'), document.querySelector('.tower-0-1'), document.querySelector('.tower-0-2'),
                      document.querySelector('.tower-1-0'), document.querySelector('.tower-1-1'), document.querySelector('.tower-1-2'),
                      document.querySelector('.tower-2-0'), document.querySelector('.tower-2-1'), document.querySelector('.tower-2-2')
                    ];
let popout          = document.querySelector('.game-popout');
let popoutTitle     = document.querySelector('.popout-title');
let popoutMain      = document.querySelector('.popout-main');
let popoutPlayAgain = document.querySelector('.popout-play-again');
let scaleBodyFactor = 1;
export let enemyTypes      = [
    {type: 'duck',          x: 1, y: 12.5, z: 0, rot: 0, pathPos: 0, vz: 0, health: 120, maxHealth: 120, reward: 20,  damage: 15, friedness: 0, oilyness: 0, burning: false},
    {type: 'snezak',        x: 1, y: 12.5, z: 0, rot: 0, pathPos: 0, vz: 0, health: 200, maxHealth: 200, reward: 50,  damage: 25, friedness: 0, oilyness: 0, burning: false},
    {type: 'butcher',       x: 1, y: 12.5, z: 0, rot: 0, pathPos: 0, vz: 0, health: 500, maxHealth: 500, reward: 100, damage: 30, friedness: 0, oilyness: 0, burning: false},

    {type: 'vek',           x: 1, y: 12.5, z: 0, rot: 0, pathPos: 0, vz: 0, health: 120, maxHealth: 120, reward: 20,  damage: 15, friedness: 0, oilyness: 0, burning: false},
    {type: 'vek2',          x: 1, y: 12.5, z: 0, rot: 0, pathPos: 0, vz: 0, health: 120, maxHealth: 120, reward: 20,  damage: 15, friedness: 0, oilyness: 0, burning: false},
    {type: 'goo-small',     x: 1, y: 12.5, z: 0, rot: 0, pathPos: 0, vz: 0, health:  60, maxHealth:  60, reward: 10,  damage:  5, friedness: 0, oilyness: 0, burning: false, jumpCooldown: 0},
    {type: 'goo',           x: 1, y: 12.5, z: 0, rot: 0, pathPos: 0, vz: 0, health: 120, maxHealth: 120, reward: 20,  damage: 10, friedness: 0, oilyness: 0, burning: false, jumpCooldown: 0},
    {type: 'goo-big',       x: 1, y: 12.5, z: 0, rot: 0, pathPos: 0, vz: 0, health: 240, maxHealth: 240, reward: 40,  damage: 20, friedness: 0, oilyness: 0, burning: false, jumpCooldown: 0},
];
export let waves = [
    [7, -4, 3, -4, 4, -4, 7, -4, 3],
    [3, -4, 4, -4, 3, -4, 4, -4, 3],
    [0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0],
    [0, -2, 0, -2, 1, -2, 0, -2, 0, -2, 1, -2, 1, -2, 0],
    [0, 0, 1, 0, -4, 1, 0, 0, 1, 1, -4, 1, 1, 1],
    [0, 1, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 1, 1, -8, 1, 1, 0, 1, 1, 0, -10, 2]
];

let TOWER_COST_MULTIPLIER = 1.25;

let game = {
    width: ui.clientWidth,
    height: ui.clientHeight,
    tiles: [
        [1, 2, 1, 1, 1, 1, 1, 1, 4, 1, 4, 4],
        [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 4],
        [1, 2, 1, 2, 1, 3, 3, 1, 1, 1, 2, 1],
        [1, 2, 1, 2, 1, 1, 3, 3, 1, 1, 2, 1],
        [1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1],
        [1, 2, 1, 2, 2, 2, 1, 1, 1, 1, 2, 1],
        [1, 2, 1, 1, 1, 2, 1, 1, 2, 2, 2, 1],
        [4, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1],
        [4, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1],
        [1, 2, 2, 2, 2, 2, 1, 1, 2, 1, 4, 1],
        [4, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1],  // 12x12
    ].reverse(),  // bottom left is (0, 0) PepePains
    towers: [],
    path: [[1,12.5], [1, 1], [5, 1], [5, 5], [3, 5], [3, 10], [10, 10], [10, 4], [8, 4], [8, -1.5], ],
    pathLen: 47,  // HARDCODED
	time: 0,
    enemies: [],
    particles: [],
    environment: [
        {type: 'bluePortal',    x: 8, y: -1, z: -0.35, rot: 0},
        {type: 'redPortal',     x: 1, y: 12, z: -0.35, rot: 0},
    ],
    bullets: [],
    player: {
        health: 100,
        money: 100000, // 250
    },
    wave: {
        number: 1,
        isActive: false
    },
    ui: {
        combatLog: 'Welcome to tower defense!<br />Defeat the evil enemies that are trying to breach into human world to take over.<br />'
    },
    shop: [
        {type: 'balistic', cost: 100, button: shopButtons[0]},
        {type: 'flame',    cost: 250, button: shopButtons[1]},
        {type: 'oil',      cost: 300, button: shopButtons[2]},
        {type: 'nova',     cost: 500, button: shopButtons[3]},
        // {type: 'laser',    cost: 100, button: shopButtons[3]},
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
    grapplingTurret: {type: 'grappling', rot: Math.PI / 2, targetRot: Math.PI / 2, targetEn: null, cooldown: 0, hookDist: 0, pulling: false, ready: true, usedTime: -1},
}
game.towers = game.tiles.map(row => row.map(_ => null));


game.towers[4][4] = game.grapplingTurret;
game.towers[4][3] = {type: 'blank',     rot: 0, targetRot: 0, targetEn: null, cooldown: 0};


window.setTimeout(e => {  // TODO za testiranje
    let en = {...enemyTypes[4]};
    en.pathPos = 37;
    game.enemies.push(en);
    unpauseGame();
}, 400);

// for reseting game
let initialGameJson = JSON.stringify(game);

// for debug purposes
window.game = game;

// centers the game and downscales it if the browser window is too small
// TODO: this can probably be done less hacky...
function scaleBody() {
    let h = window.innerHeight;
    let w = window.innerWidth;
    scaleBodyFactor  = 1;

    // determine and set scaling factor
    if (h < game.height) scaleBodyFactor = h / game.height;
    if (w < game.width && scaleBodyFactor > w / game.width) scaleBodyFactor = w / game.width;
    document.body.style.transform = 'scale(' + scaleBodyFactor + ')';

    // set game in center
    gameHtml.style.top  = (h - game.height * scaleBodyFactor) / 2 / scaleBodyFactor + 'px';
    gameHtml.style.left = (w - game.width * scaleBodyFactor)  / 2 / scaleBodyFactor + 'px';
}

scaleBody();
window.addEventListener('resize', scaleBody);

ui.addEventListener('mousemove', e => {
    var rect = ui.getBoundingClientRect();
    game.mouse.x = Math.round(e.clientX - rect.left) / scaleBodyFactor;
    game.mouse.y = Math.round(e.clientY - rect.top)  / scaleBodyFactor;
});

ui.addEventListener('mousedown', e => {
    // left click
    if (e.button === 0) {
        var rect = ui.getBoundingClientRect();
        game.mouse.x = Math.round(e.clientX - rect.left);
        game.mouse.y = Math.round(e.clientY - rect.top);
        game.mouse.isDown = true;
        game.mouse.clickTime = game.time;
        game.mouse.clickX = game.mouse.x;
        game.mouse.clickY = game.mouse.y;

        // check if trying to place tower
        if (game.mouse.tileX >= 0 && game.mouse.tileX < 12 & game.mouse.tileY >= 0 && game.mouse.tileY < 12 &&
            game.mouse.tower !== null && game.towers[game.mouse.tileY][game.mouse.tileX] === null
            && game.tiles[game.mouse.tileY][game.mouse.tileX] !== 2 &&
            game.mouse.isDown && game.player.money >= game.mouse.tower.cost) {

            // place tower
            game.towers[game.mouse.tileY][game.mouse.tileX] =
                {type: game.mouse.tower.type, rot: 0, targetRot: 0, targetEn: null, cooldown: 0};
            playSound(7);
            // take player money and up tower cost
            game.player.money -= game.mouse.tower.cost;
            game.mouse.tower.cost = Math.round(game.mouse.tower.cost * TOWER_COST_MULTIPLIER);
            // on pressing shift don't remove tower from cursor to allow placing multiple towers
            if (!e.shiftKey) {
                // deselect tower from shop and remove it from cursor
                game.mouse.tower.button.classList.remove('tower-selected');
                game.mouse.tower = null;
            }
        }
    }
});

ui.addEventListener('mouseup', e => {
    // left click
    if (e.button === 0) {
        var rect = ui.getBoundingClientRect();
        game.mouse.x = Math.round(e.clientX - rect.left);
        game.mouse.y = Math.round(e.clientY - rect.top);
        game.mouse.isDown = false;
    }
});

pausePlayButton.addEventListener('mouseup', e => {
    // unpauase
    if (game.isPaused) {
        unpauseGame();
    }
    // pause
    else {
        pauseGame();
    }
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        // remove tower from cursor and shop selection
        game.mouse.tower = null;
        for (let sh2 of game.shop) {
            sh2.button.classList.remove('tower-selected');
        }
    }
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
            if (game.mouse.tower === sh) {
                game.mouse.tower = null;
            }
            else {
                sh.button.classList.add('tower-selected');
                game.mouse.tower = sh;
            }
        }
    });
}

popoutPlayAgain.addEventListener('click', e => {
    popout.classList.add('unclickable');
    popout.classList.remove('fade');
    resetGame();
})

export function createCombatLogEntry(s) {
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

function spawnWave() {
    if (waves.length < game.wave.number) return;

    let pathPos = 0;
    for (let enType of waves[game.wave.number - 1]) {
        if (enType >= 0) {
            let en = {...enemyTypes[enType]};
            en.pathPos = pathPos;
            game.enemies.push(en);
        }
        pathPos -= enType < 0 ? -enType : 1;
    }

    game.wave.isActive = true;
    createCombatLogEntry("Wave " + game.wave.number + " has started...");

    game.grapplingTurret.ready = true;
}

export function pauseGame() {
    pausePlayButton.classList.remove('pause-button');
    pausePlayButton.classList.add('play-button');
    game.isPaused = true;
}

function unpauseGame() {
    pausePlayButton.classList.remove('play-button');
    pausePlayButton.classList.add('pause-button');
    game.isPaused = false;
    if (!game.wave.isActive) spawnWave();
}

// TODO: reset from original game
function resetGame() {
    game.player.health = 100;
    game.towers = game.tiles.map(row => row.map(_ => null));
	game.time = 0,
    game.enemies = [],
    game.particles = [],
    game.bullets = [],
    game.player.health = 100;
    game.player.money = 100000; // 250
    game.wave.number = 1;
    game.wave.isActive = false;
    game.ui.combatLog ='Welcome to tower defense!<br />Defeat the evil enemies that are trying to breach into human world to take over.<br />';
    game.mouse.tower = null;
    game.isPaused = true;
    game.shop[0].cost = 100;
    game.shop[1].cost = 250;
    game.shop[2].cost = 300;
    game.shop[3].cost = 500;
    pausePlayButton.classList.remove('unclickable');
    pauseGame();
}
window.resetGame = resetGame;

export function showEndPopout(isVictory) {
    popout.classList.remove('unclickable');
    popout.classList.add('fade');
    pausePlayButton.classList.add('unclickable');

    if (isVictory) {
        popoutTitle.classList.remove('popout-defeat');
        popoutTitle.classList.add('popout-victory');
        popoutTitle.innerHTML = "Victory";
        popoutMain.innerHTML  = "You have defeated the evil forces and stopped them from overcoming the human world! (for now...)"
    }
    else {
        popoutTitle.classList.remove('popout-victory');
        popoutTitle.classList.add('popout-defeat');
        popoutTitle.innerHTML = "Defeat";
        popoutMain.innerHTML  = "The evil forces have managed to invade the human world. The earth is doomed."
    }
}


function ticker() {
    requestAnimationFrame(ticker);
    
    let timeNow = Date.now();
    let timeBetween = timeNow - timeBefore;


    if (timeBetween > frameDuration) {
        timeBefore = timeNow - (timeBetween % frameDuration);

        // TODO: call updateShop() somewhere else
        updateShop();
        if (!game.wave.isActive || !game.isPaused) {
            updateGame(game);
        }
        renderGame(game);
    }
}

// init audio after user interaction
window.addEventListener('mousedown', function handler(e) {
    e.currentTarget.removeEventListener(e.type, handler);
    initAudio();
})

initGameRenderer();
let fps = 65;  // TODO
let frameDuration = 1000 / fps;
let timeBefore = Date.now();
ticker();

import {updateGame, setWaveReward}    from './update-game.js';
import {initGameRenderer, renderGame} from './render-game.js';
import {initAudio, playSound}         from './audio.js';

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

export let enemyTypes      = [
    {type: 'duck',          x: 1, y: 12.5, z: 0, rot: 0, pathPos: 0, vz: 0, health: 120, maxHealth: 120, reward: 20,  damage:  15, friedness: 0, oilyness: 0, burning: false},
    {type: 'snezak',        x: 1, y: 12.5, z: 0, rot: 0, pathPos: 0, vz: 0, health: 200, maxHealth: 200, reward: 50,  damage:  25, friedness: 0, oilyness: 0, burning: false},
    {type: 'butcher',       x: 1, y: 12.5, z: 0, rot: 0, pathPos: 0, vz: 0, health: 500, maxHealth: 500, reward: 100, damage:  30, friedness: 0, oilyness: 0, burning: false},
    {type: 'vek',           x: 1, y: 12.5, z: 0, rot: 0, pathPos: 0, vz: 0, health: 150, maxHealth: 150, reward: 30,  damage:  10, friedness: 0, oilyness: 0, burning: false, hasArmor: true},
    {type: 'vek2',          x: 1, y: 12.5, z: 0, rot: 0, pathPos: 0, vz: 0, health: 100, maxHealth: 100, reward: 15,  damage:   5, friedness: 0, oilyness: 0, burning: false},
    {type: 'goo-small',     x: 1, y: 12.5, z: 0, rot: 0, pathPos: 0, vz: 0, health:  60, maxHealth:  60, reward:  5,  damage:   2, friedness: 0, oilyness: 0, burning: false, jumpCooldown: 0},
    {type: 'goo',           x: 1, y: 12.5, z: 0, rot: 0, pathPos: 0, vz: 0, health: 120, maxHealth: 120, reward: 15,  damage:   5, friedness: 0, oilyness: 0, burning: false, jumpCooldown: 0},
    {type: 'goo-big',       x: 1, y: 12.5, z: 0, rot: 0, pathPos: 0, vz: 0, health: 240, maxHealth: 240, reward: 50,  damage:  15, friedness: 0, oilyness: 0, burning: false, jumpCooldown: 0},
    {type: 'goo-boss',      x: 1, y: 12.5, z: 0, rot: 0, pathPos: 0, vz: 0, health: 480, maxHealth: 480, reward: 150, damage:  50, friedness: 0, oilyness: 0, burning: false, jumpCooldown: 0},
    {type: 'scarab-blue',   x: 1, y: 12.5, z: 0, rot: 0, pathPos: 0, vz: 0, health: 200, maxHealth: 200, reward: 50,  damage:  10, friedness: 0, oilyness: 0, burning: false},
    {type: 'scarab-yellow', x: 1, y: 12.5, z: 0, rot: 0, pathPos: 0, vz: 0, health: 300, maxHealth: 300, reward: 100, damage:  10, friedness: 0, oilyness: 0, burning: false},
];
export let waves = [
    [4, -6, 4, -6, 4, -6, 4, -6, 4, -6, 4, -6, 4, -6, 4, -6, 4, -6, 4],
    [4, -5, 4, -5, 4, -5, 4, -5, 4, -4, 4, -4, 4, -4, 4, -4, 4, -3, 4, -3, 4, -3, 4, -3, 4, -3, 4],
    [4, 5, 5, -2, 4, 5, 5, -2, 4, 5, 5, -2, 4, 5, 5, -2, 4, 5, 5, -4, 4, 5, 5, 5, 5],
    [6, -2, 4, 4, -3, 6, -2, 4, 4, -2, 6, -2, 5, 5, 5, -8, 6, -2, 6, -2, 6, -2, 6, -2, 6],
    [3, -2, 4, 4, -6, 3, -2, 4, 6, -6, 3, -2, 3, -2, 6, -4, 3, 4, 4, -2, 3, 5, 6, 6],
    [3, -2, 3, -2, 4, 9, -6, 3, -2, 3, -2, 6, -2, 6, -6, 3, -2, 3, -2, 9, -2, 6, -2, 6, -2, 7],
    [4, 9, 3, 7, 4, 9, -2, 7, -2, 7, 9, -2, 9, 3, 3, 3, 3, -2, 9, 9, -2, 7],
    [3, 3, 3, 7, 7, -3, 6, 6, 7, 7, 9, 9, 9, -3, 4, 4, 4, 4, 3, 3, 3, 5, 6, 7, 8],
    [4, 4, 9, 4, 4, 10, 4, 4, 10, -4, 3, 3, 9, 3, 3, 10, 3, 3, 10, -4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9],
    [3, 4, 3, 4, 3, 4, 8, 8, 9, 9, 10, 10, -5, 4, 4, 4, 4, 3, 3, 3, 3, 3, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10]
];

// 3 spider
// 4 scorpion
// 5 small goo
// 6 goo
// 7 big goo
// 8 boss goo
// 9 blue scarab
// 10 yellow scarab

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
        money: 250,
    },
    wave: {
        number: 1,
        isActive: false
    },
    ui: {
        combatLog: 'Welcome to tower defense!<br />Defeat the evil enemies that are trying to breach into human world to take over.<br />'
    },
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
    shopItems: [
        {type: 'balistic', cost:  100},
        {type: 'flame',    cost:  250},
        {type: 'oil',      cost:  400},
        {type: 'nova',     cost:  700},
        {type: 'laser',    cost: 1000},
    ],
    selectedShopItemIdx: -1,
}
game.towers = game.tiles.map(row => row.map(_ => null));

let initialGameStateJSON = JSON.stringify(game);

ui.addEventListener('mousemove', e => {
    var rect = ui.getBoundingClientRect();
    game.mouse.x = e.clientX * game.width / canvas.clientWidth;
    game.mouse.y = e.clientY * game.height / canvas.clientHeight;
});

ui.addEventListener('mousedown', e => {
    // left click
    if (e.button === 0) {
        var rect             = ui.getBoundingClientRect();
        game.mouse.x         = Math.round(e.clientX - rect.left);
        game.mouse.y         = Math.round(e.clientY - rect.top);
        game.mouse.isDown    = true;
        game.mouse.clickTime = game.time;
        game.mouse.clickX    = game.mouse.x;
        game.mouse.clickY    = game.mouse.y;
        
        let selectedShopItem = game.shopItems[game.selectedShopItemIdx];

        // check if trying to place tower
        if (selectedShopItem &&
            game.mouse.tileX >= 0 && game.mouse.tileX < 12 & game.mouse.tileY >= 0 && game.mouse.tileY < 12 &&
            game.towers[game.mouse.tileY][game.mouse.tileX] === null
            && game.tiles[game.mouse.tileY][game.mouse.tileX] == 1 &&
            game.mouse.isDown && game.player.money >= selectedShopItem.cost) {

            // place tower
            game.towers[game.mouse.tileY][game.mouse.tileX] =
                {type: selectedShopItem.type, rot: 0, targetRot: 0, targetEn: null, cooldown: 0};
            playSound(7);
            // take player money and up tower cost
            game.player.money -= selectedShopItem.cost;
            selectedShopItem.cost = Math.round(selectedShopItem.cost * TOWER_COST_MULTIPLIER);
            // on pressing shift don't remove tower from cursor to allow placing multiple towers
            if (!e.shiftKey) {
                // deselect tower from shop and remove it from cursor
                for (let it of shopButtons) {
                    it.classList.remove('tower-selected');
                }
                game.selectedShopItemIdx = -1;
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
        game.selectedShopItemIdx = -1;
        for (let it of shopButtons) {
            it.classList.remove('tower-selected');
        }
    }
});

for (let i = 0; i < game.shopItems.length; i++) {
    shopButtons[i].addEventListener('click', e => {
        if (game.player.money >= game.shopItems[i].cost) {
            // deselect all other towers
            for (let it of shopButtons) {
                it.classList.remove('tower-selected');
            }
            // select the clicked tower
            if (game.selectedShopItemIdx == i) {
                game.selectedShopItemIdx = -1;
            }
            else {
                shopButtons[i].classList.add('tower-selected');
                game.selectedShopItemIdx = i;
            }
        }
    });
}

popoutPlayAgain.addEventListener('click', resetGame);

export function createCombatLogEntry(s) {
    game.ui.combatLog += s + '<br />';
}

function updateShop() {
    for (let i = 0; i < game.shopItems.length; i++) {
        // update tower cost text
        shopButtons[i].querySelector('.tower-cost').innerHTML = game.shopItems[i].cost;
        // update icons if player can or cannot afford tower
        if (game.player.money >= game.shopItems[i].cost) {
            shopButtons[i].classList.remove('tower-disabled');
        }
        else {
            shopButtons[i].classList.add('tower-disabled');
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
    createCombatLogEntry('Wave ' + game.wave.number + ' has started...');
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


function resetGame() {
    popout.classList.add('unclickable');
    popout.classList.remove('fade');
    pausePlayButton.classList.remove('unclickable');
    stopLoopingSounds();
    game = JSON.parse(initialGameStateJSON);
}

export function showEndPopout(isVictory) {
    popout.classList.remove('unclickable');
    popout.classList.add('fade');
    pausePlayButton.classList.add('unclickable');

    if (isVictory) {
        popoutTitle.classList.remove('popout-defeat');
        popoutTitle.classList.add('popout-victory');
        popoutTitle.innerHTML = 'Victory';
        popoutMain.innerHTML  = 'You have defeated the evil forces and stopped them from overcoming the human world! (for now...)'
    }
    else {
        popoutTitle.classList.remove('popout-victory');
        popoutTitle.classList.add('popout-defeat');
        popoutTitle.innerHTML = 'Defeat';
        popoutMain.innerHTML  = 'The evil forces have managed to invade the human world. The earth is doomed.'
    }
}

function stopLoopingSounds() {
    for (let y = 0; y < game.towers.length; y++) {
        for (let x = 0; x < game.towers[y].length; x++) {
            let tw = game.towers[y][x];
            if (tw && tw.sound) {
                tw.sound.loop = false;
                tw.sound = null;
            }
        }
    }
}

document.addEventListener('visibilitychange', function() {
    if (document.hidden) stopLoopingSounds();
});

function ticker() {
    requestAnimationFrame(ticker);
    
    let timeNow = Date.now();
    let timeBetween = timeNow - timeBefore;


    if (timeBetween > frameDuration) {
        timeBefore = timeNow - (timeBetween % frameDuration);

        // compute game width and height
        let w = canvas.clientWidth;
        let h = canvas.clientHeight;
        let k = 1;
        const W = 1100;
        const H = 900;

        // determine scaling factor k
        if (H > h) k = H / h;
        if (W > w && k < W / w) k = W / w;

        if (game.time % 60 == 1) console.log(k, w, h)

        game.width  = w * k;
        game.height = h * k;

        // TODO: call updateShop() somewhere else
        updateShop();
        if (!game.wave.isActive || !game.isPaused) {
            updateGame(game);
        }
        else {
            stopLoopingSounds();
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

// for debug purposes
window.game = game;
window.resetGame = resetGame;

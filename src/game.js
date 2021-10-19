import {updateGame}    from './update-game.js';
import {updateMouse} from './update-mouse.js';
import {initGameRenderer, renderGame} from './render-game.js';
import {initAudio, playSound}         from './audio.js';
import * as html from './html-references.js';
import {startStopwatch, addTimeDifferenceTo} from './profiling.js';


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
    speed: 1,
    width: html.uiDiv.clientWidth,
    height: html.uiDiv.clientHeight,
    tiles: [
        [1, 2, 1, 1, 1, 1, 1, 4, 4, 1, 1, 4],
        [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1],
        [1, 2, 1, 2, 1, 3, 3, 1, 1, 1, 2, 1],
        [1, 2, 1, 2, 1, 1, 3, 3, 1, 1, 2, 4],
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
    particles: [],  // is initialized as a large static array later
    particleCount: 0,
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
        combatLog: '',
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
        {type: 'missile', cost:  100},
        {type: 'flame',    cost:  250},
        {type: 'oil',      cost:  400},
        {type: 'nova',     cost:  700},
        {type: 'laser',    cost: 1000},
    ],
    selectedShopItemIdx: -1,
}
game.towers = game.tiles.map(row => row.map(_ => null));

const MAX_PARTICLE_COUNT = 20000;

game.particles = new Array(MAX_PARTICLE_COUNT);
for (let i = 0; i < game.particles.length; i++) {
    game.particles[i] = {
        type: 'null',
        x: -0.1,
        y: -0.1,
        z: -0.1,
        vx: -0.1,
        vy: -0.1,
        vz: -0.1,
        rot: -0.1,
        rotv: -0.1,
        sx: -0.1,
        sy: -0.1,
        sz: -0.1,
        r: -0.1,
        g: -0.1,
        b: -0.1,
        a: -0.1,
    }
}

createCombatLogEntry('Welcome to tower defense!<br />Defeat the evil enemies that are trying to breach into human world to take over.<br />');

let initialGameStateJSON = JSON.stringify(game);

html.uiDiv.addEventListener('pointermove', e => {
    game.mouse.x = e.clientX * game.width / html.canvas.clientWidth;
    game.mouse.y = e.clientY * game.height / html.canvas.clientHeight;
});

html.uiDiv.addEventListener('pointerdown', e => {
    // left click
    if (e.button === 0) {
        game.mouse.x         = e.clientX * game.width / html.canvas.clientWidth;
        game.mouse.y         = e.clientY * game.height / html.canvas.clientHeight;
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
            if (!e.shiftKey || selectedShopItem.cost > game.player.money) {
                // deselect tower from shop and remove it from cursor
                for (let it of html.shopButtons) {
                    it.classList.remove('tower-selected');
                }
                game.selectedShopItemIdx = -1;
            }
        }
    }
});

html.uiDiv.addEventListener('pointerup', e => {
    // left click
    if (e.button === 0) {
        game.mouse.isDown = false;
    }
});

html.pausePlayButton.addEventListener('pointerup', e => {
    // unpauase
    if (game.isPaused) {
        unpauseGame();
    }
    // pause
    else {
        pauseGame();
    }
});

html.speedupButton.addEventListener('click', e => {
    game.speed = (game.speed % 3) + 1;
    html.gameSpeed.style.visibility = 'visible';
    html.gameSpeed.innerHTML = game.speed + 'x';
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        // remove tower from cursor and shop selection
        game.selectedShopItemIdx = -1;
        for (let it of html.shopButtons) {
            it.classList.remove('tower-selected');
        }
    }
});

for (let i = 0; i < game.shopItems.length; i++) {
    html.shopButtons[i].addEventListener('click', e => {
        if (game.player.money >= game.shopItems[i].cost) {
            // deselect all other towers
            for (let it of html.shopButtons) {
                it.classList.remove('tower-selected');
            }
            // select the clicked tower
            if (game.selectedShopItemIdx == i) {
                game.selectedShopItemIdx = -1;
            }
            else {
                html.shopButtons[i].classList.add('tower-selected');
                game.selectedShopItemIdx = i;
            }
        }
    });
}

html.popupPlayAgain.addEventListener('click', resetGame);

export function createCombatLogEntry(s) {
    game.ui.combatLog += s + '<br />';
    html.combatLog.innerHTML  = game.ui.combatLog;
}

function updateUi() {
    for (let i = 0; i < game.shopItems.length; i++) {
        // update tower cost text
        if (html.towerCosts[i].innerHTML != game.shopItems[i].cost) {
            html.towerCosts[i].innerHTML  = game.shopItems[i].cost;
        }
        // update icons if player can or cannot afford tower
        if (game.player.money >= game.shopItems[i].cost) {
            if (html.shopButtons[i].classList.contains('tower-disabled')) {
                html.shopButtons[i].classList.remove('tower-disabled');
            }
        }
        else {
            if (!html.shopButtons[i].classList.contains('tower-disabled')) {
                html.shopButtons[i].classList.add('tower-disabled');
            }
        }
    }

    if (html.money.innerHTML != game.player.money) {
        html.money.innerHTML  = game.player.money;
    }
    if (html.health.innerHTML != game.player.health) {
        html.health.innerHTML  = game.player.health;
    }
    if (html.wave.innerHTML != game.wave.number) {
        html.wave.innerHTML  = game.wave.number;
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
    html.pausePlayButton.classList.remove('pause-button');
    html.pausePlayButton.classList.add('play-button');
    game.isPaused = true;
}

function unpauseGame() {
    html.pausePlayButton.classList.remove('play-button');
    html.pausePlayButton.classList.add('pause-button');
    game.isPaused = false;
    if (!game.wave.isActive) spawnWave();
}


function resetGame() {
    html.popup.classList.add('unclickable');
    html.popup.classList.remove('fade');
    html.pausePlayButton.classList.remove('unclickable');
    stopLoopingSounds();
    game = JSON.parse(initialGameStateJSON);
}

export function showEndPopout(isVictory) {
    html.popup.classList.remove('unclickable');
    html.popup.classList.add('fade');
    html.pausePlayButton.classList.add('unclickable');

    if (isVictory) {
        html.popupTitle.classList.remove('popup-defeat');
        html.popupTitle.classList.add('popup-victory');
        html.popupTitle.innerHTML = 'Victory';
        html.popupMain.innerHTML  = 'You have defeated the evil forces and stopped them from overcoming the human world! (for now...)'
    }
    else {
        html.popupTitle.classList.remove('popup-victory');
        html.popupTitle.classList.add('popup-defeat');
        html.popupTitle.innerHTML = 'Defeat';
        html.popupMain.innerHTML  = 'The evil forces have managed to invade the human world. The earth is doomed.'
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

const startTime = performance.now();
let timer = 0;

// FPS METER
const frameTimestamps = new Array(100).fill(-1);
let lastLogTimestamp = -1;
let isFpsMeterVisible = false;

document.addEventListener('keyup', e => {
    if (e.key == '9') {
        isFpsMeterVisible = true;
        html.fpsMeter.style.visibility = 'visible';
    }
});

function updateFpsMeter() {
    const now = performance.now();

    // FPS METER
    // replace the oldest timestamp with a new one
    let minIdx = 0;
    for (let i = 0; i < frameTimestamps.length; i++) {
        if (frameTimestamps[i] < frameTimestamps[minIdx]) {
            minIdx = i;
        }
    }

    const fps = 1000 * frameTimestamps.length / (now - frameTimestamps[minIdx]);

    frameTimestamps[minIdx] = now;

    // update html every 0.5 seconds
    if (lastLogTimestamp + 500 < now) {
        lastLogTimestamp = now;
        html.fps.innerText = Math.round(fps);
    }
}

function onAnimationFrame() {
    if (isFpsMeterVisible) {
        updateFpsMeter();
    }

    const timerTarget = (performance.now() - startTime) / 1000 * 60;

    // reset timer if we are more than 1 second behind (should happen when game is minimized)
    if (timerTarget - timer > 60) {
        console.log(`WE ARE RUNNING ${timerTarget - timer} BEHIND. RESETING TIMER`);
        timer = ~~timerTarget;
    }

    startStopwatch();  // PROFILING

    // MAIN LOOP 60fps
    while (timerTarget > timer) {
        timer++;

        if (!game.wave.isActive || !game.isPaused) {

            for (let i = 0; i < game.speed; i++) {
                updateGame(game);
            }
        }
        else {
            stopLoopingSounds();
        }
    }

    addTimeDifferenceTo('updateGame');  // PROFILING

    updateMouse(game);

    addTimeDifferenceTo('updateMouse');  // PROFILING

    updateUi();

    addTimeDifferenceTo('updateUi');  // PROFILING

    // compute game width and height
    let w = html.canvas.clientWidth;
    let h = html.canvas.clientHeight;
    let k = 1;
    const W = 1100;
    const H = 900;

    // determine scaling factor k
    if (H > h) k = H / h;
    if (W > w && k < W / w) k = W / w;

    game.width  = w * k;
    game.height = h * k;

    renderGame(game);

    addTimeDifferenceTo('renderGame');

    requestAnimationFrame(onAnimationFrame);
}

// init audio after user interaction
html.uiDiv.addEventListener('pointerdown', function handler(e) {
    e.currentTarget.removeEventListener(e.type, handler);
    initAudio();
})

// show ui after assets are loaded
let imageUrls = [
    'assets/ui/cursor.png',
    'assets/ui/buttons/button-pause.png',
    'assets/ui/buttons/button-pause-hover.png',
    'assets/ui/buttons/button-pause-active.png',
    'assets/ui/buttons/button-play.png',
    'assets/ui/buttons/button-play-hover.png',
    'assets/ui/buttons/button-play-active.png',
    'assets/ui/buttons/button-speedup.png',
    'assets/ui/buttons/button-speedup-hover.png',
    'assets/ui/buttons/button-speedup-active.png',
    'assets/ui/buttons/button-ballistic-turret.png',
    'assets/ui/buttons/button-ballistic-turret-hover.png', 
    'assets/ui/buttons/button-ballistic-turret-active.png',
    'assets/ui/buttons/button-ballistic-turret-disabled.png',
    'assets/ui/buttons/button-flame-turret.png',
    'assets/ui/buttons/button-flame-turret-hover.png',
    'assets/ui/buttons/button-flame-turret-active.png',
    'assets/ui/buttons/button-flame-turret-disabled.png',
    'assets/ui/buttons/button-oil-turret.png',
    'assets/ui/buttons/button-oil-turret-hover.png',
    'assets/ui/buttons/button-oil-turret-active.png',
    'assets/ui/buttons/button-oil-turret-disabled.png',
    'assets/ui/buttons/button-nova-turret.png',
    'assets/ui/buttons/button-nova-turret-hover.png',
    'assets/ui/buttons/button-nova-turret-active.png',
    'assets/ui/buttons/button-nova-turret-disabled.png',
    'assets/ui/buttons/button-laser-turret.png',
    'assets/ui/buttons/button-laser-turret-hover.png',
    'assets/ui/buttons/button-laser-turret-active.png',
    'assets/ui/buttons/button-laser-turret-disabled.png',
    'assets/ui/background/tower-select-background.png',
    'assets/ui/background/popup-background.png',
];

let audioUrls = [
    'assets/sounds/zap.mp3',
    'assets/sounds/pow.mp3',
    'assets/sounds/lose-health.mp3',
    'assets/sounds/flamethrower.mp3',
    'assets/sounds/goo-split.mp3',
    'assets/sounds/oil.mp3',
    'assets/sounds/place-turret.mp3',
    'assets/sounds/vek-death.mp3',
    'assets/sounds/vek2-death.mp3',
    'assets/sounds/armor-break.mp3',
    'assets/sounds/clank.mp3',
    'assets/sounds/scarab-death.mp3',
    'assets/sounds/laser.mp3',
];

const imgs = [];
for (const it of imageUrls) {
    let img = new Image();
    img.src = it;
    imgs.push(img);
}
const audios = [];
for (const it of audioUrls) {
    const a = new Audio();
    a.src = it;
    audios.push(a);
}

const assetLoadingCheckInterval = window.setInterval(() => {
    for (const it of imgs) {
        if (!it.complete) {
            return;
        }
    }
    for (const it of audios) {
        if (!it.readyState) {
            return;
        }
    }
    window.clearInterval(assetLoadingCheckInterval);
    html.loadingCover.style.display = 'none';
}, 100);

initGameRenderer();
onAnimationFrame();

// for debug purposes
window.game = game;
window.resetGame = resetGame;

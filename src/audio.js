// code snippets from: https://www.html5rocks.com/en/tutorials/webaudio/intro/
// license: https://creativecommons.org/licenses/by/3.0/

class BufferLoader {

    constructor(context, urlList, callback) {
        this.context = context;
        this.urlList = urlList;
        this.onload = callback;
        this.bufferList = new Array();
        this.loadCount = 0;
    }

    loadBuffer(url, index) {
        // Load buffer asynchronously
        let request = new XMLHttpRequest();
        request.open("GET", url, true);
        request.responseType = "arraybuffer";

        let loader = this;

        request.onload = function () {
            // Asynchronously decode the audio file data in request.response
            loader.context.decodeAudioData(
                request.response,
                function (buffer) {
                    if (!buffer) {
                        alert('error decoding file data: ' + url);
                        return;
                    }
                    loader.bufferList[index] = buffer;
                    if (++loader.loadCount == loader.urlList.length)
                        loader.onload(loader.bufferList);
                },
                function (error) {
                    console.error('decodeAudioData error', error);
                }
            );
        };

        request.onerror = function () {
            alert('BufferLoader: XHR error');
        };

        request.send();
    }

    load() {
        for (let i = 0; i < this.urlList.length; i++) {
            this.loadBuffer(this.urlList[i], i);
        }
    }
}
  
let context;
let bufferLoader;
let BUFFERS;
//                   0    1     2     3    4    5    6     7    8    9    10   11
let BUFFERS_GAIN = [0.1, 0.07, 0.4, 0.03, 0.3, 0.7, 0.08, 0.3, 0.1, 0.2, 0.1, 0.07];

export function initAudio() {
    try {
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        context = new AudioContext();
    }
    catch(e) {
        console.log('Web Audio API is not supported in this browser');
    }

    bufferLoader = new BufferLoader(
        context,
        [
            '/assets/sounds/bowling.mp3',             // 0
            '/assets/sounds/zap.mp3',                 // 1
            '/assets/sounds/pow.mp3',                 // 2
            '/assets/sounds/lose-health.mp3',         // 3
            '/assets/sounds/flamethrower.mp3',        // 4
            '/assets/sounds/goo-split.mp3',           // 5
            '/assets/sounds/oil.mp3',                 // 6
            '/assets/sounds/place-turret.mp3',        // 7
            '/assets/sounds/vek-death.mp3',           // 8
            '/assets/sounds/vek2-death.mp3',          // 9
            '/assets/sounds/armor-break.mp3',         // 10
            '/assets/sounds/clank.mp3',               // 11

        ],
        (bufferList) => BUFFERS = bufferList
    );

    bufferLoader.load();
}

export function playSound(bufferIndex) {
    if (!context) return null;
    let source = context.createBufferSource();
    source.buffer = BUFFERS[bufferIndex];
    const gainNode = context.createGain();
    gainNode.gain.value = BUFFERS_GAIN[bufferIndex];
    source.connect(gainNode).connect(context.destination);
    source.start(0);
    return source;
}

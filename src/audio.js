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
            'src/assets/sounds/bowling.mp3' // 0
        ],
        (bufferList) => BUFFERS = bufferList
    );

    bufferLoader.load();
}

export function playSound(bufferIndex) {
    let source = context.createBufferSource();
    source.buffer = BUFFERS[bufferIndex];
    source.connect(context.destination);
    source.start(0);
}

const stopwatches = new Map();
let stopwatchStartTimestamp = -1;
let profilingStartTimestamp = -1;

export function startStopwatch() {
    stopwatchStartTimestamp = performance.now();
}

export function addTimeDifferenceTo(stopwatchName) {
    const timeDifference = performance.now() - stopwatchStartTimestamp;
    if (!stopwatches.has(stopwatchName)) {
        stopwatches.set(stopwatchName, 0);
    }
    stopwatches.set(stopwatchName, stopwatches.get(stopwatchName) + timeDifference);
    stopwatchStartTimestamp = performance.now();
}

export function logStopwatches() {
    const now = performance.now();

    let sum = 0;
    for (const [k, v] of stopwatches) {
        sum += v;
    }

    for (const [k, v] of stopwatches) {
        const percentage = v / sum * 100;
        console.log(`${k.padStart(15)}: ${percentage.toFixed(2)}% ${(v/1000).toFixed(3)}s`);
    }

    console.log('-----------------------');
    console.log(` stopwatch sum: ${(sum/1000).toFixed(3)}s`);
    console.log(`profile length: ${((now - profilingStartTimestamp)/1000).toFixed(3)}s`);
}

export function resetStopwatches() {
    for (const [k, v] of stopwatches) {
        stopwatches.set(k, 0);
    }

    profilingStartTimestamp = performance.now();
}

window.logStopwatches   = logStopwatches;
window.resetStopwatches = resetStopwatches;
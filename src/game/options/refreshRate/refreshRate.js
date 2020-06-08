let currentFps = 5;
const milliSecond = 1000;
const getCurrentRate = (fps) => Math.floor(milliSecond / fps);

const refreshRate = {
    fpsRange: {
        minFps: 1,
        maxFps: 60,
    },
    currentRate: getCurrentRate(currentFps),
    increaseRate() {
        currentFps += 1;
        this.currentRate = getCurrentRate(currentFps);
    },
    decreaseRate() {
        currentFps -= 1;
        this.currentRate = getCurrentRate(currentFps);
    },
    getCurrentFps() {
        return currentFps;
    },
};

export default refreshRate;

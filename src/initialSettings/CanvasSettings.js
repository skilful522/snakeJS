import getContext from '../utils/getContext';

class CanvasSettings {
    constructor(width, height, backgroundColor) {
        this.width = width;
        this.height = height;
        this.backgroundColor = backgroundColor;
        this.elementSize = Math.floor(width / 20);
    }

    draw() {
        const ctx = getContext();

        ctx.fillStyle = this.backgroundColor;
        ctx.fillRect(0, 0, this.width, this.height);
    }
}

export default CanvasSettings;

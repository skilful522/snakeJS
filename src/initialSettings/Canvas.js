class Canvas {
    constructor(width, height, backgroundColor) {
        if (Canvas.instance instanceof Canvas) {
            return Canvas.instance;
        }
        this.width = width;
        this.height = height;
        this.backgroundColor = backgroundColor;
        this.elementSize = Math.floor(width / 20);
        this.canvas = document.querySelector('.gameField');
        this.context = this.canvas.getContext('2d');
        Canvas.instance = this;
    }

    draw() {
        this.setWidth();
        this.setHeight();
        this.context.fillStyle = this.backgroundColor;
        this.context.fillRect(0, 0, this.width, this.height);
    }

    setWidth() {
        this.canvas.width = this.width;
    }

    setHeight() {
        this.canvas.height = this.height;
    }

    getContext() {
        return this.context;
    }
}

export default Canvas;

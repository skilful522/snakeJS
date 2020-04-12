import fillBorderApple from '../utils/fillBorderApple';

export default class Food extends Image {
    constructor(name, position, size, src) {
        super();
        this.name = name;
        this.position = position;
        this.size = size;
        this.src = src;
    }

    drawFood(ctx) {
        const { x, y } = this.position;

        ctx.drawImage(this, x, y, this.size, this.size);
        const foodImgData = ctx.getImageData(x, y, this.size, this.size);

        fillBorderApple('red', foodImgData);
        ctx.putImageData(foodImgData, x, y);
    }

    setCorrectPosition({ x, y }) {
        this.position.x = x;
        this.position.y = y;
    }
}

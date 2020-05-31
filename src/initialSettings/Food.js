import fillBorderApple from '../utils/fillBorderApple';
import getContext from '../utils/getContext';

export default class Food extends Image {
    constructor(name, position, size, src) {
        super();
        this.name = name;
        this.position = position;
        this.size = size;
        this.src = src;
    }

    draw() {
        const ctx = getContext();
        const { x, y } = this.position;

        ctx.drawImage(this, x, y, this.size, this.size);
        const foodImgData = ctx.getImageData(x, y, this.size, this.size);

        fillBorderApple('red', foodImgData);
        ctx.putImageData(foodImgData, x, y);
    }

    setRandomPosition({ x, y }) {
        this.position.x = x;
        this.position.y = y;
    }

    spawn(freePositions) {
        const randomIndex = Math.floor(Math.random() * freePositions.length);

        this.setRandomPosition(freePositions[randomIndex]);
    }
}

import getContext from '../utils/getContext';

export default class Gift extends Image {
    constructor(name, position, size, src) {
        super();
        this.name = name;
        this.position = position;
        this.size = size;
        this.src = src;
    }

    static makeRandomActionWith(snake) {
        const randomNumber = Math.floor(Math.random() * 3);

        switch (randomNumber) {
            case 1:
                snake.increaseLength();
                break;
            case 2:
                snake.decreaseLength();
                break;
            default:
                break;
        }
    }

    setRandomPosition({ x, y }) {
        this.position.x = x;
        this.position.y = y;
    }

    draw() {
        const ctx = getContext();
        const { x, y } = this.position;

        ctx.drawImage(this, x, y, this.size, this.size);
    }

    spawn(freePositions) {
        const randomIndex = Math.floor(Math.random() * freePositions.length);

        this.setRandomPosition(freePositions[randomIndex]);
    }
}

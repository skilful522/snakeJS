import drawHeadCorrectSide from '../utils/drawHeadCorrectSide';
import drawTailCorrectSide from '../utils/drawTailCorrectSide';
import Canvas from './Canvas';

export default class Snake {
    constructor(initialPosition, size, snakeImage) {
        this.size = size;
        this.direction = {
            up: false,
            down: false,
            right: true,
            left: false,
        };
        this.body = [{ x: initialPosition.x, y: initialPosition.y }];
        this.snakeImage = snakeImage;
    }

    createSnake(length) {
        const { x, y } = this.body[0];

        for (let i = 0; i < length; i++) {
            this.body[i] = { x: x - i * this.size, y };
        }
    }

    draw() {
        const canvas = new Canvas();
        const ctx = canvas.getContext();
        const { bodyImage, headImages, tailImages } = this.snakeImage;
        const lastIndex = this.body.length - 1;

        this.body.forEach((bodyPart, index) => {
            if (index === 0) {
                drawHeadCorrectSide(this.direction, headImages, this.size, bodyPart);
            } else if (index === lastIndex) {
                drawTailCorrectSide(this.body, tailImages, this.size, bodyPart);
            } else {
                ctx.drawImage(bodyImage, bodyPart.x, bodyPart.y, this.size, this.size);
            }
        });
    }

    increaseLength() {
        this.body.push({
            x: this.body[this.body.length - 1].x,
            y: this.body[this.body.length - 1].y,
        });
    }

    decreaseLength() {
        if (this.body.length !== 1) {
            this.body.pop();
        }
    }

    move(canvasWidth) {
        const { body, direction, size } = this;
        const head = body[0];

        for (let i = body.length - 1; i > 0; i--) {
            const bodyPart = body[i];

            bodyPart.x = body[i - 1].x;
            bodyPart.y = body[i - 1].y;
        }
        this.correctPosition(canvasWidth);
        if (direction.up) {
            head.y -= size;
        }

        if (direction.down) {
            head.y += size;
        }
        if (direction.right) {
            head.x += size;
        }
        if (direction.left) {
            head.x -= size;
        }
    }

    correctPosition(canvasWidth) {
        const head = this.body[0];
        const { up, down, right, left } = this.direction;

        if (up && head.y <= 0) {
            head.y = canvasWidth;
        }
        if (right && head.x >= canvasWidth - this.size) {
            head.x = -this.size;
        }
        if (down && head.y >= canvasWidth - this.size) {
            head.y = -this.size;
        }
        if (left && head.x <= 0) {
            head.x = canvasWidth;
        }
    }
}

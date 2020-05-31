import getContext from '../utils/getContext';

export default class Snake {
    constructor(initialPosition, size, headImg, bodyImg) {
        this.size = size;
        this.direction = {
            up: false,
            down: false,
            right: true,
            left: false,
        };
        this.body = [{ x: initialPosition.x, y: initialPosition.y }];
        this.headImg = headImg;
        this.bodyImg = bodyImg;
    }

    createSnake(length) {
        const { x, y } = this.body[0];

        for (let i = 0; i < length; i++) {
            this.body[i] = { x: x - i * this.size, y };
        }
    }

    draw() {
        const ctx = getContext();

        this.body.forEach((bodyPart, index) => {
            if (index === 0) {
                ctx.drawImage(this.headImg, bodyPart.x, bodyPart.y, this.size, this.size);
            } else {
                ctx.drawImage(this.bodyImg, bodyPart.x, bodyPart.y, this.size, this.size);
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
        this.body.forEach((bodyPart) => {
            if (bodyPart.x >= canvasWidth) {
                bodyPart.x = 0;
            }
            if (bodyPart.x < 0) {
                bodyPart.x = canvasWidth - this.size;
            }
            if (bodyPart.y > canvasWidth) {
                bodyPart.y = 0;
            }
            if (bodyPart.y < 0) {
                bodyPart.y = canvasWidth - this.size;
            }
        });
    }
}

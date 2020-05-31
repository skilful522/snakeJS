import getContext from '../utils/getContext';

export default class Snake {
    constructor(initialPosition, size, headImages, bodyImg) {
        this.size = size;
        this.direction = {
            up: false,
            down: false,
            right: true,
            left: false,
        };
        this.body = [{ x: initialPosition.x, y: initialPosition.y }];
        this.headImages = headImages;
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
                const { up, down, right, left } = this.direction;
                const [currentDirection] = Object.values(this.direction).filter(Boolean);

                switch (currentDirection) {
                    case up:
                        ctx.drawImage(this.headImages[0], bodyPart.x, bodyPart.y, this.size, this.size);
                        break;
                    case down:
                        ctx.drawImage(this.headImages[1], bodyPart.x, bodyPart.y, this.size, this.size);
                        break;
                    case right:
                        ctx.drawImage(this.headImages[2], bodyPart.x, bodyPart.y, this.size, this.size);
                        break;
                    case left:
                        ctx.drawImage(this.headImages[3], bodyPart.x, bodyPart.y, this.size, this.size);
                        break;
                    default:
                        break;
                }
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

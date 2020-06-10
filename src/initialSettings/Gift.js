import soundsPlaylist from '../res/sounds/soundsPlaylist';
import getRandomAction from '../utils/getRandomAction';
import Canvas from './Canvas';

export default class Gift extends Image {
    constructor(name, position, size, src) {
        super();
        this.name = name;
        this.position = position;
        this.size = size;
        this.src = src;
        this.actions = ['snakeIncreased', 'snakeDecreased'];
    }

    makeRandomActionWith(snake) {
        const { actionsSounds } = soundsPlaylist;
        const randomAction = getRandomAction(this.actions);

        switch (randomAction) {
            case 'snakeIncreased':
                snake.increaseLength();
                break;
            case 'snakeDecreased':
                snake.decreaseLength();
                break;
            default:
                break;
        }
        const actionSound = actionsSounds[randomAction];

        new Audio(actionSound).play();
    }

    setRandomPosition({ x, y }) {
        this.position.x = x;
        this.position.y = y;
    }

    draw() {
        const canvas = new Canvas();
        const ctx = canvas.getContext();
        const { x, y } = this.position;

        ctx.drawImage(this, x, y, this.size, this.size);
    }

    spawn(freePositions) {
        const randomIndex = Math.floor(Math.random() * freePositions.length);

        this.setRandomPosition(freePositions[randomIndex]);
    }
}

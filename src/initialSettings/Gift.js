import soundPlayer from '../soundPlayer/soundPlayer';
import soundsPlaylist from '../soundPlayer/soundsSrc';
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
        const { actionsSrc } = soundsPlaylist;
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
        soundPlayer.play(actionsSrc[randomAction]);
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

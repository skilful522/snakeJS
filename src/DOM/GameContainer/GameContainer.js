import getElement from '../utils/getElement';
import createElement from '../utils/createElement';
import isDomElement from '../utils/isDomElement';

class GameContainer {
    constructor() {
        this.container = getElement('.container');
        this.gameContainer = getElement('.gameContainer')
            ? getElement('.gameContainer')
            : createElement('div', 'gameContainer');
        this.gameSpeedContainer = getElement('.gameSpeedContainer')
            ? getElement('.gameSpeedContainer')
            : createElement('div', 'gameSpeedContainer');
        this.decreaseTooltip = getElement('.decreaseTooltip')
            ? getElement('.decreaseTooltip')
            : createElement('div', 'decreaseTooltip');
        this.increaseTooltip = getElement('.decreaseTooltip')
            ? getElement('.increaseTooltip')
            : createElement('div', 'increaseTooltip');
        this.fpsContainer = getElement('.fpsContainer')
            ? getElement('.fpsContainer')
            : createElement('div', 'fpsContainer');
        this.canvas = getElement('.gameField') ? getElement('.gameField') : createElement('canvas', 'gameField');
    }

    initialize() {
        this.setInnerText(this.decreaseTooltip, 'press - for decreaseTooltip fps');
        this.setInnerText(this.increaseTooltip, 'press + for increaseTooltip fps');
    }

    mount() {
        this.container.append(this.gameContainer);
        this.gameContainer.append(this.gameSpeedContainer, this.canvas);
        this.gameSpeedContainer.append(this.decreaseTooltip, this.fpsContainer, this.increaseTooltip);
    }

    setInnerText(element, innerText) {
        if (typeof element === 'string') {
            if (this[element]) {
                this[element].innerText = innerText;
            }
        } else if (isDomElement(element)) {
            element.innerText = innerText;
        }
    }
}

const gameContainer = new GameContainer();

export default gameContainer;

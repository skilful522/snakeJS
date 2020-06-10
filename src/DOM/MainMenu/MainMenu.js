import getElement from '../utils/getElement';

const newGame = getElement('.playMenuButton');
const options = getElement('.optionsMenuButton');

class MainMenu {
    constructor() {
        this.buttons = {
            newGame,
            options,
        };
        this.container = getElement('.mainMenu');
    }

    buttonHandler(button, fn) {
        this.buttons[button].addEventListener('click', () => fn());
    }

    hide() {
        this.container.style.display = 'none';
    }
}

const mainMenu = new MainMenu();

export default mainMenu;

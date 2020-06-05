import gameInstance from '../../gameInstance';

function handleKeyPush(direction, size, event) {
    const keyCode = event.code;
    const { controller } = gameInstance;
    const { arrowLeft, arrowRight, arrowDown, arrowUp, space } = controller;

    switch (keyCode) {
        case arrowLeft: {
            event.preventDefault();

            direction.left = true;
            direction.right = false;
            direction.up = false;
            direction.down = false;
            break;
        }
        case arrowRight: {
            event.preventDefault();

            direction.left = false;
            direction.right = true;
            direction.up = false;
            direction.down = false;
            break;
        }
        case arrowUp: {
            event.preventDefault();

            direction.left = false;
            direction.right = false;
            direction.up = true;
            direction.down = false;
            break;
        }
        case arrowDown: {
            event.preventDefault();

            direction.left = false;
            direction.right = false;
            direction.up = false;
            direction.down = true;
            break;
        }
        case space: {
            gameInstance.pause ? (gameInstance.pause = false) : (gameInstance.pause = true);
            break;
        }
        default:
            break;
    }
}

export default handleKeyPush;

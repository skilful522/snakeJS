import gameState from '../../game/gameState/gameState';
import refreshRate from '../../game/options/refreshRate/refreshRate';
import gameControl from '../../game/options/gameControl/gameControl';
import updateContainer from '../../DOM/updateContainer';
const fpsContainer = document.querySelector('.fpsContainer');

function handleKeyPush(direction, size, event) {
    const keyCode = event.code;
    const { keyboardKeys } = gameControl;
    const { arrowLeft, arrowRight, arrowDown, arrowUp, space, numpadSubtract, numpadAdd } = keyboardKeys;
    const { fpsRange, getCurrentFps } = refreshRate;
    const { minFps, maxFps } = fpsRange;

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
            gameState.pause ? (gameState.pause = false) : (gameState.pause = true);
            break;
        }
        case numpadAdd: {
            const currentFps = getCurrentFps();

            if (currentFps !== maxFps) {
                refreshRate.increaseRate();
            }
            updateContainer(fpsContainer, `FPS - ${getCurrentFps()}`);
            break;
        }
        case numpadSubtract: {
            const currentFps = getCurrentFps();

            if (currentFps !== minFps) {
                refreshRate.decreaseRate();
            }

            updateContainer(fpsContainer, `FPS - ${getCurrentFps()}`);
            break;
        }
        default:
            break;
    }
}

export default handleKeyPush;

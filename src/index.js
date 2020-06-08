import handleKeyPush from './utils/gameControl/handleKeyPush';
import init from './utils/init';
import getCollisionObject from './utils/gameLogic/getCollisionObject';
import uploadAllColors from './utils/uploadAllColors';
import getGameObjectsPositions from './utils/getGameObjectsPositions';
import getFieldPositions from './utils/getFieldPositions';
import getFreePositions from './utils/getFreePositions';
import Gift from './initialSettings/Gift';
import getInteractiveGameObjects from './utils/getInteractiveGameObjects';
import Food from './initialSettings/Food';
import soundsPlaylist from './res/sounds/soundsPlaylist';
import gameState from './game/gameState/gameState';
import refreshRate from './game/options/refreshRate/refreshRate';
import updateContainer from './DOM/updateContainer';
const fpsContainer = document.querySelector('.fpsContainer');

uploadAllColors();
const { canvasSettings, gameFieldObjects } = init();
const { apple, snake, gift } = gameFieldObjects;
const { size, direction, body } = snake;
const { width, elementSize } = canvasSettings;

function game() {
    setTimeout(() => requestAnimationFrame(game), refreshRate.currentRate);
    if (!gameState.pause) {
        const gameObjectsPositions = getGameObjectsPositions(gameFieldObjects);
        const fieldPositions = getFieldPositions(elementSize, width);
        const freePositions = getFreePositions(gameObjectsPositions, fieldPositions);
        const interactiveGameObjects = getInteractiveGameObjects(gameFieldObjects);
        const headPosition = body[0];
        const collisionObject = getCollisionObject(headPosition, interactiveGameObjects);

        canvasSettings.draw();
        apple.draw();
        gift.draw();
        snake.draw();
        snake.move(width);
        if (collisionObject) {
            if (collisionObject instanceof Food) {
                const { name } = collisionObject;
                const { eatFoodSounds } = soundsPlaylist;
                const eatAppleSound = eatFoodSounds[name];

                snake.increaseLength();
                new Audio(eatAppleSound).play();
            }
            if (collisionObject instanceof Gift) {
                gift.makeRandomActionWith(snake);
            }
            collisionObject.spawn(freePositions);
        }
    }
}

document.addEventListener('keydown', handleKeyPush.bind(this, direction, size));
snake.createSnake(3);
updateContainer(fpsContainer, `FPS - ${refreshRate.getCurrentFps()}`);
game();

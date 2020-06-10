import handleKeyPush from './utils/gameControl/handleKeyPush';
import getGameFieldObjects from './utils/getGameFieldObjects';
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
import mainMenu from './DOM/MainMenu/MainMenu';
import gameContainer from './DOM/GameContainer/GameContainer';
import Canvas from './initialSettings/Canvas';

mainMenu.buttonHandler('newGame', () => {
    mainMenu.hide();
    gameContainer.mount();
    gameContainer.initialize();
    uploadAllColors();
    const gameFieldObjects = getGameFieldObjects();
    const { apple, snake, gift } = gameFieldObjects;
    const canvas = new Canvas(500, 500, 'black');
    const { size, direction, body } = snake;
    const { width, elementSize } = canvas;

    function game() {
        setTimeout(() => requestAnimationFrame(game), refreshRate.currentRate);

        if (!gameState.pause) {
            const gameObjectsPositions = getGameObjectsPositions(gameFieldObjects);
            const fieldPositions = getFieldPositions(elementSize, width);
            const freePositions = getFreePositions(gameObjectsPositions, fieldPositions);
            const interactiveGameObjects = getInteractiveGameObjects(gameFieldObjects);
            const headPosition = body[0];
            const collisionObject = getCollisionObject(headPosition, interactiveGameObjects);

            canvas.draw();
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
    gameContainer.setInnerText('fpsContainer', `FPS - ${refreshRate.getCurrentFps()}`);
    snake.createSnake(3);
    game();
});

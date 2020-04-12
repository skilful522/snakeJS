import handleKeyPush from './utils/gameControl/handleKeyPush.js';
import correctPosition from './utils/gameLogic/correctPosition.js';
import getCorrectRandomPosition from './utils/gameLogic/getCorrectRandomPosition.js';
import getContext from './utils/getContext.js';
import init from './utils/init.js';
import checkFoodCollision from './utils/gameLogic/checkFoodCollision.js';
import uploadAllColors from './utils/uploadAllColors.js';

uploadAllColors();
const ctx = getContext();

const { apple, snake, windowSettings } = init();
const { size, direction, body } = snake;
const { width } = windowSettings;

function game() {
    const headPosition = snake.body[0];

    windowSettings.drawWindow(ctx);
    apple.drawFood(ctx);
    snake.drawSnake(ctx);
    correctPosition(body);
    snake.move();
    if (checkFoodCollision(headPosition, apple.position)) {
        apple.setCorrectPosition(getCorrectRandomPosition(width, body));
        snake.increaseLength();
        apple.drawFood(ctx);
    }
}

document.addEventListener('keydown', handleKeyPush.bind(this, direction, size));

snake.createSnake(3);
setInterval(game, 1000 / 10);
// game();

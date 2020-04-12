import handleKeyPush from './utils/gameControl/handleKeyPush';
import correctPosition from './utils/gameLogic/correctPosition';
import getCorrectRandomPosition from './utils/gameLogic/getCorrectRandomPosition';
import getContext from './utils/getContext';
import init from './utils/init';
import checkFoodCollision from './utils/gameLogic/checkFoodCollision';
import uploadAllColors from './utils/uploadAllColors';

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

import Food from '../initialSettings/Food';
import Snake from '../initialSettings/Snake';
import Gift from '../initialSettings/Gift';
import snakeImage from '../images/snakeImage';

const getGameFieldObjects = () => {
    const apple = new Food('apple', { x: 250, y: 275 }, 25, 'src/res/food/apple.jpg');
    const snake = new Snake({ x: 75, y: 75 }, 25, snakeImage);
    const gift = new Gift('gift', { x: 200, y: 200 }, 25, 'src/res/gift/gift.png');

    return { snake, apple, gift };
};

export default getGameFieldObjects;

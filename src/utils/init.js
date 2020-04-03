import Food from '../initialSettings/Food.js';
import Snake from '../initialSettings/Snake.js';
import WindowSettings from '../initialSettings/WindowSettings.js';
import ImageWithSrc from './ImageWithSrc.js';
import rotateImg from './rotateImg.js';

const init = () => {
    const apple = new Food('apple', { x: 100, y: 100 }, 250, 'src/res/food/image_2020_02_27T07_43_09_906Z.png');
    const snake = new Snake(
        { x: 75, y: 75 },
        new ImageWithSrc(25, 25, 'src/res/snake/snakeHeadRight.png'),
        new ImageWithSrc(25, 25, 'src/res/snake/snakeBody.png')
    );
    const foodImg = new ImageWithSrc(200, 200, 'res/snake/snakeHeadRight.png');

    console.log(foodImg);
    rotateImg();
    const windowSettings = new WindowSettings(500, 500, 'black');

    return { apple, snake, windowSettings };
};

export default init;

import ImageWithSrc from '../utils/ImageWithSrc';

const snakeImage = {
    headImages: {
        upSideHead: new ImageWithSrc(25, 25, 'src/res/snake/snakeHead/snakeHeadUp.png'),
        downSideHead: new ImageWithSrc(25, 25, 'src/res/snake/snakeHead/snakeHeadDown.png'),
        rightSideHead: new ImageWithSrc(25, 25, 'src/res/snake/snakeHead/snakeHeadRight.png'),
        leftSideHead: new ImageWithSrc(25, 25, 'src/res/snake/snakeHead/snakeHeadLeft.png'),
    },
    bodyImage: new ImageWithSrc(25, 25, 'src/res/snake/snakeBody.png'),
    tailImages: {
        upSideTail: new ImageWithSrc(25, 25, 'src/res/snake/snakeTail/snakeTailDown.png'),
        downSideTail: new ImageWithSrc(25, 25, 'src/res/snake/snakeTail/snakeTailUp.png'),
        rightSideTail: new ImageWithSrc(25, 25, 'src/res/snake/snakeTail/snakeTailRight.png'),
        leftSideTail: new ImageWithSrc(25, 25, 'src/res/snake/snakeTail/snakeTailLeft.png'),
    },
};

export default snakeImage;

const getCorrectRandomPosition = (sizeOfGameField, snakeBody) => {
    const randomPosition = Math.floor(Math.random() * sizeOfGameField);

    if (randomPosition % 25 === 0 && !containsInSnake(snakeBody, randomPosition)) {
        return { x: randomPosition, y: randomPosition };
    }

    return getCorrectRandomPosition(sizeOfGameField, snakeBody);
};

function containsInSnake(snakeBody, randomPosition) {
    return snakeBody.some((bodyPartPosition) => {
        const { x, y } = bodyPartPosition;

        return x + y === randomPosition + randomPosition;
    });
}

export default getCorrectRandomPosition;

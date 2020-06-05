import getContext from './getContext';

const ctx = getContext();

export default function drawTailCorrectSide(snakeBody, tailImages, size, bodyPart) {
    const tail = snakeBody[snakeBody.length - 1];
    const beforeTail = snakeBody[snakeBody.length - 2];
    const { rightSideTail, leftSideTail, upSideTail, downSideTail } = tailImages;

    if (beforeTail.y > tail.y) {
        ctx.drawImage(upSideTail, bodyPart.x, bodyPart.y, size, size);
    }
    if (beforeTail.y < tail.y) {
        ctx.drawImage(downSideTail, bodyPart.x, bodyPart.y, size, size);
    }
    if (beforeTail.x > tail.x) {
        ctx.drawImage(rightSideTail, bodyPart.x, bodyPart.y, size, size);
    }
    if (beforeTail.x < tail.x) {
        ctx.drawImage(leftSideTail, bodyPart.x, bodyPart.y, size, size);
    }
}

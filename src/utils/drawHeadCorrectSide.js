import Canvas from '../initialSettings/Canvas';

export default function drawHeadCorrectSide(direction, headImages, size, bodyPart) {
    const canvas = new Canvas();
    const ctx = canvas.getContext();
    const [currentDirection] = Object.values(direction).filter(Boolean);
    const { up, down, right, left } = direction;
    const { upSideHead, downSideHead, rightSideHead, leftSideHead } = headImages;

    switch (currentDirection) {
        case up:
            ctx.drawImage(upSideHead, bodyPart.x, bodyPart.y, size, size);
            break;
        case down:
            ctx.drawImage(downSideHead, bodyPart.x, bodyPart.y, size, size);
            break;
        case right:
            ctx.drawImage(rightSideHead, bodyPart.x, bodyPart.y, size, size);
            break;
        case left:
            ctx.drawImage(leftSideHead, bodyPart.x, bodyPart.y, size, size);
            break;
        default:
            break;
    }
}

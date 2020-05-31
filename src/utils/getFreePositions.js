export default function getFreePositions(gameFieldObjects, fieldPositions) {
    const map = {};

    gameFieldObjects.forEach(({ x, y }) => {
        const key = `${x}/${y}`;

        map[key] = y;
    });

    return fieldPositions.filter((fieldPosition) => {
        const { x, y } = fieldPosition;
        const key = `${x}/${y}`;

        return map[key] ? false : fieldPosition;
    });
}

export default function getCollisionObject(headPosition, interactiveGameObjects) {
    const map = {};

    const headPositionsKey = Object.values(headPosition).reduce((accumulator, currentPosition) => {
        return `${accumulator}/${currentPosition}`;
    });

    map[headPositionsKey] = headPositionsKey;

    const [collisionObject] = interactiveGameObjects.filter((interactiveGameObject) => {
        const { x, y } = interactiveGameObject.position;
        const key = `${x}/${y}`;

        return map[key];
    });

    return collisionObject;
}

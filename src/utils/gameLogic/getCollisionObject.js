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
//  return Object.keys(gameObjectPosition).every((key) => {
//         console.log(map[key], gameObjectPosition[key]);
//         return map[key] === gameObjectPosition[key];
//     });

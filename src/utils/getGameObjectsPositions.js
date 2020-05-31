import Snake from '../initialSettings/Snake';

export default function getGameObjectsPositions(gameFieldObjects) {
    return Object.values(gameFieldObjects)
        .map((gameFieldObject) => (gameFieldObject instanceof Snake ? gameFieldObject.body : gameFieldObject.position))
        .flat();
}

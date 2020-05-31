import Snake from '../initialSettings/Snake';

export default function getInteractiveGameObjects(gameFieldObjects) {
    return Object.values(gameFieldObjects).filter((gameFieldObject) => gameFieldObject instanceof Snake === false);
}

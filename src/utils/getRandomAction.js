export default function getRandomAction(actions) {
    const randomActionIndex = Math.floor(Math.random() * actions.length);

    return actions[randomActionIndex];
}

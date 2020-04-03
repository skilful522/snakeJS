export default function checkFoodCollision(headPosition, foodPosition) {
    const map = new Map();

    Object.keys(headPosition).forEach((key) => {
        map[key] = headPosition[key];
    });

    return Object.keys(foodPosition).every((key) => {
        return map[key] === foodPosition[key];
    });
}

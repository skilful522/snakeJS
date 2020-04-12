export default function getColorsOfPixels(list) {
    const map = {};

    return list.map((color) => {
        if (map[color]) {
            map[color].frequency += 1;
            return map[color];
        }
        map[color] = { color, frequency: 1 };
        return map[color];
    });
}

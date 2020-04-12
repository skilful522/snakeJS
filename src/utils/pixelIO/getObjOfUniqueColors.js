export default function getObjOfUniqueColors(colorsList) {
    const map = {};
    const copy = colorsList.slice();

    copy.sort((first, second) => second.frequency - first.frequency).forEach((item) => {
        if (item.color === undefined) {
            map.undefinedColor = item;
        } else {
            map[item.color] = item;
        }
    });
    return map;
}

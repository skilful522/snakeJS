import getPixels from './pixelIO/getPixels.js';
import setPixel from './pixelIO/setPixel.js';
import colors from './graphic/colors.js';

function getKey(pixel) {
    const r = Math.round((pixel[0] / 10) * 10);
    const g = Math.round((pixel[1] / 10) * 10);
    const b = Math.round((pixel[2] / 10) * 10);

    return `${r},${g},${b}`;
}

const getRGBA = (str, alpha) => {
    str = str.split(',');
    const r = str[0];
    const g = str[1];
    const b = str[2];

    return [r, g, b, alpha];
};

function getSortedColorsByFrequency(list) {
    const map = {};

    list.forEach((key) => {
        if (map[key]) {
            map[key] += 1;
        } else {
            map[key] = 1;
        }
    });

    return Object.keys(map)
        .map((key) => {
            return { color: key, frequency: map[key] };
        })
        .sort((first, second) => {
            if (first.frequency > second.frequency) {
                return -1;
            }
        });
}

export default function fillApple(color, imgData) {
    const pixels = getPixels(imgData);
    const imgColors = pixels.map((pixel, index) => {
        const key = getKey(pixel);

        return { color: colors[key], index };
    });

    const sorted = getSortedColorsByFrequency(imgColors);
    console.log(sorted);

    // imgColors.forEach((color, index) => {
    //     if (color === 'YourPink' || color === 'Peppermint' || color === 'Porcelain') {
    //         // setPixel(imgData, index, [255, 0, 0, 255]);
    //     } else {
    //         // setPixel(imgData, index, [0, 0, 0, 255]);
    //     }
    // });
}
//setPixel(imgData, index, [25, 0, 120, 255]);

import getPixels from './pixelIO/pixelManipulation/getPixels.js';
import setPixel from './pixelIO/pixelManipulation/setPixel.js';
import getColorsOfPixels from './pixelIO/getColorsOfPixels.js';
import getLocalStorage from './localStorage/getLocalStorage.js';

function getRGBKey(pixel) {
    const r = Math.round((pixel[0] / 10) * 10);
    const g = Math.round((pixel[1] / 10) * 10);
    const b = Math.round((pixel[2] / 10) * 10);

    return `${r},${g},${b}`;
}

function getRGBArr(rgbStr) {
    const [r, g, b] = rgbStr.split(',');

    return [r, g, b];
}

export default function fillBorderApple(colorName, imgData) {
    const pixels = getPixels(imgData);
    const colorsMap = getLocalStorage('colorsMap');
    const imgColors = pixels.map((pixel) => {
        const rgb = getRGBKey(pixel);

        return colorsMap[rgb];
    });

    const colorsOfPixels = getColorsOfPixels(imgColors);

    colorsOfPixels.forEach((item, index) => {
        if (item.color === undefined) {
            const rgbArr = getRGBArr(colorsMap[colorName]);

            setPixel(imgData, index, rgbArr);
        } else {
            setPixel(imgData, index, getRGBArr(colorsMap['black']));
        }
    });
}

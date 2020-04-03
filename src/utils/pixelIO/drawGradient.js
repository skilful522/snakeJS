import setPixel from './setPixel.js';

export default function drawGradient(imgData, width, height) {
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            setPixel(imgData, i + j * imgData.width, [i, j, j, 255]);
        }
    }
}

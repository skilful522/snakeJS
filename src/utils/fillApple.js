import getPixels from './pixelIO/getPixels.js';
import setPixel from './pixelIO/setPixel.js';
import colors from './graphic/colors.js';
import rgbToHex from './pixelIO/RGBToHex.js';

export default function fillApple(color, imgData) {
    const pixels = getPixels(imgData);
    const colors = {};

    fetch('http://thecolorapi.com/id?rgb=0,0,0')
        .then((response) => response.json())
        .then(color => console.log(color));
    pixels.forEach((pixel, index) => {
        const [r, g, b] = pixel;

        fetch('http://thecolorapi.com/id?rgb=0,0,0')
            .then((response) => response.json())
            .then((color) => {
                colors[color] = [r,g,b];
            });
        if (pixel[1] > 100 && pixel[1] <= 255 && pixel[0] <= 150 && pixel[2] <= 150) {
            // pixel = ;
            setPixel(imgData, index, [0, 255, 0, 255]);
        }
        // set.add(rgbToHex(...pixel));
        if (checkWhite(pixel)) {
            // setPixel(imgData, index, colors['black']);
        } else {
            // setPixel(imgData, index, colors[color]);
        }
        // console.table(pixel,'pixel',index);
        // setPixel(imgData, index, [25, 0, 120, 255]);
    });
   // console.log(set);
}

function checkWhite(pixel) {
    return pixel.some((dot, index) => {
        if (index < 3) {
            return dot >= 236;
        }
    });
}

function checkBlack(pixel) {}
// Взять все пиксели
// Пробежаться по ним и если цекущий цвет чёрный то остальные будут красные
// [g,r,b,a,g,r,b,a,g,r,b,a]

// red - 255 0 0
// green - 0 255 0
// blue 0 0 255
// white 255 255 255

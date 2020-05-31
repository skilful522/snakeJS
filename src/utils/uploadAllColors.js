import getLocalStorage from './localStorage/getLocalStorage';
import getColorsMap from './getColorsMap';
import setLocalStorage from './localStorage/setLocalStorage';

const uploadAllColors = () => {
    const allColors = getLocalStorage('allColors');

    if (!allColors.length) {
        fetch('https://api.color.pizza/v1/')
            .then((res) => res.json())
            .then((colors) => {
                const colorsMap = getColorsMap(colors);

                setLocalStorage('allColors', colors);
                setLocalStorage('colorsMap', colorsMap);
                return colorsMap;
            });
    }
};

export default uploadAllColors;

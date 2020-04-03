export default function getPixels(imgData) {
    const result = [];

    imgData.data.forEach((element, index) => {
        if (index % 4 === 0) {
            result.push(imgData.data.subarray(index, index + 4));
        }
    });

    return result;
}

export default function setPixel(imgData, index, pixelData) {
    imgData.data.set(pixelData, index * 4);
}

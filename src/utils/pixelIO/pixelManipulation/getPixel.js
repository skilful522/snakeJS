export default function getPixel(imgData, index) {
    return imgData.data.slice(index * 4, index * 4 + 4); // [R,G,B,A]
}

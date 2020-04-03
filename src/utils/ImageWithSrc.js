export default class ImageWithSrc extends Image {
    constructor(width, height, src) {
        super(width, height);
        this.src = src;
    }
}

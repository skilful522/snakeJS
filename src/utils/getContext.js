export default function getContext() {
    const canvas = document.querySelector('.gameField');

    return canvas.getContext('2d');
}

export default function getFieldPositions(elementSize, canvasWidth) {
    const rows = Math.floor(canvasWidth / elementSize);

    return Array.from(Array(rows))
        .map((element, index) => {
            return Array.from(Array(rows)).map((rowElement, rowIndex) => ({
                x: index * elementSize,
                y: rowIndex * elementSize,
            }));
        })
        .flat();
}

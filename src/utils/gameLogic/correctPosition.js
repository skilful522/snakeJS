export default function correctPosition(body) {
    body.forEach((bodyPart) => {
        if (bodyPart.x >= 500) {
            bodyPart.x = 0;
        }
        if (bodyPart.x < 0) {
            bodyPart.x = 475;
        }
        if (bodyPart.y > 500) {
            bodyPart.y = 0;
        }
        if (bodyPart.y < 0) {
            bodyPart.y = 475;
        }
    });
}

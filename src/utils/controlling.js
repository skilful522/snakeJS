const controller = {
    arrowLeft: 'ArrowLeft',
    arrowRight: 'ArrowRight',
    arrowDown: 'ArrowDown',
    arrowUp: 'ArrowUp',
};

function handleKeyPush(direction, size, event) {
    const keyCode = event.code;
    const { arrowLeft, arrowRight, arrowDown, arrowUp } = controller;

    switch (keyCode) {
        case arrowLeft: {
            event.preventDefault();

            direction.left = true;
            direction.right = false;
            direction.up = false;
            direction.down = false;
            break;
        }
        case arrowRight: {
            event.preventDefault();

            direction.left = false;
            direction.right = true;
            direction.up = false;
            direction.down = false;
            break;
        }
        case arrowUp: {
            event.preventDefault();

            direction.left = false;
            direction.right = false;
            direction.up = true;
            direction.down = false;
            break;
        }
        case arrowDown: {
            event.preventDefault();

            direction.left = false;
            direction.right = false;
            direction.up = false;
            direction.down = true;
            break;
        }
    }
}

export default handleKeyPush;

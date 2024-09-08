const cursor = document.querySelector('#cursor');
let mouseX = 0;
let mouseY = 0;

// Set initial position if not already set
if (!cursor.style.left) {
    cursor.style.left = '50%';
}
if (!cursor.style.top) {
    cursor.style.top = '50%';
}

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

setInterval(() => {
    let posX = parseInt(cursor.style.left);
    let posY = parseInt(cursor.style.top);

    let dX = mouseX - posX;
    let dY = mouseY - posY;

    let diff = 0.1;
    posX += dX * diff;
    posY += dY * diff;

    cursor.style.left = `${posX}px`;
    cursor.style.top = `${posY}px`;
}, 10);
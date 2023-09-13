const container = document.getElementById('movable-container');
let isDragging = false;
let offsetX, offsetY;

container.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - container.getBoundingClientRect().left;
    offsetY = e.clientY - container.getBoundingClientRect().top;
});

document.addEventListener('mousemove', (e) => { 
    if (!isDragging) return;

    const left = e.clientX - offsetX;
    const top = e.clientY - offsetY;
    
    container.style.transform = `translate(${left}px, ${top}px)`;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

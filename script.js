const container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
    const box = document.createElement('div');
    box.setAttribute('class', 'box');
    container.appendChild(box);
}

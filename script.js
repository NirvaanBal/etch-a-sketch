const container = document.querySelector('.container');
const button = document.querySelector('button');

const grid = (size) => {
    let html = '';
    for (let i = 0; i < size; i++) {
        html += '<div class="row">';
        for (let j = 0; j < size; j++) {
            html += '<div class="box"></div>';
        }
        html += '</div>';
    }

    container.insertAdjacentHTML('afterbegin', html);
};
grid(16);

let boxes = document.querySelectorAll('.box');
boxes.forEach((box) =>
    box.addEventListener('mouseenter', (e) => {
        e.target.classList.add('visited');
    })
);

button.addEventListener('click', () => {
    container.textContent = '';
    const gridSize = window.prompt('Enter grid size');
    grid(+gridSize);
});

const container = document.querySelector('.container');
const button = document.querySelector('button');
let gridSize = 16;

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

const initialize = (gridSize) => {
    grid(gridSize);

    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) =>
        box.addEventListener('mouseenter', (e) => {
            e.target.classList.add('visited');
        })
    );
};

button.addEventListener('click', () => {
    container.textContent = '';
    gridSize = window.prompt('Enter grid size');
    initialize(+gridSize);
});

initialize(gridSize);

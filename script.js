const container = document.querySelector('.container');
const button = document.querySelector('button');
const error = document.querySelector('.error');
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
    boxes.forEach((box) => {
        box.style.width = `${400 / gridSize}px`;
        box.style.height = `${400 / gridSize}px`;
        box.addEventListener('mouseenter', (e) => {
            e.target.classList.add('visited');
        });
    });
};

button.addEventListener('click', () => {
    gridSize = +window.prompt('Enter grid size');

    if (gridSize > 100 || gridSize < 1) {
        error.textContent = 'Please provide a number between 1 and 100';
    } else {
        container.textContent = '';
        if (!gridSize) gridSize = 16;
        initialize(gridSize);
    }
});

initialize(gridSize);

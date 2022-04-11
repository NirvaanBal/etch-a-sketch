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

const randomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
};

const initialize = (gridSize) => {
    grid(gridSize);

    const red = Math.floor(Math.random() * 156);
    const green = Math.floor(Math.random() * 156);
    const blue = Math.floor(Math.random() * 156);

    const boxes = document.querySelectorAll('.box');

    boxes.forEach((box) => {
        box.style.width = `${500 / gridSize}px`;
        box.style.height = `${500 / gridSize}px`;

        let pass = 0;
        box.addEventListener('mouseenter', (e) => {
            const color = `rgb(${red + pass}, ${green + pass}, ${blue + pass})`;
            if (pass === 100) {
                e.target.style.backgroundColor = '#fff';
            } else {
                e.target.style.backgroundColor = color;
                pass += 10;
            }
        });
    });
};

button.addEventListener('click', () => {
    gridSize = +window.prompt('Enter grid size');

    if (gridSize > 100 || gridSize < 1) {
        error.textContent = 'Please provide a number between 1 and 100';
    } else {
        error.textContent = `Grid size: ${gridSize}`;
        container.textContent = '';
        if (!gridSize) gridSize = 16;
        initialize(gridSize);
    }
});

initialize(gridSize);

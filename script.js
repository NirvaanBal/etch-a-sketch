const container = document.querySelector('.container');

let html = '';
for (let i = 0; i < 16; i++) {
    html += '<div class="row">';
    for (let j = 0; j < 16; j++) {
        html += '<div class="box"></div>';
    }
    html += '</div>';
}

container.insertAdjacentHTML('afterbegin', html);

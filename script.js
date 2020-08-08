let container = document.querySelector('#container');
let colorButton = document.querySelector('#color');

window.addEventListener('load', function() {
    defaultValues();
    makeGrid(100);
    paint(colorButton.value);
});

function makeGrid(n) {
    for (i = 0; i < n**2; i++) {
        cells = document.createElement('div');
        cells.className = 'cells';
        container.appendChild(cells);       
    }
};

function paint(color) {
    if (color === 'randomColor') {
        container.addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = getRandomColor();
        }) 
    } else {
        container.addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = color;
        }) 
    }
};

let defaultButton = document.querySelector('#defaultButton')
defaultButton.addEventListener('click', function() {
    defaultValues();
    columnsRows(100);
    removeGrid();
    makeGrid(100);
    paint(colorButton.value);
});

let gridSizeButton = document.querySelector('#gridSize');
gridSizeButton.addEventListener('click', function() {
    removeGrid();
    selectGridSize(gridSizeButton.value);
});

function selectGridSize(value) {
    let gridSize = (value - 11) * -10;
    columnsRows(gridSize);
    makeGrid(gridSize);
};

function removeGrid() {
    while (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }
};

function defaultValues() {
    document.getElementById('color').value = 'black';
    document.getElementById('gridSize').value = '1';
};

function columnsRows(n) {
    document.documentElement.style.setProperty('--columns-row', n);
};

colorButton.addEventListener('click', function() {
        paint(colorButton.value);
});

colorButton.addEventListener('change', function() {
    paint(colorButton.value);
});

let randomButton = document.querySelector('#random');
randomButton.addEventListener('click', function() {
    paint('randomColor');
})

function getRandomColor() {
    let randomColor = [];
        for (i = 0; i < 3; i++) {
            randomColor.push(Math.floor(Math.random() * 256));
        }
        return  `rgb(${randomColor})`;
};
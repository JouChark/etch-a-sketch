let container = document.querySelector('#container'),
    gridSize;

window.addEventListener('load', function() {
    defaultValues()
    makeGrid(16);
    paint('black');
});

function makeGrid(n) {
    for (i = 0; i < n**2; i++) {
        cells = document.createElement('div');
        cells.className = 'cells';
        container.appendChild(cells);       
    }
};

function paint(color) {
    container.addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = color;
    }) 
};

let gridSizeButton = document.querySelector('#gridSize');

function selectGridSize() {
    gridSize = gridSizeButton.value;
    columnsRows(gridSize);
    makeGrid(gridSize);
};

gridSizeButton.addEventListener('click', function() {
    removeGrid();
    selectGridSize(gridSizeButton.value);
});

let resetButton = document.querySelector('#resetButton')
resetButton.addEventListener('click', function() {
    defaultValues()
    columnsRows(16);
    removeGrid();
    makeGrid(16);
    paint('black');
});

function removeGrid() {
    while (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }
};

let colorButton = document.querySelector('#color');
colorButton.addEventListener('change', function() {
    paint(colorButton.value);
});

function defaultValues() {
    document.getElementById('color').value = 'black'
    document.getElementById('gridSize').value = '16'
}

function columnsRows(n) {
    document.documentElement.style.setProperty('--columns-row', n);
}
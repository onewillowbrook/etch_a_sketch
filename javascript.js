const container = document.querySelector('.container');
const buttonSizer = document.querySelector('.sizer');
const inputSizer = document.querySelector('.inputSizer');
const eraseAllButton = document.querySelector('.eraseAll');
const colorPicker = document.querySelector('#colorPicker');
const marker = document.querySelector('.marker');
const eraser = document.querySelector('.eraserButton')


let isDrawing = false;
let markerSelector = true;

function markerFunction() {
    markerSelector = true
}

function eraserFunction() {
    markerSelector = false
}

document.body.addEventListener('mousedown', () => isDrawing = true);
document.body.addEventListener('mouseup', () => isDrawing = false);

function createGrid(gridSize) {
    container.innerHTML = '';
    const boxSize = 960 / gridSize;
    for (let i = 0; i < gridSize * gridSize; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;
        box.style.border = '1px solid #ccc';
        
        // box.textContent = `Box ${i + 1}`;
        box.addEventListener('mouseenter', () => {
            if (isDrawing && markerSelector === true) {
                box.style.backgroundColor = colorPicker.value;
            } if (isDrawing && markerSelector === false) {
                box.style.backgroundColor = 'lightblue';
            }
            
        });

        box.addEventListener('mousedown', () => {
            box.style.backgroundColor = colorPicker.value;
        })
        
        // box.addEventListener('mouseleave', () => {
        //     box.style.backgroundColor = '';
        // });
    
        container.appendChild(box);
        }
}



createGrid(10);

buttonSizer.addEventListener("click", () => {
    const size = parseInt(inputSizer.value);
    if (!isNaN(size) && size > 9 && size < 101) {
        createGrid(size);
    } else {
        alert("Please enter a valid size: 10 <-> 100 are allowed.");
    }
});

eraseAllButton.addEventListener('click', () => {
    document.querySelectorAll('.box').forEach(box => {
        box.style.backgroundColor = '';
    })
})

eraser.addEventListener('click', markerFunction);
marker.addEventListener('click', eraserFunction);
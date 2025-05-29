const container = document.querySelector('.container');
const buttonSizer = document.querySelector('.sizer');
const inputSizer = document.querySelector('.inputSizer');
const container = document.querySelector('.container');

function createGrid(gridSize) {
    container.innerHTML = '';
    const boxSize = 960 / gridSize;
    for (let i = 0; i < gridSize * gridSize; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;
        box.style.border = '1px solid #ccc';
        container.appendChild(box);
    }
}



for (let i = 0; i < 16; i++) {
    const newDiv = document.createElement('div');

    newDiv.classList.add('box');

    newDiv.textContent = `Box ${i + 1}`;
    container.appendChild(newDiv);

    newDiv.addEventListener('mouseenter', () => {
        newDiv.style.backgroundColor = 'dodgerblue';
    });
    
    newDiv.addEventListener('mouseleave', () => {
        newDiv.style.backgroundColor = '';
    });
}

function boxSizer(size) {
    document.querySelectorAll('.box').forEach(box => {
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
    })
};

buttonSizer.addEventListener("click", () => {
    const size = parseInt(inputSizer.value);
    if (!isNaN(size) && size > 9 && size < 101) {
        boxSizer(size);
    } else {
        alert("Please enter a valid size: 10 <-> 100 are allowed.");
    }
});
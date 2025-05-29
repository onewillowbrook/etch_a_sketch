const container = document.querySelector('.container');
const buttonSizer = document.querySelector('.sizer');
const inputSizer = document.querySelector('.inputSizer');

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
            box.style.backgroundColor = 'dodgerblue';
        });
        
        box.addEventListener('mouseleave', () => {
            box.style.backgroundColor = '';
        });
    
        container.appendChild(box);
        }
}



createGrid(16);

buttonSizer.addEventListener("click", () => {
    const size = parseInt(inputSizer.value);
    if (!isNaN(size) && size > 9 && size < 101) {
        createGrid(size);
    } else {
        alert("Please enter a valid size: 10 <-> 100 are allowed.");
    }
});
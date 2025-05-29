const container = document.querySelector('.container');
const buttonSizer = document.querySelector('.sizer');
const inputSizer = document.querySelector('.inputSizer');



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
        alert("Please enter a valid size.");
    }
});
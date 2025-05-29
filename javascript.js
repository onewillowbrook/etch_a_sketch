const container = document.querySelector('.container');



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


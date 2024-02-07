const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let colorChangeInterval;



function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

function startColorChange () {
    startButton.disable = true;

    colorChangeInterval = setInterval(() =>{
       document.body.style.background = getRandomHexColor();
    }, 1000);
}


function stopColorChange (){
    startButton.disable = false;
    clearInterval(colorChangeInterval);
    colorChangeInterval = null;
}


startButton.addEventListener('click', startColorChange);
stopButton.addEventListener('click', stopColorChange);
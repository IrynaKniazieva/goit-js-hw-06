const buttonChangColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');
const backgroundColor = document.querySelector('.widget');

buttonChangColor.addEventListener('click', onColorChange);

function onColorChange (event) {
  backgroundColor.style = getRandomHexColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;;
}



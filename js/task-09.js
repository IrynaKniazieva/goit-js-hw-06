const buttonChangColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');


buttonChangColor.addEventListener('click', onColorChange);

function onColorChange () {
  document.body.style.backgroundColor = (getRandomHexColor);
  spanColor.textContent = getRandomHexColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;;
}



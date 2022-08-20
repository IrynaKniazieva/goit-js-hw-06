const buttonChangColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

console.log(buttonChangColor);
console.log(spanColor);

buttonChangColor.addEventListener('click', () => {
  const hexColor = getRandomHexColor();
  document.body.style.backgroundColor = hexColor;
  spanColor.textContent = hexColor;

})

// buttonChangColor.addEventListener('click', onColorChange);

// function onColorChange () {
//   document.body.style.backgroundColor = getRandomHexColor();
//   spanColor.textContent = getRandomHexColor();
// }

// randomColor из VSC
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


// randomColor из ТЗ
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;;
// }
const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

console.log(inputEl);
console.log(spanEl);

spanEl.style.fontSize = inputEl.value + 'px';

inputEl.addEventListener('input',onChangeFont);

// function onChangeFont() {
//     text.style.fontSize = inputEl.value + 'px'
// }

function onChangeFont() {
    spanEl.style.fontSize = inputEl.value + 'px';
}


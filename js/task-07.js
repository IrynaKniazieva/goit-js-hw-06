const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

console.log(inputEl);
console.log(spanEl);

inputEl.addEventListener('input',onChangeFont);

function onChangeFont() {
    text.style.fontSize = inputEl.value + 'px'
}


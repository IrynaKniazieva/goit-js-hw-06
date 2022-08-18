const inputEl = document.querySelector('input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur (event) {
    const input = event.currentTarget; 
    

if (input.value.length === 6){
    input.classList.remove('invalid');
    input.classList.add('valid');
} else {
    input.classList.remove('valid');
    inputEl.classList.add('invalid');
}};
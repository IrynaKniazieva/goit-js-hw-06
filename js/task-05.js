const inputEl = document.querySelector('input');
const nameLabel = document.querySelector('h1>span');

console.log(inputEl);
console.log(nameLabel);

inputEl.addEventListener('input', onInputChange);

// function onInputChange (event) {
//     nameLabel.textContent = event.currentTarget.value;
// };

function onInputChange (event) {
    if (event.currentTarget.value === "") {
        nameLabel.textContent = "Anonymous";
    } else {
        nameLabel.textContent = event.currentTarget.value;
    }
   
};
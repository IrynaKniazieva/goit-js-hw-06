const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

console.log(decrementBtn);
console.log(incrementBtn);
console.log(valueEl);


const counterValue = {
value: 0,
decrement() {
    this.value -= 1;
},
increment() {
    this.value += 1;
},
};

decrementBtn.addEventListener('click', () => {
console.log('клик на декремент');
counterValue.decrement();
valueEl.textContent = counterValue.value;
}); 

incrementBtn.addEventListener('click', () => {
console.log('клик на инкремент');
counterValue.increment();
valueEl.textContent = counterValue.value;
});
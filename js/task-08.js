const formEl = document.querySelector('.login-form');

console.log(formEl);

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault()
    const {
        elements: { email, password }
      } = event.currentTarget;

      if (email.value === "" || password.value === "") {
        return alert("Пожалуйста, заполните все поля!");
      }

      console.log(`Email: ${email.value}, Password: ${password.value}`);
      event.currentTarget.reset();
}
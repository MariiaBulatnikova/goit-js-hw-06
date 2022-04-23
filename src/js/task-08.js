const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit (event)  {
    event.preventDefault();
    const {
    elements: { email, password }
    } = event.currentTarget;

    if (email.value === '' || password.value === '' ) {
      return alert('all fields must be filled!');
    }
    const formDataObj = {
     email: email.value,
        password: password.value,
    };
        console.log(formDataObj);
        formEl.reset();
}



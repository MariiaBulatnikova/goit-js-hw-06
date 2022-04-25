const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', () => {

    if (inputEl.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.add('valid');
        inputEl.classList.replace('invalid', 'valid');
   
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.replace('valid', 'invalid');
    }
})

const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', () => {
    inputEl.value === '' ? spanEl.textContent = 'Anonymous' :
        spanEl.textContent = event.currentTarget.value;
})


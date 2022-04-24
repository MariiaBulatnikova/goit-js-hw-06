function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    }`;
}

const btnEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color')



btnEl.addEventListener('click', () => {
  const body = document.querySelector('body');
  body.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = body.style.backgroundColor;

})

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// console.log(ingredients);
// for (const ingredient of ingredients) {
//   console.log(ingredient);
// }

const firstItemEl = document.createElement('li');
firstItemEl.textContent = ingredients[0];
firstItemEl.classList.add('item');

// console.log(firstItemEl);

const secondItemEl = document.createElement('li');
secondItemEl.textContent = ingredients[1];
secondItemEl.classList.add('item');

// console.log(secondItemEl);

const thirdItemEl = document.createElement('li');
thirdItemEl.textContent = ingredients[2];
thirdItemEl.classList.add('item');

// console.log(thirdItemEl);

const fourthItemEl = document.createElement('li');
fourthItemEl.textContent = ingredients[3];
fourthItemEl.classList.add('item');

// console.log(fourthItemEl);

const fifthItemEl = document.createElement('li');
fifthItemEl.textContent = ingredients[4];
fifthItemEl.classList.add('item');

// console.log(fifthItemEl);

const sixthItemEl = document.createElement('li');
sixthItemEl.textContent = ingredients[5];
sixthItemEl.classList.add('item');

// console.log(sixthItemEl);

const listEl = document.querySelector('#ingredients');
listEl.append(firstItemEl, secondItemEl, thirdItemEl, fourthItemEl, fifthItemEl, sixthItemEl);
console.log(listEl);
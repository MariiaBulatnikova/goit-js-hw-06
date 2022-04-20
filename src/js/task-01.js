
// const listEl = document.querySelector('#categories');
// console.log(listEl);

const listEl = categories.children;
// console.log(listEl);

console.log('Number of categories:', listEl.length);
console.log('Category:', listEl[0].childNodes[1].innerText);
console.log('Elements:', listEl[0].childNodes[3].childElementCount);

console.log('Category:', listEl[1].childNodes[1].innerText);
console.log('Elements:', listEl[1].childNodes[3].childElementCount);

console.log('Category:', listEl[2].childNodes[1].innerText);
console.log('Elements:', listEl[2].childNodes[3].childElementCount);

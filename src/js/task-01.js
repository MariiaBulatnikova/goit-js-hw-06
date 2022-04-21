
// const listEl = categories.children;


// console.log('Number of categories:', listEl.length);
// console.log('Category:', listEl[0].childNodes[1].innerText);
// console.log('Elements:', listEl[0].childNodes[3].childElementCount);

// console.log('Category:', listEl[1].childNodes[1].innerText);
// console.log('Elements:', listEl[1].childNodes[3].childElementCount);

// console.log('Category:', listEl[2].childNodes[1].innerText);
// console.log('Elements:', listEl[2].childNodes[3].childElementCount);

const listItemsEl = document.querySelectorAll('.item');
// console.log(listItemsEl);

console.log(`Number of categories: ${listItemsEl.length}`);

const allCategoriesArray = listItemsEl.forEach(el => {
    console.log(`Category: ${el.querySelector("h2").textContent}`);
    console.log(`Elements: ${el.querySelectorAll("li").length}`);
});
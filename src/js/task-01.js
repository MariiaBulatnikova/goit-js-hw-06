const navlistEl = document.querySelector("#categories");
console.log(`Number of categories: ${navlistEl.children.length} `);

const listItemsEl = document.querySelectorAll(".item h2");
listItemsEl.forEach((element) => {
  console.log(`Category: ${element.textContent}`);
  console.log(
    `Elements: ${element.nextElementSibling.children.length}`
  );
});
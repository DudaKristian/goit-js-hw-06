const categoriesEl = document.querySelector("#categories");
const itemsEl = categoriesEl.children;
console.log(`Number of categories: ${itemsEl.length}`);

const catListEl = Array.from(itemsEl);

const result = catListEl.forEach((elem) => {
  let category = elem.firstElementChild.textContent;
  let elemCount = elem.lastElementChild.children.length;
  console.log(`Category: ${category} \n
  Elements: ${elemCount}`);
});

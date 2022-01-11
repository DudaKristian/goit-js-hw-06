const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const directionEl = document.querySelector("#ingredients");

//using .map()

const listOfIngredients = ingredients.map((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = ingredient;
  itemEl.classList.add("item");
  return itemEl;
});
directionEl.append(...listOfIngredients);

// using for...of
// const itemListEl = [];

// for (let ingredient of ingredients) {
//   const itemEl = document.createElement("li");
//   itemEl.textContent = ingredient;
//   itemEl.classList.add("item");
//   itemListEl.push(itemEl);
// }

// directionEl.append(...itemListEl);

// using for
// for (let i = 0; i < ingredients.length; i += 1) {
//   const itemEl = document.createElement("li");
//   itemEl.textContent = ingredients[i];
//   itemEl.classList.add("item");

//   itemListEl.push(itemEl);
// }

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsElements = document.querySelector('#ingredients');

// for (let i = 0; i < ingredients.length; i += 1) {
//   const ingredientsEl = ingredients[i];
 
//   const certainIngredient = document.createElement('li');
//   certainIngredient.classList.add('.item');
//   certainIngredient.textContent = ingredientsEl;


//   ingredientsElements.append(certainIngredient);
//   console.log(ingredientsElements);
// }

const ingredient = ingredients.map(option => {
  const certainIngredient = document.createElement('li');
  certainIngredient.classList.add('.item');
  certainIngredient.textContent = option;

  return certainIngredient;
});

console.log(ingredient);

ingredientsElements.append(...ingredient)
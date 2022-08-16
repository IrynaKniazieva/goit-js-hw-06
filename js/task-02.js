const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.


const elements = ingredients.map(ingredientsItemEl => {
  const ingredientItemEl = document.createElement('li');
  ingredientItemEl.classList.add('item');
  ingredientItemEl.textContent = ingredientsItemEl;

  return ingredientItemEl;
});
const ingredientsEl = document.querySelector('#ingredients');
ingredientsEl.append(...elements);


// const elements = [];

// for (let i = 0; i < ingredients.length; i += 1) {
//   const ingredient = ingredients[i];

//   const ingredientsItemEl = document.createElement('li');
// ingredientsItemEl.classList.add('item');
// ingredientsItemEl.textContent = ingredient;

// elements.push(ingredientsItemEl);
// };


// const ingredientsEl = document.querySelector('#ingredients');
// ingredientsEl.append(...elements);





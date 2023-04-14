const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
//console.log(ingredients)

const itemsList = document.querySelector("#ingredients");
 
const itemsEl = ingredients.map(item => {
  const ingredient = document.createElement('li');
  ingredient.textContent = item;
  ingredient.classList = 'item';
      return ingredient;
    
});
console.log(itemsEl);
console.log(ingredients)
itemsList.append(...itemsEl)
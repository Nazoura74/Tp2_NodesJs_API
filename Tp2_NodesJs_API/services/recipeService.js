const recipes = require("../data/recipes");

function getAll() {
  return recipes;
}

function getById(id) {
  if (typeof id !== "number" || Number.isNaN(id)) return null;
  return recipes.find(r => r.id === id) || null;
}

function create(recipe) {
  const id = recipes.length ? Math.max(...recipes.map(r => r.id)) + 1 : 1;
  const newRecipe = { id, ...recipe };
  recipes.push(newRecipe);
  return newRecipe;
}

function update(id, recipe) {
  if (typeof id !== "number" || Number.isNaN(id)) return null;
  const index = recipes.findIndex(r => r.id === id);
  if (index === -1) return null;
  recipes[index] = { id, ...recipe };
  return recipes[index];
}

function remove(id) {
  if (typeof id !== "number" || Number.isNaN(id)) return false;
  const index = recipes.findIndex(r => r.id === id);
  if (index === -1) return false;
  recipes.splice(index, 1);
  return true;
}

function search(params = {}) {
  const { vegetarian, ingredient } = params;

  let result = recipes;

  if (vegetarian !== undefined) {
    result = result.filter(r => r.isVegetarian === vegetarian);
  }

  if (ingredient) {
    result = result.filter(r =>
      r.ingredients.some(i => i.toLowerCase() === ingredient.toLowerCase())
    );
  }

  return result;
}


module.exports = { getAll, getById, create, update, remove, search };

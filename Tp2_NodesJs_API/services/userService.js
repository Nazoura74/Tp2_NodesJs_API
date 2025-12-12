const users = require("../data/users");
const recipes = require("../data/recipes");

function getUserById(id) {
  return users.find(u => u.id === id);
}

function getFavoriteRecipe(userId) {
  const user = getUserById(userId);
  if (!user) return null;
  return recipes.find(r => r.id === user.favoriteRecipeId) || null;
}

function updateFavoriteRecipe(userId, recipeId) {
  const user = getUserById(userId);
  if (!user) return null;
  const recipeExists = recipes.some(r => r.id === recipeId);
  if (!recipeExists) return false;
  user.favoriteRecipeId = recipeId;
  return user;
}

module.exports = { getUserById, getFavoriteRecipe, updateFavoriteRecipe };

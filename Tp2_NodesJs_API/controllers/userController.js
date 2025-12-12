const userService = require("../services/userService");
const send = require("../utils/sendResponse");

function getFavoriteRecipe(req, res, userId) {
  const recipe = userService.getFavoriteRecipe(userId);
  if (!recipe) return send(res, 404, { error: "Utilisateur ou recette introuvable" });
  send(res, 200, recipe);
}

function updateFavoriteRecipe(req, res, userId, recipeId) {
  const result = userService.updateFavoriteRecipe(userId, recipeId);
  if (result === null) return send(res, 404, { error: "Utilisateur non trouvé" });
  if (result === false) return send(res, 404, { error: "Recette non trouvée" });
  send(res, 200, result);
}

module.exports = { getFavoriteRecipe, updateFavoriteRecipe };

const userController = require("../controllers/userController");

function userRoutes(req, res, parsedUrl) {
  const { pathname } = parsedUrl;

  const getFavMatch = pathname.match(/^\/api\/users\/(\d+)\/favoriteRecipe$/);
  if (req.method === "GET" && getFavMatch) {
    const userId = Number(getFavMatch[1]);
    userController.getFavoriteRecipe(req, res, userId);
    return true;
  }

  const putFavMatch = pathname.match(/^\/api\/users\/(\d+)\/favoriteRecipe\/(\d+)$/);
  if (req.method === "PUT" && putFavMatch) {
    const userId = Number(putFavMatch[1]);
    const recipeId = Number(putFavMatch[2]);
    userController.updateFavoriteRecipe(req, res, userId, recipeId);
    return true;
  }

  return false;
}

module.exports = userRoutes;

const recipeController = require("../controllers/recipeController");

function recipeRoutes(req, res, parsedUrl) {
  const { pathname, query } = parsedUrl;

  // Recherche
  if (req.method === "GET" && pathname === "/api/recipes/search") {
    recipeController.search(req, res, {
      vegetarian: "vegetarian" in query ? query.vegetarian === "true" : undefined,
      ingredient: query.ingredient
    });
    return true;
  }

  // Liste complète
  if (req.method === "GET" && pathname === "/api/recipes") {
    recipeController.getAll(req, res);
    return true;
  }

  // Routes avec identifiant
  const match = pathname.match(/^\/api\/recipes\/(\d+)$/);
  if (match) {
    const id = Number(match[1]);

    if (req.method === "GET") {
      recipeController.getOne(req, res, id);
      return true;
    }

    if (req.method === "PUT") {
      recipeController.update(req, res, id);
      return true;
    }

    if (req.method === "DELETE") {
      recipeController.remove(req, res, id);
      return true;
    }
  }

  // Création
  if (req.method === "POST" && pathname === "/api/recipes") {
    recipeController.create(req, res);
    return true;
  }

  return false;
}

module.exports = recipeRoutes;

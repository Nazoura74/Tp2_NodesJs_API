const recipeService = require("../services/recipeService");
const parseBody = require("../utils/bodyParser");
const send = require("../utils/sendResponse");

function getAll(req, res) {
  send(res, 200, recipeService.getAll());
}

function getOne(req, res, id) {
  try {
    const recipe = recipeService.getById(id);
    if (!recipe) {
      return send(res, 404, { error: "Recette non trouvée" });
    }
    send(res, 200, recipe);
  } catch {
    send(res, 500, { error: "Erreur serveur" });
  }
}

async function create(req, res) {
  try {
    const body = await parseBody(req);
    send(res, 201, recipeService.create(body));
  } catch {
    send(res, 400, { error: "JSON invalide" });
  }
}

async function update(req, res, id) {
  try {
    const body = await parseBody(req);
    const recipe = recipeService.update(id, body);
    if (!recipe) {
      return send(res, 404, { error: "Recette non trouvée" });
    }
    send(res, 200, recipe);
  } catch {
    send(res, 400, { error: "JSON invalide" });
  }
}

function remove(req, res, id) {
  const ok = recipeService.remove(id);
  if (!ok) return send(res, 404, { error: "Recette non trouvée" });
  send(res, 204);
}

function search(req, res, query) {
  send(res, 200, recipeService.search(query));
}

module.exports = { getAll, getOne, create, update, remove, search };

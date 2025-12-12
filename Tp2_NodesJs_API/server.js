const http = require("http");
const url = require("url");

const recipeRoutes = require("./routes/recipeRoutes");
const userRoutes = require("./routes/userRoutes");

// Empêche l’arrêt du serveur en cas d’erreur JS non gérée 
process.on("uncaughtException", err => {
  console.error("Erreur non gérée :", err.message);
});

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  try {
    if (recipeRoutes(req, res, parsedUrl)) return;
    if (userRoutes(req, res, parsedUrl)) return;

    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Route non trouvée" }));
  } catch (err) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Erreur serveur" }));
  }
});

server.listen(3000, () => {
  console.log("API lancée sur http://localhost:3000");
});

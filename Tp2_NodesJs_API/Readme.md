# TP 2 – API REST Recettes de cuisine

## Présentation

Ce projet est une API REST développée en Node.js en utilisant uniquement le module natif `http`.  


## Lancement du serveur

Prérequis : Node.js installé.

Commande de démarrage à la racine du projet :

```
node server.js
```
Le serveur écoute sur l’adresse suivante :

http://localhost:3000

---

## Fonctionnement des données

Les données sont chargées au démarrage depuis des fichiers JavaScript.  
Une fois le serveur lancé, toutes les opérations (ajout, modification, suppression) s’effectuent uniquement en mémoire.  
Les fichiers ne sont jamais modifiés automatiquement.  
À chaque redémarrage du serveur, les données reviennent à leur état initial.

---

## Format d’une recette
```json
{
  "id": 1,
  "name": "Crêpes maison",
  "difficulty": "facile",
  "ingredients": ["farine", "lait", "œufs"],
  "isVegetarian": true
}
```


## Routes Recettes

GET /api/recipes  
Retourne la liste complète des recettes.

Exemple :  
GET http://localhost:3000/api/recipes

---

GET /api/recipes/:id  
Retourne une recette spécifique à partir de son identifiant.

Exemple :  
GET http://localhost:3000/api/recipes/1

---

POST /api/recipes  
Ajoute une nouvelle recette en mémoire.

Body (JSON) :
```json
{
  "name": "Soupe de légumes",
  "difficulty": "facile",
  "ingredients": ["carotte", "poireau", "eau"],
  "isVegetarian": true
}
```
Exemple :  
POST http://localhost:3000/api/recipes

---

PUT /api/recipes/:id  
Modifie entièrement une recette existante.

Body (JSON) :
```json

{
  "name": "Soupe de légumes maison",
  "difficulty": "facile",
  "ingredients": ["carotte", "poireau", "pomme de terre"],
  "isVegetarian": true
}
```

Exemple :  
PUT http://localhost:3000/api/recipes/1

---

DELETE /api/recipes/:id  
Supprime une recette.

Exemple :  
DELETE http://localhost:3000/api/recipes/1

---

## Routes de recherche

GET /api/recipes/search?vegetarian=true  
Retourne uniquement les recettes végétariennes.

Exemple :  
GET http://localhost:3000/api/recipes/search?vegetarian=true

---

GET /api/recipes/search?ingredient=poulet  
Retourne les recettes contenant l’ingrédient spécifié.

Exemple :  
GET http://localhost:3000/api/recipes/search?ingredient=poulet

---

## Bonus Utilisateurs

## Format d’un utilisateur

```json
{
  "id": 1,
  "firstName": "Mattis",
  "lastName": "SIMON",
  "favoriteRecipeId": 1
}
```
---

GET /api/users/:id/favoriteRecipe  
Retourne la recette favorite d’un utilisateur.

Exemple :  
GET http://localhost:3000/api/users/1/favoriteRecipe

---

PUT /api/users/:id/favoriteRecipe/:recipeId  
Modifie la recette favorite d’un utilisateur.

Exemple :  
PUT http://localhost:3000/api/users/1/favoriteRecipe/2

---




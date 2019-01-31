const router = require("express").Router();

const cocktailController = require("../../controllers/cocktailController");
const recipeController = require("../../controllers/recipeController");

router.get("/", (req, res) => {
  res.send({
    init: "start page"
  });
});

router.get("/api", (req, res) => {
  res.send({
    api: "Cocktail App",
    authors: "Sergio and Nizar"
  });
});

//get all restaurants
router.get("/api/cocktails/list", cocktailController.listAll);

router.get("/api/recipes/list", recipeController.listAll);


/***
 * testing query
 * 
 */
router.get("/api/cocktails/get-matches", cocktailController.listAllMatches);

module.exports = router;

const router = require("express").Router();

const cocktailController = require("../../controllers/cocktailController");
const ingredientController = require("../../controllers/ingredientController");

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

//get all cocktails
router.get("/api/cocktails/list", cocktailController.listAll);
router.get("/api/ingredients/list", ingredientController.listAll);



/***
 *  query routes
 */

router.get("/api/cocktails/get-matches", cocktailController.listAllMatches);
router.get("/api/ingredients/all", ingredientController.listAll);

module.exports = router;

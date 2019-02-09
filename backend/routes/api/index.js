const router = require("express").Router();

//importing multer to upload images
const imageUpload = require('../../handlers/multer')

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

//check all routes
router.get("/api/cocktails/list", cocktailController.listAll);
router.get("/api/ingredients/list", ingredientController.listAll);



/***
 *  app routes
 */


router.get("/api/cocktails/get-matches", cocktailController.listAllMatches);
router.get("/api/ingredients/all", ingredientController.listAll);
router.post('/api/cocktails/save', imageUpload.single("image"), cocktailController.save)

module.exports = router;

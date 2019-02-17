const router = require("express").Router();
const path = require("path");
const crypto = require("crypto");
const multer = require("multer");
const cocktailController = require("../../controllers/cocktailController");
const userController = require("../../controllers/userController");

const storage = multer.diskStorage({
  destination: "./uploads/images/",
  filename: function(req, file, callback) {
    crypto.pseudoRandomBytes(16, function(err, raw) {
      if (err) return callback(err);
      callback(null, raw.toString("hex") + path.extname(file.originalname));
    });
  }
});

//initializing multer
const imageUpload = multer({ storage: storage });
// console.log('+*******',imageUpload);


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
router.get("/uploads/images/:id", cocktailController.listAllImages);


/***
 *  app routes
 */

router.get("/api/cocktails/get-matches", cocktailController.listMatchesOnly);

router.post(
  "/api/cocktails/save",
  imageUpload.single("image"),
  cocktailController.save
);

// User Route
router.post('/api/users/signup', userController.saveNewUser);

module.exports = router;

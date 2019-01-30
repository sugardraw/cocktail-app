const router = require("express").Router();

router.get("/", (req, res) => {
  res.send({
    api: "cocktail DB",
    authors: "Sergio and Nizar"
  });
});

module.exports = router;

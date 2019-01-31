const mongoose = require("mongoose");
const Cocktail = require("../models/Cocktail");

const cocktailController = {};

//List all cocktails in DB

cocktailController.listAll = (req, res) => {
  Cocktail.find({}).exec((errors, cocktail) => {
    if (errors) {
      console.log("error:", error);
    } else {
      res.send(cocktail);
    }
  });
};

/**
 * search matches functions //////////
 */



cocktailController.listAllMatches = (req, res) => {
  console.log(req.query.name);
  Cocktail.find({
    "ingredients.name": { $regex: req.query.name, $options: "i" }
  }).exec((errors, cocktail) => {
    if (errors) {
      console.log("error:", error);
    } else {
      console.log(cocktail)
      res.send(cocktail);
    }
  });
};

module.exports = cocktailController;

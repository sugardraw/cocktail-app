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
 * testing function //////////
 */

cocktailController.testing = (req, res) => {
  Cocktail.find({ "ingredients.name": {$regex:/^white/i}}).exec((errors, cocktail) => {
    if (errors) {
      console.log("error:", error);
    } else {
      res.json(cocktail);

    }
  });
};




module.exports = cocktailController;

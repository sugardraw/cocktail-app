const mongoose = require("mongoose");
const Recipe = require("../models/Ingredient");

const ingredientController = {};



//List all Recipes in DB


ingredientController.listAll = (req, res) => {
  Recipe.find({}).exec((errors, ingredient) => {
    if (errors) {
      console.log("error:", error);
    } else {
      res.send(ingredient);
    }
  });
};

module.exports = ingredientController;

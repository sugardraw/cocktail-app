const mongoose = require("mongoose");
const Recipe = require("../models/Recipe");

const recipeController = {};



//List all Recipes in DB


recipeController.listAll = (req, res) => {
  Recipe.find({}).exec((errors, recipe) => {
    if (errors) {
      console.log("error:", error);
    } else {
      res.send(recipe);
    }
  });
};

module.exports = recipeController;

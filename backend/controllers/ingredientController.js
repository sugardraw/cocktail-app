const mongoose = require("mongoose");
const Ingredient = require("../models/Ingredient");
const fs = require("fs");

const ingredientController = {};

//List all cocktails in DB

ingredientController.listAll = (req, res) => {
  Ingredient.find({}).exec((errors, ingredient) => {
    if (errors) {
      console.log("error:", error);
    } else {
      res.send(ingredient);
    }
  });
};




module.exports = ingredientController;

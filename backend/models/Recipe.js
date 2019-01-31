const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  ingredients_and_measures: [{ name: String, measure: String }],

  description: String
});

module.exports = Recipe = mongoose.model("Recipe", recipeSchema);

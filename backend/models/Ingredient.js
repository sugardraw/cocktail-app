const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },

  ingredients: [String]
});

module.exports = Ingredient = mongoose.model("Ingredient", ingredientSchema);

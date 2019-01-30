const mongoose = require("mongoose");

const cocktailSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  tagline: {
    type: String,
    trim: true
  },
  ingredients: [{ type: String }],
  rating: {
    type: Number
  },
  alcoholic_drink: {
    type: Boolean,
    default: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = Cocktail = mongoose.model("Cocktail", cocktailSchema);

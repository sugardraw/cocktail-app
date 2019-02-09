const mongoose = require("mongoose");

const cocktailSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  tagline: {
    type: String,
    trim: true
  },
  ingredients_and_measures: [{ name: String, measure: Number }],
  rating: {
    type: Number,
    default: 10
  },
  description: {
    type: String,
    trim: true
  },
  alcoholic_drink: {
    type: Boolean,
    default: true
  },
  image: {
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = Cocktail = mongoose.model("Cocktail", cocktailSchema);

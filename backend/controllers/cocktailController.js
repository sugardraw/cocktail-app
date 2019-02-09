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
    "ingredients_and_measures.name": {
      $regex: `(\s+^${req.query.name}|^${req.query.name})`,
      $options: "i"
    }
  })
    .limit(5)
    .exec((errors, cocktail) => {
      if (errors) {
        console.log("error:", error);
      } else if (req.query.name === "") {
        res.send([]);
      } else {
        res.send(cocktail);
      }
    });
};

/**
 *
 * save a cocktail
 */
cocktailController.save = async (req, res) => {
  console.log('###########',req.body);

  // we delete the keys we don t need

  delete req.body.newCocktail["categories"];
  delete req.body.newCocktail["inputs"];

  // define some arrays in order to create the key ingredients and measures
  const ingredients = [];
  const measures = [];
  var ingredients_and_measures = [];

  // we text the incoming strings with regex
  for (let keys in req.body.newCocktail) {
    const regexIngredients = /ingredients/i;

    if (regexIngredients.test(keys)) {
      const [...ingredientsNames] = req.body.newCocktail[keys];

      ingredients.push(ingredientsNames.join(""));
    }
  }

  for (let items in req.body.newCocktail) {
    const regexMeasure = /measure/i;

    if (regexMeasure.test(items)) {
      const [...quantities] = req.body.newCocktail[items];

      measures.push(quantities.join(""));
    }
  }

  //converting arrays to arrays of objects
  function strings_to_object(item) {
    for (var i = 0; i < item.length; i++) {
      var obj = { name: item[i] };
      ingredients_and_measures.push(obj);
    }
    return ingredients_and_measures;
  }
  strings_to_object(ingredients);

  //putting all together

  for (let index in ingredients_and_measures) {
    ingredients_and_measures[index].measure = measures[index];
  }

  // and we add the new key to the newCocktail
  req.body.newCocktail.ingredients_and_measures = ingredients_and_measures;

  console.log(req.body.newCocktail);
  let cocktail = new Cocktail(req.body.newCocktail);

  cocktail.save(error => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      console.log("Cocktail was created successfully");
      res.send("saved");
    }
  });
};

module.exports = cocktailController;

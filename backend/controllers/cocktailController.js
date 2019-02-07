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
  console.log('######',req.body.newCocktail);
  req.body.newCocktail.measure=parseInt(req.body.newCocktail.measure)
  let cocktail = new Cocktail(
    req.body.newCocktail
  );


  cocktail.save(error => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      console.log("Cocktail was created successfully");
      res.send('saved');
    }
  });
};

module.exports = cocktailController;

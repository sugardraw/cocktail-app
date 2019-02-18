const mongoose = require("mongoose");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const userController = {};

userController.saveNewUser = (req, res) => {
  if (req.body.email !== "" || req.body.email !== undefined) {
    bcrypt
      .genSalt(saltRounds)
      .then(salt => {
        console.log(`Salt: ${salt}`);

        return bcrypt.hash(req.body.password, salt);
      })
      .then(hash => {
        console.log(`Hash: ${hash}`);

        req.body.password = hash;
        const user = new User(req.body);

        user.save(error => {
          if (error) {
            console.log(error);
            res.send(error);
          } else {
            console.log("Cocktail was created successfully");
            res.send("user saved :)");
          }
        });
      })
      .catch(err => console.error(err.message));
  } else {
    res.send("error: user data needed");
  }
};

module.exports = userController;

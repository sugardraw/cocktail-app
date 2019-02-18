const mongoose = require("mongoose");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const userController = {};

userController.saveNewUser = (req, res) => {
  console.log(req.cookies);

  if (req.body.email !== "" || req.body.email !== undefined) {
    User.find({ email: req.body.email }, (err, registeredUsers) => {
      if (err) {
        return res.send("Registration failed. Server error");
      } else if (registeredUsers.length > 0) {
        return res.send({
          isRegistered: true,
          msg: "already registered"
        });
      } else {
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
      }
    });
  } else {
    res.send(
      "Registration failed. Make sure You fulfilled correctly all fields"
    );
  }
};

userController.validateUser = (req, res) => {
  if (req.body.email !== "" || req.body.email !== undefined) {
    User.find({ email: req.body.email }, (err, registeredUsers) => {
      if (err) {
        return res.send("Registration failed. Server error");
      } else if (registeredUsers.length > 0) {
        bcrypt.compare(
          req.body.password,
          registeredUsers[0].password,
          (err, response) => {
            console.log(registeredUsers[0].password);

            if (err) {
              console.log("testing condition 1");
              return err;
            } else {
              console.log(response);

              return res.send("testing true");
            }
          }
        );
      } else {
        return res.send({
          isRegistered: false,
          msg: "you are not registered"
        });
      }
    });
  } else {
    res.send(
      "Registration failed. Make sure You fulfilled correctly all fields"
    );
  }
};

module.exports = userController;

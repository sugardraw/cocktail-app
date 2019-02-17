const mongoose = require("mongoose");
const User = require("../models/User");
const fs = require("fs");

const userController = {};

// Save new User

userController.saveNewUser = ( req, res) => {
    const user = new User(req.body);
    user.save( error => {
        if(error) {
            console.log(error);
            res.send(error);
        } else {
            res.send('user saved :)');
        }
    });
};

module.exports = userController;
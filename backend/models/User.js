const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    avatar: {
        type: String,
        unique: true
    },
    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = User = mongoose.model("User", userSchema);

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require('morgan');
var cors = require('cors');


const app = express();
const port = process.env.PORT || 3001;

// body parser middleware

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors())

// Import URI Mlab

const DB = require("./config/keys");
console.log(DB.mongoURI)

// URI to connect to local DB
// 'mongodb://localhost:27017/cocktail-app-MVC'

mongoose
  .connect(
    DB.mongoURI,
    { useNewUrlParser: true }
  )
  .then(console.log("Successful connection to database"))
  .catch(error => {
    console.log(`The following error occurred: ${error.message}`);
  });

//requiring routes

const routes = require("./routes/api/index");

//Use Routes
app.use("/", routes);

app.listen(port, () => console.log(`server started on port ${port}`));

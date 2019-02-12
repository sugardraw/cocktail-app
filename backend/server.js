const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
var cors = require("cors");

const app = express();
const port = process.env.PORT || 3001;

// body parser middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

//set an static route to show the images

app.use("/images", express.static(__dirname + "/uploads/images"));

// Import URI Mlab

const DB = require("./config/keys");
console.log(DB.mongoURI);

// URI to connect to local DB
// 'mongodb://localhost:27017/cocktail-app-MVC-copy'

mongoose
  .connect(DB.mongoURI, { useNewUrlParser: true })
  .then(console.log("Successful connection to database"))
  .catch(error => {
    console.log(`The following error occurred: ${error.message}`);
  });

//requiring routes

const routes = require("./routes/api/index");

//Use Routes
app.use("/", routes);

app.listen(port, () => console.log(`server started on port ${port}`));

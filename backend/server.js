const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3001;

// body parser middleware

app.use(bodyParser.json());

mongoose
  .connect(
    `mongodb://localhost:27017/cocktail-app-MVC`,
    { useNewUrlParser: true }
  )
  .then(console.log("Successful connection to database"))
  .catch(error => {
    console.log(`The following error occurred: ${error.message}`);
  });

//requiring routes

const routes = require("./routes/api/index");
//Use Routes
app.use("/api/", routes);

app.listen(port, () => console.log(`server started on port ${port}`));

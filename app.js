//Importing packages
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
//mongodb url
const url = "mongodb://localhost/employee";

//Starting Express
const app = express();
//connecting mongoose
mongoose.connect(url);

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

//geting hold on mongoose
const con = mongoose.connection;

//function run whrn connection open
con.on("open", () => {
  console.log("connected....");
});

const employee = require("./Router/Router.employee");
app.use(express.json());
app.use("/employee", employee);

app.listen(3000, () => {
  console.log("Server started");
});

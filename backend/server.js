//dependencies 
var express = require("express");

var app = express();

var PORT = process.env.PORT || 3000;

//to get to express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//listener 
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
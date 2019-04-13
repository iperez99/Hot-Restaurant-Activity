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

// variables to hold table and waiting list data//

var tableArray = [
  {
    id: "iperez",
    name: "Ismael Perez",
    email: "iperez@somewhere.com",
    phone: "000-000-0000"
  }

];

var waitingArray = [
  {
    id: "iperez",
    name: "Ismael Perez",
    email: "iperez@somewhere.com",
    phone: "000-000-0000"
  }
];
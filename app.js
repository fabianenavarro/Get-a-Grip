//Require express and body-parser packages
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
//create app constant using express
const app = express();

app.set('view engine', 'ejs');
//Hello when user tries to access / or home route
app.get("/", function(req, res){
  res.render("home");
});
//listen on port 3000, log that the server is running
app.listen(3000, function(){
  console.log("Server Running");
})

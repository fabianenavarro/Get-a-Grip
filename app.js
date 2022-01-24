//Require express and body-parser packages
const express = require("express");
const bodyParser = require("body-parser");
//create app constant using express
const app = express();
//Hello when user tries to access / or home route
app.get("/", function(req, res){
  res.send("Hello");
});
//listen on port 3000, log that the server is running
app.listen(3000, function(){
  console.log("Server Running");
})

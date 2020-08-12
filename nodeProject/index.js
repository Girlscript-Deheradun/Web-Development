// since we installed express, now we need to require it for node.js to render it
const express = require("express");

const app = express();

// '/'   this is a homepage for any website you visit

// your homepage
app.get("/", function(request, response){
  response.send("<h1>hey this is a node js I just created!</h1>");
});

app.listen(8000, function(){
  console.log("successfully running on port 3000.");
})

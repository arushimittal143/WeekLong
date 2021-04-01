const express = require('express')
const bodyParser=require("body-parser");

const app = express()
 
app.get('/', function (req, res) {
  
    var today=new Date();
   // var currentDay=today.getDay();
    if(today.getDay()===6 || today.getDay()===7)
    {
        res.send("<h1>Yay it's the weekend.</h1>");
    }
    else
    {
        // res.write("<h1>It is not the weekend.</h1>");
        // res.write("I have to work");
        res.sendFile(__dirname+"/index.html");
    }

})
 
app.listen(3000,function(){
    console.log("Server starting on port 3000");
});
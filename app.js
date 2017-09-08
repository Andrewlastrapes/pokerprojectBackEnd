var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyparser = require("body-parser")
// mongoose.connect()




app.get("/", function(req, res){
	res.render("/");
})



app.listen(3000, function(){
	console.log("Listening")
})
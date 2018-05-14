require("dotenv").config();

var movieInfo = require('./movie');
var userInput = process.argv[2]||"mr.nobody";
movieInfo(userInput);
var movieThis = require('./movie');
var userMovieInput = process.argv[2] || "mr.nobody";
movieThis(userMovieInput);
//call

/*
* `my-tweets` = node twitt.js 

* `spotify-this-song` node spot.js

* `movie-this` liri.js, argv2

* `do-what-it-says`

Using the fs Node package, LIRI will take the text inside of 
random.txt and then use it to call one of LIRI's commands.

It should run spotify-this-song for "I Want it That Way,"
as follows the text in random.txt.*/
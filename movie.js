var request = require("request");
function movieThis(movieTitle){
request(`http://www.omdbapi.com/?t=${movieTitle}&apikey=trilogy`, function (error, response, body) {
    if (!error && response.statusCode === 200) {
        // console.log(JSON.parse(body));
        var data = JSON.parse(body);
        //console.log(data);
        var mtitle = data.Title;
        var myear = data.Year;
        var mIMDBRating = data.imdbRating;
        var mRTRating = data.Ratings[1].Value; 
        var mCountry = data.Country;
        var mLanguage = data.Language;
        var mActors = data.Actors;
        var mPlot = data.Plot;
        console.log(`Movie title: ${mtitle}, \nMovie release year: ${myear},  \nIMDB Rating: ${mIMDBRating}, \nRotten Tomato Score: ${mRTRating} \nMovie Country of Origin: ${mCountry}, \nMovie Language: ${mLanguage}, \nMovie Plot: ${mPlot}, \nActors: ${mActors}`);        
    }
    // clean up response format and possible refactor
});
};
module.exports = movieThis;

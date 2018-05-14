var request = require("request");
function movieInfo(movieTitle){
request(`http://www.omdbapi.com/?t=${movieTitle}&apikey=trilogy`, function (error, response, body) {
    if (!error && response.statusCode === 200) {
        // console.log(JSON.parse(body));
        var data = JSON.parse(body);
        //console.log(data);
        var mtitle = data.Title;
        var myear = data.Year;
        var mIMDBRating = data.imdbRating;
        var mRTRating = data.Ratings[1]; 
        var mCountry = data.Country;
        var mLanguage = data.Language;
        var mActors = data.Actors;
        var mPlot = data.Plot;

        console.log(mtitle,myear,mCountry,mLanguage,mActors,mPlot,mIMDBRating,mRTRating);        
    }
    // clean up response format and possible refactor
});
};
module.exports = movieInfo;

// {
//     "Title": "Remember the Titans",
//     "Year": "2000",
//     "Rated": "PG",
//     "Released": "29 Sep 2000",
//     "Runtime": "113 min",
//     "Genre": "Biography, Drama, Sport",
//     "Director": "Boaz Yakin",
//     "Writer": "Gregory Allen Howard",
//     "Actors": "Denzel Washington, Will Patton, Wood Harris, Ryan Hurst",
//     "Plot": "The true story of a newly appointed African-American coach and his high school team on their first season as a racially integrated unit.",
//     "Language": "English",
//     "Country": "USA",
//     "Awards": "8 wins & 17 nominations.",
//     "Poster": "https://ia.media-imdb.com/images/M/MV5BYThkMzgxNjEtMzFiOC00MTI0LWI5MDItNDVmYjA4NzY5MDQ2L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
//     "Ratings": [{
//         "Source": "Internet Movie Database",
//         "Value": "7.8/10"
//     }, {
//         "Source": "Rotten Tomatoes",
//         "Value": "73%"
//     }, {
//         "Source": "Metacritic",
//         "Value": "48/100"
//     }],
//     "Metascore": "48",
//     "imdbRating": "7.8",
//     "imdbVotes": "175,693",
//     "imdbID": "tt0210945",
//     "Type": "movie",
//     "DVD": "20 Mar 2001",
//     "BoxOffice": "$114,297,071",
//     "Production": "Walt Disney Pictures",
//     "Website": "http://disney.go.com/disneypictures/rememberthetitans/index.html",
//     "Response": "True"
// }
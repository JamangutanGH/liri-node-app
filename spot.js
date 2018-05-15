var Spotify = require('node-spotify-api');
var key = require('./keys');

var spotify = new Spotify({
    id: key.spotify.id,
    secret: key.spotify.secret
});

spotify.search({
    type: 'track', //in random.txt - spotify-this-song,"I Want it That Way" 
    query: 'The Sign'
}, function (err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }
    // calling spotify
    spotify /*`https://api.spotify.com/v1/tracks/${spotQuery}`*/
        .request('https://api.spotify.com/v1/tracks/0hrBpAOgrt8RXigk83LLNE')
        .then(function (response) { /*all of the data i want to collect from resp*/
            console.log(response.artists[0].name);
            console.log(response.album.name);
            console.log(response.name);
            console.log(response.href);

        })
        .catch(function (err) {
            console.error('Error occurred: ' + err);
        });
});
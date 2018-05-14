var Spotify = require('node-spotify-api');
//link .env values
var spotify = new Spotify({

});

spotify.search({
    type: 'track',
    query: 'All the Small Things'
}, function (err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }
    // perform spotify calls
    spotify
        .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
        .then(function (response) { /*all of the data i want to collect from the resulting json*/ 
            console.log(response.artists[0].name);
            console.log(response.album.name);
            console.log(response.name);
            console.log(response.href);
        })
        .catch(function (err) {
            console.error('Error occurred: ' + err);
        });
});



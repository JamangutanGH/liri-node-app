var Twitter = require('twitter');
// secure private info
// link .env values!!
var client = new Twitter({
  
});

var params = {  /*passing in the parameters for the get call*/
  user_name: 'jamangutan' 
};
client.get('statuses/user_timeline', params, function (error, tweets, response) {
  if (!error) { //refining the response to the data desired
    var tweet = JSON.stringify(tweets); 
    var data = JSON.parse(tweet);   //refactor?    

    for (var i = 0; i < data.length; i++) {  // i feel this could have been done 
      var timeStampEnd = data[i].created_at; // async with a proper callback
      var textEnd = data[i].text;            // is this 4loop blocking off this module?
        console.log(timeStampEnd, textEnd);
    };
    // export the tweet generation call, eventEmitter?
    // render tweets in markdown
    // save to txt
  }
});
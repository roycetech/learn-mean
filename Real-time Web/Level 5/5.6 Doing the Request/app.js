// Next, we'll use the request module to make a simple web request and log the response to the console. You can use this example in the README.


// Tasks:
// To start, require the request module and assign the return function to a variable.
// Next, issue a request to searchURL. Remember, the callback function for the request function takes three arguments: error, response and body.
// Finally, log the response body to the console using console.log().


var url = require('url');
var request = require('request');

var options = {
  protocol: "http:",
  host: "search.twitter.com",
  pathname: '/search.json',
  query: {
    q: "codeschool"
  }
};

var searchURL = url.format(options);

var express = require('express');
var app = express(); // Create server here

app.get('/', function(req, response) {
  request(searchURL).pipe(response);
});

app.listen(8080);
// Now, let's create an Express server which queries out for the search term and then returns the JSON.

// Tasks:
// Require the express module.
// Create the Express server and name it app.
// Create a route for GET requests to / (root path). Remember, the callback function takes two arguments: a request req and a response res.
// In our new route, issue a request to searchURL and pipe the results into the response.
// Finally, tell app to listen on port 8080.


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

var app; // Create server here


/**
In order to better reflect the domain of our application, we want to change our existing route
from /locations to /cities.

Tasks:
1. First, change our existing route from /locations to /cities.
2. Now create a new route for /locations.
3. Now redirect from /locations to /cities path using the
Moved Permanently HTTP status code (free hint for you, the code for that is 301).
 */

var express = require('express');
var app = express();

app.get('/cities', function (request, response) {
  var cities = ['Caspiana', 'Indigo', 'Paradise'];
  response.send(cities);
});

app.get('/locations', function(req, res) {
   res.redirect(301, '/cities');
});

app.listen(3001, function () {
  console.log("Running Express");
});


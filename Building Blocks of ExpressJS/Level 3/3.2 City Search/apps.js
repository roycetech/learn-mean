/**
We want to create an endpoint that we can use to filter cities. Follow the tasks below to to create this new route.

Tasks:
1. Create a new route for GET requests to '/cities'. The second argument should be a
callback function which takes request and response.
2. From inside of our route, create an if statement that checks whether a value is set to the
query string parameter search.
3. Inside of the if block, call the citySearch() function, passing in the user submitted
parameter for search. Then return the result of the function as a JSON response.
 */


 var express = require('express');
var app = express();

var cities = ['Caspiana', 'Indigo', 'Paradise'];

app.get('/cities', function(req, resp) {
  if (req.query.search ) {
    resp.send(citySearch(req.query.search));
  }
});


function citySearch (keyword) {
  var regexp = RegExp(keyword, 'i');
  var result = cities.filter(function (city) {
    return city.match(regexp);
  });

  return result;
}

app.listen(3000);


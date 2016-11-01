/**
Now lets look up some information about the city.

Tasks:
1. Inside of our dynamic route, grab the name submitted by the user, lookup the city
information on the cities object and assign it to the cityInfo variable.
2. Check to see if cityInfo exists and if so, respond with the cityInfo in JSON format.
3. If cityInfo does not exist, respond with a 404 HTTP status code and a JSON message
that says "City not found".
 */


 var express = require('express');
var app = express();

var cities = {
  'Lotopia': 'Rough and mountainous',
  'Caspiana': 'Sky-top island',
  'Indigo': 'Vibrant and thriving',
  'Paradise': 'Lush, green plantation',
  'Flotilla': 'Bustling urban oasis'
};

app.get('/cities/:name', function (request, response) {
  var cityInfo;
  var name = request.params.name;
  cityInfo = cities[name];
  if (cityInfo) {
    response.json(cityInfo);
  } else {
    response.status(404).json("City not found");
  }

});

app.listen(3000);


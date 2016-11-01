/**
Let's start coding our Express application.

Tasks:
1. In our app.js, require the express module and assign it to the express variable.
2. Using the function assigned to express, create an application instance and assign it to
the app variable.
3. Using our application instance, app, create a new route that accepts GET requests on
the /locations URL path. Remember to pass a callback function which takes a request
and response.
4. Respond with an array of city names. The city names should be Caspiana, Indigo and Paradise.
5. Bind our application to port 3001.
6. When our application is ready to receive requests, print the string "Running Express" to the console.
 */


var express = require('express');
var app = express();

app.get('/locations', function(req, res) {
  res.send(['Caspiana', 'Indigo', 'Paradise']);
});


app.listen(3001, function() {
  console.log('Running Express');
});



/**
Change the code in app.js to use the express-static middleware instead of
the response.sendFile() function.

Tasks:
1. Remove our app.get() containing the root '/' route.
2. Mount the static middleware and serve files under the public directory.
 */

var express = require('express');
var app = express();app.get('/cities', function(req, res){
  var cities = ['Lotopia', 'Caspiana', 'Indigo'];
  res.send(cities);
});

app.listen(3001);

app.use(express.static('public'));
/**
Our single application file is growing too long. It's time we extract our routes to a separate Node module under the
routes folder.

Tasks:
1. Move our router and its supporting code from app.js to routes/cities.js.
2. export our router object so other files can have access to it. Remember, Node - therefore Express - uses
the CommonJS module specification.
3. Our cities routes module is now ready to be used from app.js. Require the new routes/cities module from
 app.js and assign it to a variable called router;
 */


var express = require('express');
var app = express();

var router = require('./routes/cities');

app.use('/cities', router);
app.listen(3000);
// Notice the app.js file with the myRequest function below. Let's refactor myRequest out to its own my_request.js module.

// Tasks:
// Move the myRequest function and the http require into my_request.js
// Export the myRequest function.
// Require the my_request.js module in app.js.


// var http = require('http');

// var myRequest = function(message) {
//   var request = http.request('http://codeschool.com', function(response) {
//     response.pipe(process.stdout, { end: false });
//   });

//   request.write(message);
//   request.end();
// };

// myRequest('Hello, this is dog.');


var myRequest = require('./my_request');

myRequest('Hello, this is dog.');




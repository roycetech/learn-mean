// Just like you saw in the video, refactor the HTTP server code to explicitly bind a callback to the 'request' event using the on function.


// Tasks:
// Add an event listener on the server variable that listens to the request event. The event listener should take a callback function with two arguments, request and response.
// Move the logic for handling the request from the http.createServer() callback to your new 'request' event listener. Remember to remove the http.createServer() callback once the code has been moved.
// Remove the original request callback.


var http = require('http');

var callback = function(request, response) {
  response.writeHead(200);
  response.write("Hello, this is dog");
  response.end();
};

var server = http.createServer();
server.on('request', callback);

server.listen(8080);


// Who said you can only listen for an event once?


// Tasks:
// Add a second 'request' handler to the HTTP server.
// From inside of the new handler, log the message "New request coming in..." using console.log().


var http = require('http');

var server = http.createServer();
server.on('request', function(request, response) {
  response.writeHead(200);
  response.write("Hello, this is dog");
  response.end();
});

server.on('request', function(request, response) {
  console.log('New request coming in...');
});

server.listen(8080);

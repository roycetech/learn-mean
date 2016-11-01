// 1.2 Hello You

// First, tell the response which status it should have (a successful status is 200).
// Next, write a message to the response body in the form of "Hello, this is <your name here>".
// To finish it up, tell the response to end so the client on the other side knows it has received all the data.

var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200);
  response.write('Hello, this is y');
  response.end();
}).listen(8080);
// Let's create an HTTP server that will serve index.html.

// Tasks:
// Use pipe() to send index.html to the response.


var fs = require('fs');
var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});

  var file = fs.createReadStream('index.html');
  file.pipe(response);
}).listen(8080);


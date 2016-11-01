// Our original Hello server can be shortened since the response.end() function optionally takes data as a parameter. Remove the response.write line altogether, and send the hello string as a parameter on the response.end function. This will send the data, and once finished add the end to the response.

// Tasks:
// Instead of passing the content to response.write(), pass it to response.end().
// Now, remove the call to response.write().


// var http = require('http');

// http.createServer(function(request, response) {
//   response.writeHead(200);
// }).listen(8080);


var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200);
  response.end("Hello, this is dog");
}).listen(8080);



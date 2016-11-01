// Now that you know how to create an HTTP server and how to read a file off the filesystem in a non-blocking way, let's try to combine the two.

// Instead of just writing a string to the HTTP response, write the contents of index.html to the response instead.

// Tasks:
// After response.writeHead(200), add a call to fs.readFile() that reads index.html asynchronously. Remember to pass a callback function, that accepts an error parameter, and a contents parameter.
// Now that you have the file contents, write it to the response.
// To finish up, end the response after the file contents have been written.


// var http = require('http');
// var fs = require('fs');

// http.createServer(function(request, response) {
//   response.writeHead(200);

//   response.end();
// }).listen(8080);



var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {

  response.writeHead(200);
  fs.readFile('index.html', function(error, contents) {
    response.write(contents);
    response.end();
  });

}).listen(8080);
// So far we've created an Express server. Now we want to start building a real-time Q&A moderation service and we've decided to use socket.io.


// Tasks:
// Using the http module, create an new http server and pass the express app as the listener for that new server.
// Using the socket.io module, listen for requests on the http server. Store the return object of this operation in a variable called io.
// Use the object stored in io to listen for client 'connection' events. Remember, the callback function takes one argument, which is the client object that has connected.
// When a new client connects, log a message using console.log().
// Finally, we want to tell our http server to listen to requests on port 8080.

var express = require('express');
var app = express();

var server = require('http').createServer(app);

var io = require('socket.io')(server);

io.on('connection', function(client) {
  console.log('Client connected...');
});

server.listen(8080);

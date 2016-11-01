// Clients can also answer each other's questions, so let's build that feature by first listening for the 'answer' event on the client, which will send us both the question and answer, which we want to broadcast out to the rest of the connected clients.

// Tasks:
// With the client, listen for the 'answer' event from clients. This listener will have both a question and answer to broadcast so make sure to include both as function parameters.
// Now, emit the 'answer' event on all the other clients connected, passing them the question data.


var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.sockets.on('connection', function(client) {
  console.log("Client connected...");

  // listen for answers here
  client.on('answer' ,function(question, answer) {
    client.broadcast.emit('answer', question, answer);
  });

  client.on('question', function(question) {
    if(!client.question_asked) {
      client.question_asked = true;
      client.broadcast.emit('question', question);
    }
  });
});

server.listen(8080);


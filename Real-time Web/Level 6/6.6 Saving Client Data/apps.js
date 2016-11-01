// In our real-time Q&A app, we want to allow each client only one question at a time, but how do we enforce this rule? We can use socket.io's ability to save data on the client, so whenever a question is asked, we first want to check the question_asked value on the client.


// Tasks:
// First, when a client emits a 'question' event, we want to set the value of question_asked to true.
// Second, when a client emits a 'question' event, we want to broadcast that question to the other clients.
// Finally, when a client emits a 'question' event, check to make sure question_asked is not already set to true. We only want to allow one question per user, so make sure that we only set the value of question_asked and broadcast the question to other clients when the value of question_asked is not already true.


var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(client) {
  console.log("Client connected...");

  client.on('question', function(question) {
    if (!client.question_asked) {
      client.broadcast.emit('question', question);
    }
    client.question_asked = true;


  });
});

server.listen(8080);


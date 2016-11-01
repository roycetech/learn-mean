// Now that we have questions stored in redis, let's emit them whenever a new client connects to the server through socket.io.

// Tasks:
// Use the lrange command to retrieve a list of questions that represent the questions list within redis.
// Inside of the lrange callback, use a forEach loop to iterate through the questions and emit() each question to the client. Remember, don't use broadcast.emit because we only want to send the questions to the client that is connecting to the server.


var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

var redis = require('redis');
var redisClient = redis.createClient();

io.sockets.on('connection', function(client) {
  redisClient.lrange('questions', 0, -1, function(err, questions) {
    questions.forEach(function(question) {
      client.emit('question', question);
    });
  });
  client.on('answer', function(question, answer) {
    client.broadcast.emit('answer', question, answer);
  });

  client.on('question', function(question) {
    if(!client.question_asked) {
      client.question_asked = true;
      client.broadcast.emit('question', question);
      redisClient.lpush("questions", question);
    }
  });
});



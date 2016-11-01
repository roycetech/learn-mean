// Great work! One last thing though, since every time a new question comes in we store it in the questions list, we might run into a problem where there are just too many questions stored in that list.

// Tasks:
// Add a callback to lpush that will be used to limit the size of the list down to a max of 20.
// Use the ltrim command to limit the size of the list stored within redis to a maximum size of 20.


var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

var redis = require('redis');
var redisClient = redis.createClient();

io.sockets.on('connection', function(client) {
  redisClient.lrange("questions", 0, -1, function(err, questions) {
    questions.forEach(function(question) {
      client.emit("question", question);
    });
  });

  client.on('answer', function(question, answer) {
    client.broadcast.emit('answer', question, answer);
  });

  client.on('question', function(question) {
    if(!client.question_asked) {
      client.question_asked = true;
      client.broadcast.emit('question', question);
      redisClient.lpush("questions", question, function(err, reply) {
        redisClient.ltrim('questions', 0, 19);
      });    }
  });

});


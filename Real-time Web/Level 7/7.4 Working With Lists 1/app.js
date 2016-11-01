// As we saw in the video, redis can do more than just simple key-value pairs. We are going to be using redis' LISTS later to add persistence to our live-moderation app, so let's practice using them now.


// Tasks:
// Using the redis client's lpush command, insert question1 into the questions list. Then, console.log the result you receive. Remember, the lpush function takes a callback as its last argument, which expects an error and value to be passed as arguments.
// Using the redis client's lpush command, insert question2 into the questions list. Then console.log the result you receive.


var redis = require('redis');
var client = redis.createClient();

var question1 = "Where is the dog?";
var question2 = "Where is the cat?";

client.lpush('questions', question1, function(error, value) {
  console.log(value);
});

client.lpush('questions', question2, function(error, value) {
  console.log(value);
});

// Now that we have seeded the questions list, use the lrange() command to return all of the items and log them.

// Tasks:
// Use the lrange() command to return all of the items from the questions key.
// Now that we have called lrange(), use console.log to log the result from redis.


var redis = require('redis');
var client = redis.createClient();

client.lrange('questions', 0, -1, function(err, questions) {
  console.log(questions);
});
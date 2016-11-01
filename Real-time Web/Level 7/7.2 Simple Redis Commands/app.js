// Let's start practicing using the redis key-value store from our node application.


// Tasks:
// Require the redis module and assign it to a variable called redis.
// Create a redis client and assign it to a variable called client.
// On the client, set the name property to your name.

var redis = require('redis');
var client = redis.createClient();
client.set('name', 'John');
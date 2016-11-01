// Read the existing code below and modify it to emit events.


// Tasks:
// On the chat object, emit the 'join' event and pass in a custom message as a string.
// Now emit the 'message' event on the chat object. Just like before, remember to pass in a custom message as a string


var events = require('events');
var EventEmitter = events.EventEmitter;

var chat = new EventEmitter();
var users = [], chatlog = [];

chat.on('message', function(message) {
  chatlog.push(message);
});

chat.on('join', function(nickname) {
  users.push(nickname);
});

// Emit events here
chat.emit("join", "Custom message");
chat.emit('message', 'Hello World');





// Lets use the fs module to read a file and log its contents to the console.


// Tasks:
// Use the fs module to create a Readable stream for fruits.txt. Store the new str
// Next, listen to the readable event on the newly created stream and give it a callback.
// Inside the callback, read the data chunks from the stream and print them to the console using console.log() - you might want to use a while loop to do this. Don't forget to call toString() on the data before printing it.

var fs = require('fs');

var file = fs.createReadStream('fruits.txt');
file.on('readable', function() {
  var chunk = null;
  while(null !== (chunk = file.read())) {
    console.log(chunk.toString());
  }
});

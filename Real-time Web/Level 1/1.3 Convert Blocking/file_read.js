// Start by changing the call from readFileSync() to readFile().
// Next, add a callback method to the readFile() call. This method should accept error and contents parameters.
// To finish it up, remove the contents var declaration, and move the call to console.log() inside your callback.

// var fs = require('fs');
// var contents = fs.readFileSync('index.html');
// console.log(contents);


var fs = require('fs');

fs.readFile('index.html', function(error, contents) {
    console.log(contents);
});
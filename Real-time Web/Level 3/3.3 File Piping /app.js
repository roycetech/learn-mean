// Instead of manually listening for the 'readable' event on the Readable stream, let's use pipe to read from the stream and write directly to process.stdout.


// Tasks:
// Start by removing the code for the readable handler.
// Call file.pipe(), passing it the stream to write to.

// var fs = require('fs');

// var file = fs.createReadStream('fruits.txt');
// file.on('readable', function(){
//   var chunk;
//   while(null !== (chunk = file.read())){
//     console.log(chunk.toString());
//   }
// });

var fs = require('fs');
var file = fs.createReadStream('fruits.txt');

file.pipe(process.stdout);

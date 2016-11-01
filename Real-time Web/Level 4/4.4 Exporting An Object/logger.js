// The app.js code on the right side does not work. Once again we forgot to export our functions.


// Tasks:
// In the logger.js file, export the info function so we can use it in app.js by assigning it to the exports object.
// In the logger.js file, export the warn function so we can use it in app.js by assigning it to the exports object.
// In the logger.js file, export the error function so we can use it in app.js by assigning it to the exports object.


var warn = function(message) {
  console.log("Warning: " + message);
};

var info = function(message) {
  console.log("Info: " + message);
};

var error = function(message) {
  console.log("Error: " + message);
};

module.exports.info = info;
module.exports.warn = warn;
module.exports.error = error;
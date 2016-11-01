/**
Help finish the following middleware code in the logger.js file:

Tasks:
1. On the response object, listen to the event that's emitted when the response has been
handed off from Express to the underlying Operating System.
2. Inside of the finish callback, calculate the duration of the request by subtracting the startTime from a
new Date object. Store the duration in the duration variable, which has already been declared for you.
3. Using the stream object, which holds a reference to standard out, write the following
message: "This request took ____ ms", where ____ is the duration for
the request.
4. If we run the code as is, the request will be stuck in our middleware. Call the function
that moves processing to the next middleware in the stack.
 */


module.exports = function (request, response, next) {
  var startTime = +new Date();
  var stream = process.stdout;
  var duration = null;

  response.on('finish', function () {
      duration = +new Date()-startTime;
    stream.write("This request took " + duration + " ms");
  });
  next();

};


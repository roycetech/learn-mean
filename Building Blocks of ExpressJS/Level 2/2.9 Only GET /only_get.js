/**
Let's build a middleware that ensures only GET requests are allowed to go through.

Tasks:
1. First, in the only_get.js file, create an anonymous function that uses the middleware signature
and assign it to module.exports. Remember, the Express middleware function signature takes three arguments.
2. Use the request object to check if the HTTP method used is 'GET' and if it is, then call the function
that moves processing to the next middleware in the stack.
3. If the HTTP method is not 'GET', then complete the request by sending back a message that
says 'Method is not allowed'.
 */


 module.exports = function(request, response, next) {
  if (request.method === 'GET') {
    next();
  } else {
    response.send("Method is not allowed");
  }
};
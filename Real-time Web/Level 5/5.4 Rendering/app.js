// Instead of just writing out the quote to the response, let's try using an EJS template to render the response.


// Tasks:
// First, render the quote.ejs template to the response.
// Next, make the name and the quote data available to the template.
// Inside quote.ejs, add the code needed to render the data you passed to the template.


var express = require('express');
var app = express();

var quotes = {
  'einstein': 'Life is like riding a bicycle. To keep your balance you must keep moving',
  'berners-lee': 'The Web does not just connect machines, it connects people',
  'crockford': 'The good thing about reinventing the wheel is that you can get a round one',
  'hofstadter': 'Which statement seems more true: (1) I have a brain. (2) I am a brain.'
};

app.get('/quotes/:name', function(req, res) {
  var quote = quotes[req.params.name];

  res.locals = {name: req.params.name, quote: quote};
  res.render('quote.ejs');



});

app.listen(8080);


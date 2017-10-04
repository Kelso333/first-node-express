// Load express
var express = require('express');

// Create our express app
var app = express();

// Configure the app (app.set)




// Mount middleware (app.use)




// require and mount (app.use) routes




// Define a root route directly on app
// Later, we will use the router object
app.get('/', function(req, res) {
  var msg = req.query.msg ? req.query.msg : '!';
  res.send('<h1>Hello Express ' + msg + '</h1>');
});

app.get('/goodbye', function(req, res) {
  res.send('<h1>Goodbye World</h1>');
});

app.get('/goodbye/:name', function(req, res) {
  res.send('Goodbye ' + req.params.name);
});


// Tell the app to listen on port 3000
app.listen(3000, function() {
  console.log('Listening on port 3000');
});
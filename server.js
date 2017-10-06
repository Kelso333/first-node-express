// Load express
var express = require('express');
var path = require('path');

// Create our express app
var app = express();

// Configure the app (app.set)
app.set('view engine', 'ejs'); // 'set' method is used to configure the app's settings
app.set('views', path.join(__dirname, 'views')); // where our views can be found
app.locals.title = 'First Express';
app.locals.todos = [
  {todo: 'Feed dogs', done: true},
  {todo: 'Learn Express', done: false},
  {todo: 'Have fun', done: true},
];

// Mount middleware (app.use)




// require and mount (app.use) routes
app.use(function(req, res, next) {
  console.log(req.headers['user-agent']);
  next();
});



// Define a root route directly on app
// Later, we will use the router object
app.get('/', function(req, res) {
  var msg = req.query.msg ? req.query.msg : '!';
  res.render('home');
});

app.get('/todos', function(req, res) {
  res.render('todos/index');
});

app.post('/todos', function(req, res) {
  console.log(req.body.newTodo);
  res.render('todos/index');
});

// app.get('/goodbye', function(req, res) {
//   res.json( {msg: 'Goodbye World'} );
// });

// app.get('/goodbye/:name', function(req, res) {
//   res.send('Goodbye ' + req.params.name);
// });


// Tell the app to listen on port 3000
app.listen(3000, function() {
  console.log('Listening on port 3000');
});
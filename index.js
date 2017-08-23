var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(express.static('public'));

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res) {
  // res.send('Hello World!');
  res.render("index", {
    place: 'world',
  });
  // res.json();
  // res.sendFile();
});

app.post('/new', function(req, res) {
  console.dir(req.body);
  res.json({success: 'true'});
});

app.listen(3000, function() {
  console.log('App listening on port 3000!');
});

// Other Notes
// NODE_ENV=production

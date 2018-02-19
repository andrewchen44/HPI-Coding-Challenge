var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database');

var app = express();

const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(port, function() {
  console.log('listening on port', port);
});


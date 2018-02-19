var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database');

var app = express();

const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, function() {
  console.log('listening on port', port);
});


const express = require('express');
const db = require('../database');

const app = express();

const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/../client/dist'));

app.post('/clicked', function(req, res) {
  req.on('data', function(chunk) {
    const data = JSON.parse(chunk);
    db.addTitle(data.title);
  })
  res.send('post recieved')
})

app.listen(port, function() {
  console.log('listening on port', port);
});


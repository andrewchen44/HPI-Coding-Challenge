var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/8080');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var videoSchema = mongoose.Schema({
  title: String
});

var Video = mongoose.model('video', videoSchema);

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/clicked');

const db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

const videoSchema = mongoose.Schema({
  title: String
});

const Video = mongoose.model('video', videoSchema);

const addTitle = function(title) {
  let clickedVideo = new Video({
    title: title
  });
  clickedVideo.save()
}

module.exports.addTitle;

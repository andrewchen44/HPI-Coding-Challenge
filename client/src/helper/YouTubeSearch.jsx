const YouTubeSearch = (parameters, callback) => {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${parameters.key}&q=${parameters.query}&maxResults=${parameters.max}&videoEmbeddable=true&type=video`;
  $.ajax({ 
    url: url, 
    method: "GET",
    success: function(data) {
      callback(data.items);
    },
    error: function(error) {
      console.log(error);
    }
  });
};

export default YouTubeSearch;
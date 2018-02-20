const YouTubeSearch = (params, callback) => {
    let videoStats = {};

    let url = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${params.videoId}&key=${params.key}`;
    $.ajax({ 
      url: url, 
      method: "GET",
      success: function(data) {
        videoStats.ratings= data.items[0].statistics
        url = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${params.videoId}&key=${params.key}`
        $.ajax({ 
          url: url, 
          method: "GET",
          success: function(data) {
            videoStats.comments = data.items
            callback(videoStats);
          },
          error: function(error) {
            console.log(error);
          }
        });
      },
      error: function(error) {
        console.log(error);
      }
    });
  };
  
  export default YouTubeSearch;
import React from "react";
import ReactDOM from "react-dom";
import VideoPlayer from "./components/VideoPlayer.jsx";
import SearchBar from "./components/SearchBar.jsx";
import VideoList from "./components/VideoList.jsx"
import searchYouTube from "./helper/YouTubeSearch.jsx"
import getMetaData from "./helper/StatsAndCommentsSearch.jsx"
import key from "./config/youtube.js"

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allVideos: [],
      currentVideo: {},
      currentVideoLikes: null,
      currentVideoDislikes: null,
      currentVideoComments: [],
    };
  }

  updateVideo(videos) {
    this.setState({ 
      allVideos: videos
    });
    this.selectVideo(0);
  }

  setMetaData(data) {
    console.log(data)
    this.setState({
      currentVideoLikes: data.ratings.likeCount,
      currentVideoDislikes: data.ratings.dislikeCount,
      currentVideoComments: data.comments,
    })
  }

  selectVideo(index) {
    let params = {
      key: key,
      videoId: this.state.allVideos[index].id.videoId
    }
    getMetaData(params, this.setMetaData.bind(this));
    this.setState({
      currentVideo: this.state.allVideos[index],
    })

  }

  searchVideos(query) {
    var params = {
      key: key,
      query: query,
      max: 5
    };
    if (query !== "") {
      searchYouTube(params, this.updateVideo.bind(this));
    }
  }

  componentDidMount() {
    this.searchVideos("cute cats");
  }

  render() {
    return (
      <div>
        <nav>
          <div>
            <SearchBar onSearch={this.searchVideos.bind(this)} />
          </div>
        </nav>
        <div>
          <div>
            <VideoPlayer video={this.state.currentVideo} likes={this.state.currentVideoLikes} dislikes={this.state.currentVideoDislikes} comments={this.state.currentVideoComments}/>
          </div>
          <div>
            <VideoList videos={this.state.allVideos} selectVideo={this.selectVideo.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

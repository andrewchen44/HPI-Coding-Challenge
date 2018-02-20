import React from "react";
import ReactDOM from "react-dom";
import VideoPlayer from "./components/VideoPlayer.jsx";
import SearchBar from "./components/SearchBar.jsx";
import VideoList from "./components/VideoList.jsx"
import searchYouTube from "./helper/YouTubeSearch.jsx"
import key from "./config/youtube.js"

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allVideos: [],
      currentVideo: {}
    };
  }

  updateVideo(videos) {
      this.setState({ allVideos: videos, currentVideo: videos[0] }); 
      console.log(this.state)
  }

  searchVideos(query) {
    var params = {
      key: key,
      query: query,
      max: 5
    };
    if(query !== '') {
      searchYouTube(params, this.updateVideo.bind(this) );
    }
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
            <VideoPlayer />
          </div>
          <div>
            <VideoList />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

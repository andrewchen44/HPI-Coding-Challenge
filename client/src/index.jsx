import React from "react";
import ReactDOM from "react-dom";
import VideoPlayer from "./components/VideoPlayer.jsx";
import SearchBar from "./components/SearchBar.jsx";
import VideoList from "./components/VideoList.jsx"
import searchYouTube from "./helper/YouTubeSearch.jsx"

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allVideos: [],
      currentVideo: {}
    };
  }

  searchVideos(query) {
    var params = {
      key: window.YOUTUBE_API_KEY,
      query: query,
      max: 5
    };
    console.log(query);
    // searchYouTube(params, );
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

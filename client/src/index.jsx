import React from "react";
import ReactDOM from "react-dom";
import VideoPlayer from "./components/VideoPlayer.jsx";
import SearchBar from "./components/SearchBar.jsx";
import VideoList from "./components/VideoList.jsx"

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <div>
        <nav>
          <div>
            <SearchBar />
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
      </div>;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

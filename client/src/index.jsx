import React from "react";
import ReactDOM from "react-dom";
import VideoPlayer from "./components/VideoPlayer.jsx"

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <VideoPlayer/>>
        tests
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

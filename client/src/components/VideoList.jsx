import React from "react";
import VideoListEntry from "./VideoListEntry.jsx"

class VideoList extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        Video Player goes here
        <VideoListEntry/>
      </div>
    );
  }
}

export default VideoList;
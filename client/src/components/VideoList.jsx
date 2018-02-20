import React from "react";
import VideoListEntry from "./VideoListEntry.jsx"

const VideoList = (props) => {
  if(props.videos.length > 0) {
    return <div>
        {props.videos.map(video => <VideoListEntry video={video} />)}
      </div>;
  } else {
      return <div>
          <p>Loading...</p>
        </div>;
  }

}

export default VideoList;
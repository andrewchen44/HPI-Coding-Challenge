import React from "react";
import VideoListEntry from "./VideoListEntry.jsx"

const VideoList = (props) => {
  if(props.videos.length > 0) {
    return <div >
        Up next
        {props.videos.map((video, index) => <VideoListEntry video={video} key={index} index={index} selectVideo={props.selectVideo}/>)}
      </div>
  } else {
      return <div>
          <p>Loading...</p>
        </div>
  }
}

export default VideoList;
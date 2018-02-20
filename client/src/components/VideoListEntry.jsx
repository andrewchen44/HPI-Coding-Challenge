import React from "react";

const VideoListEntry = (props) => {
  return <div>
      <div>
        <img src={props.video.snippet.thumbnails.default.url} alt="" />
      </div>
      <div>
        <div>{props.video.snippet.title}</div>
        <div>{props.video.snippet.description}</div>
      </div>
    </div>;
};

export default VideoListEntry;

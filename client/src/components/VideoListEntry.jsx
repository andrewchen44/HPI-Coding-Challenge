import React from "react";

const VideoListEntry = (props) => {
  return <div>
      <div>
        <img src={props.video.snippet.thumbnails.default.url} alt="" onClick={() => {props.selectVideo(props.index)}}/>
      </div>
      <div>
        <div onClick={() => {props.selectVideo(props.index)}}>{props.video.snippet.title} </div>
        <div >{props.video.snippet.description}</div>
      </div>
    </div>;
};

export default VideoListEntry;

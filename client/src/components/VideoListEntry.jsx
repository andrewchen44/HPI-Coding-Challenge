import React from "react";

const VideoListEntry = (props) => {
  return <div>
      <span style={{display: "inline-block"}}>
        <img src={props.video.snippet.thumbnails.default.url} alt="" onClick={() => {props.selectVideo(props.index)}}/>
      </span>
      <span style={{display: "inline-block"}} className='video-title'onClick={() => {props.selectVideo(props.index)}}>{props.video.snippet.title} </span>
    </div>;
};

export default VideoListEntry;

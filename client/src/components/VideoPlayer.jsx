import React from "react";

const VideoPlayer = (props) => {
  if (props.video.id) {
    return <div>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${props.video.id.videoId}`} allowFullScreen />
          <div>
            <span> Likes: {props.likes} </span>
            <span> Dislikes: {props.dislikes}</span>
          </div>
        </div>
        <div className="video-player-details">
          <h3>{props.video.snippet.title}</h3>
          <div>{props.video.snippet.description}</div>>
          <div>
            {props.comments.map((comment, i) => <div>{comment.snippet.topLevelComment.snippet.authorDisplayName}: {comment.snippet.topLevelComment.snippet.textOriginal}</div> )}
          </div>
        </div>
      </div>;
  } else {
    return (
      <div className="video-player">
        <p>Loading...</p>
      </div>
    );
  }
};

export default VideoPlayer;
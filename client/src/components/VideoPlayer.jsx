import React from "react";

const VideoPlayer = (props) => {
  if (props.video.id) {
    return <div>
        <div>
          <iframe src={`https://www.youtube.com/embed/${props.video.id.videoId}`} allowFullScreen />
          <div>
            <span> Likes: {props.likes} </span>
            <span> Dislikes: {props.dislikes}</span>
          </div>
        </div>
        <div>
          <h3>{props.video.snippet.title}</h3>
          <div>{props.video.snippet.description}</div>>
          <div>
            Top Comments:
            {props.comments.map((comment, i) => <div key={i}>{comment.snippet.topLevelComment.snippet.authorDisplayName}: {comment.snippet.topLevelComment.snippet.textOriginal}</div> )}
          </div>
        </div>
      </div>;
  } else {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
};

export default VideoPlayer;
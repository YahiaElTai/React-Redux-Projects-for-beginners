import React from "react";

const VideoListItem = ({ video, onVideoSelect }) => {
  const imageURL = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageURL} alt="thumbnail" />
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
          <div />
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;

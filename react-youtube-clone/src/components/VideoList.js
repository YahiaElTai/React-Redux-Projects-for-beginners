import React from 'react';
import PropTypes from 'prop-types';

import VideoListItem from './VideoListItem';

const VideoList = ({ videos, onVideoSelect }) => {
  return (
    <ul className="col-md-4 list-group">
      {videos.map(video => (
        <VideoListItem
          onVideoSelect={onVideoSelect}
          key={video.etag}
          video={video}
        />
      ))}
    </ul>
  );
};

VideoList.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onVideoSelect: PropTypes.func.isRequired,
};

export default VideoList;

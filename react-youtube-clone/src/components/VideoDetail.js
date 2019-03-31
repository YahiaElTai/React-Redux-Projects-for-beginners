import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const { id, snippet } = video;
  const url = `https://youtube.com/embed/${id.videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          title="Youtube Video"
          className="embed-responsive-item"
          src={url}
        />
      </div>
      <div>
        <div className="details">
          <p>{snippet.channelTitle}</p>
          <p>{moment(snippet.publishedAt).format('MMMM Do, YYYY')}</p>
        </div>
        <div className="details">
          <h4>{snippet.title}</h4>
          <p>{snippet.description}</p>
        </div>
      </div>
    </div>
  );
};

VideoDetail.propTypes = {
  video: PropTypes.shape(),
};

VideoDetail.defaultProps = {
  video: null,
};

export default VideoDetail;

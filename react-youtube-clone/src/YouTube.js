import React, { Component } from 'react';
import _ from 'lodash';

import './css/styles.css';
import YTsearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = 'AIzaSyBq-aiglxs0kBlv-chm0eVHdvELXuYkpww';

class YouTube extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.searchVideo('React JS');
  }

  searchVideo(term) {
    YTsearch({ key: API_KEY, term }, videos => {
      this.setState({
        videos,
        selectedVideo: videos[0],
      });
    });
  }

  render() {
    const { selectedVideo, videos } = this.state;
    const videoSearch = _.debounce(term => this.searchVideo(term), 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={selectedVideo} />
        <VideoList
          onVideoSelect={video => this.setState({ selectedVideo: video })}
          videos={videos}
        />
      </div>
    );
  }
}

export default YouTube;

import React, { Component } from "react";
import _ from "lodash";

import "./css/styles.css";
import YTsearch from "youtube-api-search";
import SearchBar from "./components/search_bar.js";
import VideoList from "./components/video_list.js";
import VideoDetail from "./components/video_detail.js";

const API_KEY = "AIzaSyBq-aiglxs0kBlv-chm0eVHdvELXuYkpww";

class YouTube extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.searchVideo("React JS");
  }

  searchVideo(term) {
    YTsearch({ key: API_KEY, term }, videos => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce(term => this.searchVideo(term), 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default YouTube;

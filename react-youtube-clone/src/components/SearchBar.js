import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  onInputChange(term) {
    const { onSearchTermChange } = this.props;
    onSearchTermChange(term);
  }

  render() {
    return (
      <div className="search-bar">
        <h3>YouTube Clone</h3>
        <input onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
}

SearchBar.propTypes = {
  onSearchTermChange: PropTypes.func.isRequired,
};

export default SearchBar;

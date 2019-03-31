import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    const { term } = this.state;
    const { fetchWeather } = this.props;
    fetchWeather(term);
    this.setState({ term: '' });
  };

  render() {
    const { term } = this.state;
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forcast in your favorite cities"
          className="form-control"
          value={term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

SearchBar.propTypes = {
  fetchWeather: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(SearchBar);

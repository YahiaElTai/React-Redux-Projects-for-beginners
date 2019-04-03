import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as actions from '../actions/index';

class NewPost extends React.Component {
  onSubmit = () => {
    const { createPost, history } = this.props;
    createPost(this.state);
    history.push('/');
  };

  onInputChange = event => {
    const {
      target: { id, value },
    } = event;
    this.setState({ [id]: value });
  };

  render() {
    return (
      <form className="container" onSubmit={this.onSubmit}>
        <h3>Create A New Post</h3>
        <div className="form-group">
          <label htmlFor="title">
            Title
            <input
              onChange={this.onInputChange}
              id="title"
              type="text"
              className="form-control"
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="categories">
            Categories
            <input
              onChange={this.onInputChange}
              id="categories"
              type="text"
              className="form-control"
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="content">
            Content
            <textarea
              onChange={this.onInputChange}
              id="content"
              type="text"
              className="form-control"
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = disptach => bindActionCreators(actions, disptach);

NewPost.propTypes = {
  createPost: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(withRouter(NewPost));

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as actions from '../actions/index';

class PostDetail extends React.Component {
  componentWillMount() {
    const { fetchPost, match } = this.props;
    fetchPost(match.params.id);
  }

  handleDelete = () => {
    const { deletePost, match, history } = this.props;
    deletePost(match.params.id);
    history.push('/');
  };

  render() {
    const { post } = this.props;
    return (
      post && (
        <div className="container">
          <Link to="/" className="btn btn-primary pull-xs-right">
            Go Back
          </Link>
          <h3>{post.title}</h3>
          <h6>Category: {post.categories}</h6>
          <p>{post.content}</p>
          <button
            type="button"
            onClick={this.handleDelete.bind(this)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      )
    );
  }
}

const mapDisptachToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => ({ post: state.posts.post });

PostDetail.propTypes = {
  post: PropTypes.shape(),
  fetchPost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  match: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired,
};
PostDetail.defaultProps = {
  post: null,
};

export default connect(
  mapStateToProps,
  mapDisptachToProps,
)(withRouter(PostDetail));

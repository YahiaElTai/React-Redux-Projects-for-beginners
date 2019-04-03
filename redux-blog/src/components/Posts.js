import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as actions from '../actions/index';

class PostsIndex extends React.Component {
  componentWillMount() {
    const { fetchPosts } = this.props;
    fetchPosts();
  }

  renderPosts = () => {
    const { posts } = this.props;
    return posts.map(post => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`posts/${post.id}`}>
            <span className="pull-xs-right">{post.categories}</span>
            <strong>{post.title}</strong>
          </Link>
        </li>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className=" mt-32 text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add New Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">{this.renderPosts()}</ul>
      </div>
    );
  }
}

const mapDisptachToProps = disptach => bindActionCreators(actions, disptach);

const mapStateToProps = state => ({ posts: state.posts.all });

PostsIndex.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default connect(
  mapStateToProps,
  mapDisptachToProps,
)(PostsIndex);

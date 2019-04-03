import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Posts from './components/Posts';
import PostDetail from './components/PostDetail';
import NewPost from './components/NewPost';

export default () => (
  <Router>
    <Route exact path="/" component={Posts} />
    <Route path="/posts/new" component={NewPost} />
    <Route path="/posts/:id" component={PostDetail} />
  </Router>
);

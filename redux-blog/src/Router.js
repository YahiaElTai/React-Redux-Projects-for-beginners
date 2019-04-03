import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Posts from './components/Posts';
import PostDetail from './components/PostDetail';
import NewPost from './components/NewPost';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Posts} />
      <Route exact path="/posts/new" component={NewPost} />
      <Route exact path="/posts/:id" component={PostDetail} />
    </Switch>
  </Router>
);

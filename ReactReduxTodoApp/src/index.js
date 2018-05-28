import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

var TodoApp = require('./components/TodoApp');
var actions = require('./actions/index.js');
var store = require('./store/configureStore').configure();
var TodoAPI = require('./api/TodoAPI');

import '../style/style.scss';

store.subscribe( () => {
  var state = store.getState();
  TodoAPI.setTodos(state.todos);
});

var intialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(intialTodos));

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.querySelector('.container')
);



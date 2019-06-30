import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';

import Home from './Home';
import Posts from './Posts';
import CreatePostForm from './CreatePostForm';

const App = () => (
  <div>
    <h1>This is my app</h1>
    <Router>
      <Provider store={store}>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/posts/create" component={CreatePostForm} />
          <Route path="/posts" component={Posts} />
        </Switch>
      </Provider>
    </Router>
  </div>
);

export default App;

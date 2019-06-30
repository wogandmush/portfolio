import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';

import Header from './Header';
import Home from './Home';
import Posts from './Posts';
import CreatePostForm from './CreatePostForm';

const App = () => (
  <Provider store={store}>
    <Router>
      <Header />
      <h1 className="turquoise-hl">This is my app</h1>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/posts/create" component={CreatePostForm} />
        <Route path="/posts" component={Posts} />
      </Switch>
    </Router>
  </Provider>
);

export default App;

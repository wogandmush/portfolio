import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';

import Header from './Header';
import Home from './Home';
import Projects from './projects/Projects';
import Posts from './posts/Posts';
import CreatePost from './posts/CreatePost';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const routes = [
  {name: 'Home', path: '/home', Component: Home},
  {name: 'Create Post', path: '/posts/create', Component: CreatePost},
  {name: 'Blog', path: '/posts', Component: Posts},
  {name: 'Projects', path: '/projects', Component: Projects},
];

const App = () => (
  <Provider store={store}>
    <Router>
      <Header routes={routes} />
      <div className="container">
        <h1 className="text-lg center turquoise-hl">This is my app</h1>
          {routes.map(({path, Component }) => (
            <Route key={`route-${path}`} exact path={path}>
              {({ match }) => {
                return (
                  <CSSTransition
                    in={match != null}
                    timeout={500}
                    classNames="fade"
                    unmountOnExit
                  >
                      <Component />
                    </CSSTransition>
                )}}
                  </Route>
          ))}
                </div>
              </Router>
            </Provider>
            );

            export default App;

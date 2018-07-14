import 'babel-polyfill'; // used to polyfill Object.assign
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux'; // a higher order component that attaches store to react container component
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// mock api
import { loadCourses } from './actions/courseActions';

const store = configureStore(); // optional param of initialState, but this is handled in courseReducer default []
// load up thunk mock api on load
store.dispatch( loadCourses() );

// Provider allows access to store from React components
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);

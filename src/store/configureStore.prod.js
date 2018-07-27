/* starts with app */
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk'; // for async mock apis

export default function configureStore( initialState ) {
  // initialize store for server-side rendering
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
}
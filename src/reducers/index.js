/* This is the root reducer
 *  By convention, it is named index.js
 * */

import { combineReducers } from 'redux';
import courseReducer from './courseReducer';

const rootReducer = combineReducers({
  courseReducer // ES6 shorthand property; Same as: courses : courses in ES5
});

export default rootReducer;
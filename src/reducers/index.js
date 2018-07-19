/* This is the root reducer
 *  By convention, it is named index.js
 * */

import { combineReducers } from 'redux';
import courseReducer from './courseReducer';
import authorReducer from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

/** Notice difference between calling these reducers and other vars (ajaxCallsInProgress) */
const rootReducer = combineReducers({
  courseReducer, // ES6 shorthand property; Same as: courses : courses in ES5
  authorReducer,
  ajaxCallsInProgress // ajaxCallsInProgress
});

export default rootReducer;
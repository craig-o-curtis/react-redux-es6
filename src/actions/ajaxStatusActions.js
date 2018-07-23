/** actions for tracking the status of AJAX calls */
import * as types from './actionTypes';

/** action creator */
export function beginAjaxCall() {
  return {type : types.BEGIN_AJAX_CALL};
}

/** action creator */
/** define action first */
/** then define this action creator */
/** next in ajaxStatusReducer, put to use */
/** finally in thunk, dispatch dispatch( ajaxCallError() )  */
export function ajaxCallError() {
  return {type : types.AJAX_CALL_ERROR};
}
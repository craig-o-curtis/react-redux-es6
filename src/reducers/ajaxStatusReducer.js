import * as types from '../actions/actionTypes';
import initialState from './initialState';

/**
 * Handles all following success calls:
 * @param {string} actionType
 *  LOAD_COURSES_SUCCESS / ERROR
 *  UPDATE_COURSE_SUCCESS / ERROR
 *  CREATE_COURSE_SUCCESS / ERROR
 *  LOAD_AUTHORS_SUCCESS / ERROR
 */
function actionTypeEndsInSuccess( actionType ) {
  // return actionType.substring( actionType.length - 8 ) == '_SUCCESS';
  return /\_SUCCESS$/.test(actionType);
}

export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action) {
  /* use conditional instead of switch for simple reducers for trick --> */
  if (action.type === types.BEGIN_AJAX_CALL) {
    return state + 1;
  } else if ( actionTypeEndsInSuccess(action.type ) ) {
    return state - 1;
  } else if ( action.type == types.AJAX_CALL_ERROR ) {
    return state - 1;
  }

  return state;
}

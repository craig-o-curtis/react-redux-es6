/** actions for tracking the status of AJAX calls */
import * as types from './actionTypes';

export function beginAjaxCall() {
  return {type : types.BEGIN_AJAX_CALL};
}

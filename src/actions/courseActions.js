import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

// action creator
export function loadCoursesSuccess(courses) {
  // debugger; /* REDUX FLOW STEP 2 */
  return {
    type : types.LOAD_COURSES_SUCCESS,
    courses
  };
  // ES6 no need to specify course : course
}
export function loadCoursesError(error) {
  return { type : types.LOAD_COURSES_ERROR, error };
}

// thunks for async loading
/* handle promise and dispatch action when Promise resolves */
export function loadCourses() {
  return function(dispatch) {
    // returns a promise
    return courseApi.getAllCourses()
      .then( courses => {
        dispatch(loadCoursesSuccess(courses));
      }).catch( error => {
        dispatch(loadCoursesError(error));
        throw(error);
      });
  };
}
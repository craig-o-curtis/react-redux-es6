import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

/* COURSES THUNK */
// action creator
export function loadCoursesSuccess(courses) {
  // debugger; /* REDUX FLOW STEP 2 */
  return {
    type : types.LOAD_COURSES_SUCCESS,
    courses
  };
  // ES6 no need to specify course : course
}
// action creator
export function loadCoursesError(error) {
  return { type : types.LOAD_COURSES_ERROR, error };
}

// action creator
export function createCourseSuccess(course) {
  return { type : types.CREATE_COURSE_SUCCESS, course };
}

// action creator
export function updateCourseSuccess(course) {
  return { type : types.UPDATE_COURSE_SUCCESS, course };
}

// action creator
export function updateCourseError(error) {
  return { type : types.UPDATE_COURSE_ERROR, error };
}


// thunks for async loading
/* handle promise and dispatch action when Promise resolves */
export function loadCourses() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
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

/* Saving thunk */
export function saveCourse(course) {
  /**
   * getState optional param useful for accessing Redux store
   * and get particular pieces of state out of it
   */
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());

    return courseApi.saveCourse(course)
      .then(savedCourse => {
        course.id ? dispatch(updateCourseSuccess(savedCourse)) :
          dispatch(createCourseSuccess(savedCourse));
      }).catch(error => {
        dispatch(updateCourseError(error)); // not currently doing anything - see next
        dispatch(ajaxCallError(error));
        throw(error); /// need this otherwise will end in success
      });
  };
}
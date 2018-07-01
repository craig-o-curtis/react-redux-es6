import * as types from './actionTypes';

export function createCourse(course) {
  // debugger; /* REDUX FLOW STEP 2 */
  return {
    type : types.CREATE_COURSE,
    course
  };
  // ES6 no need to specify course : course
}
export function createCourse(course) {
  // debugger; /* REDUX FLOW STEP 2 */
  return {
    type : 'CREATE_COURSE',
    course
  };
  // ES6 no need to specify course : course
}
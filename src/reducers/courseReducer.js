import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) { // default to array ES6
    switch (action.type) {
      case types.CREATE_COURSE: // deprecated
        /** bad practice - don't change state */
        // state.push(action.course);
        // return state;
        // debugger; /* REDUX FLOW STEP 3 */
        return [...state, // copy over array
          Object.assign({}, action.course) // create new array
        ];
      /** LOADING */
      case types.LOAD_COURSES_SUCCESS:
        return action.courses;
      case types.LOAD_COURSES_ERROR:
        return state;
      /* CREATING */
      case types.CREATE_COURSE_SUCCESS:
        return [
          ...state,
          Object.assign({}, action.course)
        ];
      /* UPDATING */
      case types.UPDATE_COURSE_SUCCESS:
        return [
          ...state.filter(course => course.id !== action.course.id), // get all courses except that course
          Object.assign({}, action.course) // then concat new course back to arr with removed orig
        ];
      case types.UPDATE_COURSE_ERROR:
        return state;

      default:
        return state;
    }
}
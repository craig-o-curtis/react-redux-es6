import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) { // default to array ES6
    switch (action.type) {
      case types.CREATE_COURSE: // deprecated
        /** bad practice - don't change state */
        // state.push(action.course);
        // return state;
        // debugger; /* REDUX FLOW STEP 3 */
        return [...state, // copy over array
          Object.assign({}, action.course) // create new array
        ];
      case types.LOAD_COURSES_SUCCESS:
        return action.courses;
      case types.LOAD_COURSES_ERROR:
        return state;
      default:
        return state;
    }
}
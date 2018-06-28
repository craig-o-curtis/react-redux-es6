export default function courseReducer(state = [], action) { // default to array ES6
    switch (action.type) {
      case 'CREATE_COURSE':
        /** bad practice - don't change state */
        // state.push(action.course);
        // return state;
        // debugger; /* REDUX FLOW STEP 3 */
        return [...state, // copy over array
          Object.assign({}, action.course) // create new array
        ];
        // break;
      default:
        return state;
        // break;
    }
}
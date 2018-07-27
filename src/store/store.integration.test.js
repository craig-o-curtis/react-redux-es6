/** This is an INTEGRATION TEST */
import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers'; // grabs from the index.js file
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';

describe('Store', () => {
  it('should handle creating courses', () => {
    // prep
    const store = createStore( rootReducer, initialState );
    const testCourse = {
      title : 'Test Course'
    };
    const expected = {
      title : 'Test Course'
    };

    // call
    const action = courseActions.createCourseSuccess( testCourse );
    store.dispatch( action );
    const result = store.getState().courseReducer[0]; 
      // can also call courseReducer 'courses',
      // but maintaining this naming convention for clarity of what a reducer actually is

    // results
    expect( result ).toEqual( expected );
  });
});



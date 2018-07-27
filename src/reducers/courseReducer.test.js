import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

describe('Course Reducer', () => {
  it('should add a course when passed CREATE_COURSE_SUCCESS', () => {
    // prep
    const initialState = [
      { title : 'A' },
      { title : 'B' }
    ];
    const newCourse = { title : 'C' };
    const action = actions.createCourseSuccess( newCourse );
    // call
    const newState = courseReducer( initialState, action );
    // results
    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual('A');
  });

  it('should update a course when passed UPDATE_COURSE_SUCCESS', () => {
    // prep
    const initialState = [
      { id : 'A', title : 'A' },
      { id : 'B', title : 'B' },
      { id : 'C', title : 'C' }
    ];
    const course = { id : 'B', title : 'NEW TITLE' };
    const action = actions.updateCourseSuccess( course );

    // call
    const newState = courseReducer( initialState, action );
    const updatedCourse = newState.find( a => a.id === course.id );
    const untouchedCourse = newState.find( a => a.id === 'A' );
    // results
    expect(updatedCourse.title).toEqual('NEW TITLE');
    expect(untouchedCourse.title).toEqual('A');
    expect(newState.length).toEqual(3);
  });
});




/** WASTE OF TIME - testing that JAVASCRIPT does what it is supposed to */
import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

// Test a sync action
describe('Course Actions', () => {
  describe('loadCoursesSuccess', () => {
    it('should create a LOAD_COURSES_SUCCESS action', () => {
      // prep
      const courses = [{ id : 'clean-code', title : 'Clean Code' }];
      const expectedAction = {
        type : types.LOAD_COURSES_SUCCESS,
        courses : courses
      };
      // call
      const action = courseActions.loadCoursesSuccess(courses);
      // result
      expect( action ).toEqual( expectedAction );
    });
  });

  describe('loadCoursesError', () => {
    it('should create a LOAD_COURSES_ERROR action', () => {
      // prep
      const error = { title : 'test loading error' };
      const expectedAction = {
        type : types.LOAD_COURSES_ERROR,
        error : error
      };
      // call
      const action = courseActions.loadCoursesError(error);
      // result
      expect( action ).toEqual( expectedAction );
    });
  });

  describe('createCourseSuccess', () => {
    it('should create a CREATE_COURSE_SUCCESS action', () => {
      // prep
      const course = { id : 'clean-code', title : 'Clean Code' };
      const expectedAction = {
        type : types.CREATE_COURSE_SUCCESS,
        course : course
      };
      // call
      const action = courseActions.createCourseSuccess(course);
      // result
      expect( action ).toEqual( expectedAction );
    });
  });

  describe('updateCourseSuccess', () => {
    it('should create a UPDATE_COURSE_SUCCESS action', () => {
      // prep
      const course = { id : 'clean-code', title : 'Clean Code' };
      const expectedAction = {
        type : types.UPDATE_COURSE_SUCCESS,
        course : course
      };
      // call
      const action = courseActions.updateCourseSuccess(course);
      // result
      expect( action ).toEqual( expectedAction );
    });
  });

  describe('updateCourseError', () => {
    it('should create a UPDATE_COURSE_ERROR action', () => {
      // prep
      const error = { title : 'test error' };
      const expectedAction = {
        type : types.UPDATE_COURSE_ERROR,
        error : error
      };
      // call
      const action = courseActions.updateCourseError(error);
      // result
      expect( action ).toEqual( expectedAction );
    });
  });

  // export function loadCourses() {
  //   return function(dispatch) {
  //     dispatch(beginAjaxCall());
  //     // returns a promise
  //     return courseApi.getAllCourses()
  //       .then( courses => {
  //         dispatch(loadCoursesSuccess(courses));
  //       }).catch( error => {
  //         dispatch(loadCoursesError(error));
  //         throw(error);
  //       });
  //   };
  // }
  describe('loadCourses', () => {
    it('should create a UPDATE_COURSE_ERROR action', () => {
      // prep

      // call
      const action = courseActions.loadCourses();
      // result

      // expect( action ).toEqual( expectedAction );
    });
  });

});


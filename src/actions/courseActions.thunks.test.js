/** There are thunks in the CourseActions file */
import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock'; // for mocking HTTP calls
import configurationMockStore from 'redux-mock-store';

// configure a mock store
const middleware = [thunk];
const mockStore = configurationMockStore( middleware );

describe('Async actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create the BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS actions/thunks when loading courses', (done) => {
    // done is for Mocha to complete async work

    // Here's an example to call nock
    // nock('http://example.com/') // put real URL here
    //   .get('/courses')
    //   .reply(200, { body : { course : [ { id : 1, firstName : 'Cory', lastName : 'House' } ] } } );

    /** PREP */
    const expectedActions = [
      { type : types.BEGIN_AJAX_CALL },
      { type : types.LOAD_AUTHORS_SUCCESS, body : { courses : [ { id : 'clean-code', title : 'Clean Code' }] } }
    ];

    /** USE MOCK STORE */
    // set initial state and actions expecting
    const store = mockStore( { courses : [] }, expectedActions );
    store.dispatch( courseActions.loadCourses() )
      .then( () => {
        const actions = store.getActions();
        expect( actions[0].type ).toEqual( types.BEGIN_AJAX_CALL );
        expect( actions[1].type ).toEqual( types.LOAD_COURSES_SUCCESS );
        
      });
    done();
  });
});
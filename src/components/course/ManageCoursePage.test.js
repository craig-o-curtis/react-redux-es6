import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme'; // mount allows testing of children, shallow is only this component
// import ManageCoursePage from './ManageCoursePage'; // method 1
// import { Provider } from 'react-redux'; // method 1
import { ManageCoursePage } from './ManageCoursePage';

describe('Manage Course Page', () => {
  it('should set error message when trying to save an empty title', () => {
    // mock out props
    const props = {
      actions : {
        saveCourse : () => { return Promise.resolve(); }
      },
      authors : [],
      course : {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''}
    };
    // method 1
    // usefule for Redux-related code like mapStateToProps
    // const wrapper = mount( <Provider store={store}> <ManageCoursePage /> </Provider> );

    // method 2
    // export raw unconnected version, set up store later - add export in front of class in ManageCoursePage
    // const wrapper = mount( <ManageCoursePage authors={[]} /> ); // JSDOM creates in-mem DOM
    const wrapper  = mount( <ManageCoursePage {...props} /> );

    // actual test - this dives down into the nested CourseForm component
    const saveButton = wrapper.find('input[type="submit"]');
    expect( saveButton.prop('type') ).toBe( 'submit' );
    // simulate a click
    saveButton.simulate('click');
    // expect an error
    expect( wrapper.state().errors.title ).toBe( 'Title must be at least 5 characters.' );

  });
});
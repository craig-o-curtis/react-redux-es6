/* This shows the verboseness of ReactTestUtils */
import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

/** setup mock component for react test utils */
function setup(saving) {
  let props = {
    course : {},
    saving : saving,
    errors : {},
    onSave : () => {},
    onChange : () => {}
  }

  let renderer = TestUtils.createRenderer();
  renderer.render(<CourseForm {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  }
}
/* test structure of component */
describe('CourseForm via React Test Utils ', () => {
  it('renders form and h1 tag', () => {
    // call setup created above
    const { output } = setup();
    expect(output.type).toBe('form');
    
    let [h1] = output.props.children;
    expect(h1.type).toBe('h1');
  });

  it('save button is labeled "Save" when not saving', () => {
    // setup
    const { output } = setup(false);
    // !!!! this is AWFUL for UI creation and anyone why knows any CSS whatsoever !!!!
    const submitButton = output.props.children[5];
    // test
    expect(submitButton.props.value).toBe('Save');
  });

  it('save button is labeled "Saving..." when saving', () => {
    // setup
    const { output } = setup(true);
    // !!!! this is AWFUL for UI creation and anyone why knows any CSS whatsoever !!!!
    const submitButton = output.props.children[5];
    // test
    expect(submitButton.props.value).toBe('Saving...');
  });

});
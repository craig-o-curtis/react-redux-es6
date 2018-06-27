import React from 'react';
import PropTypes from 'prop-types';

class CoursesPage extends React.Component {
  constructor( props, context ) {
    super( props, context );

    this.state = {
      course : { title : '' }
    };

    /*** DO BINDS IN CONSTRUCOR  */
      // need to bind to this keyword in ES6
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
      /** Note - could bind in JSX - onClick={this.onClickSave.bind(this)}
       * but has negative impact on performance - causes new function to be created
       * on each render
       */
  }

  /** */
  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course : course});
  }
  /** */
  onClickSave() {
    alert(`Saving ${this.state.course.title}`);
  }

  render () {
    return (
      <div>
        <h1>Courses</h1>
        <h2>Add Course</h2>
        <input 
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title} />
        
        <input 
          type="submit"
          value="Save"
          onClick={this.onClickSave}
          />
      </div>
    );
  }
};

export default CoursesPage;
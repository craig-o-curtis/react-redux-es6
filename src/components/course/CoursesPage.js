import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';

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
    // alert(`Saving ${this.state.course.title}`);
    // this.props.dispatch is from not adding second arg mapDispatchToProps to connect() at bottom in export statement
    /* MOST VERBOSE WAY: */
    // debugger; /* REDUX FLOW STEP 1 */
    this.props.dispatch( courseActions.createCourse( this.state.course ) );
  }

  /* Create a repeater */
  createCourseRow(course, index) {
    return (
      <div key={index}>{course.title}</div>
    );
  }

  render() {
    // debugger; /* REDUX FLOW STEP 0,5 */
    return (
      <div>
        <h1>Courses</h1>
        {/* External function mapping */}
        {this.props.courses.map( this.createCourseRow )}

        {/* Inline mapping */}
        {/* { this.props.courses.map( (course, index) => {
          return (<div key={index}>{course.title}</div>);
          })
        } */}

        <h2>Add Course</h2>
        <input type="text"
            onChange={this.onTitleChange}
            value={this.state.course.title} />

        <input type="submit"
            value="Save"
            onClick={this.onClickSave} />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
};

/*** !!!! The state param actually shows as courseReducer function.... */
function mapStateToProps(state, ownProps) {
  // return props to be exposed on component
  // ownProps most useful for props injected by React-Router
  debugger; /* REDUX FLOW STEP 4 */
  return {
    courses: state.courseReducer // so can say this.props.courses on above component; here access courses in redux store
  };
}

// for what actions to expose to component
// this is an optional param
// when not set as an arg, component automatically gets dispatch property attached, injected by connect
// then can in JSX use this.props.dispatch --- allows to fire off actions
// function mapDispatchToProps() {

// }

// // Original
// export default CoursesPage;

// export a component decorated by react-redux connect function
// // allows components to interact with Redux
  // connect is a higher order component that wraps the CoursesPage
  // args (both are functions)
  //  mapStateToProps
  //  mapDispatchToProps
// export default connect(mapStateToProps /*, mapDispatchToProps */)(CoursesPage);

export default connect(mapStateToProps)(CoursesPage);
  // double ()() means first function returns a function, the second () is to call that returned function
  // This syntax is the same as:
  /*
  * const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
  * export default connectedStateAndProps(CoursesPage);
  * */
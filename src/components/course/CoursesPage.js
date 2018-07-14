import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends React.Component {
  constructor( props, context ) {
    super( props, context );

    /** moved to manage courses page */
    // this.state = {
    //   course : { title : '' }
    // };

    /*** DO BINDS IN CONSTRUCOR  */
      // need to bind to this keyword in ES6
    /** moved to manage courses page */
    // this.onTitleChange = this.onTitleChange.bind(this);
    // this.onClickSave = this.onClickSave.bind(this);
      /** Note - could bind in JSX - onClick={this.onClickSave.bind(this)}
       * but has negative impact on performance - causes new function to be created
       * on each render
       */
  }

  /** Moved to Manage Courses Page */
  // onTitleChange(event) {
  //   const course = this.state.course;
  //   course.title = event.target.value;
  //   this.setState({course : course});
  // }
  /** Moved to Manage Courses Page */
  // onClickSave() {
  //   // alert(`Saving ${this.state.course.title}`);
  //   // this.props.dispatch is from not adding second arg mapDispatchToProps to connect() at bottom in export statement
  //   /* MOST VERBOSE WAY: */
  //   // this.props.dispatch( courseActions.createCourse( this.state.course ) );
  //   // debugger;
  //   /* REDUX FLOW STEP 1 */
  //   /* Concise way using mapDispatchToProps */

  //   /* METHOD 2/3 */
  //   // this.props.createCourse( this.state.course );

  //   /* METHOD 3/3 */
  //   this.props.actions.createCourse( this.state.course );
  // }

  /* Create a repeater */
  // createCourseRow(course, index) {
  //   return (
  //     <div key={index}>{course.title}</div>
  //   );
  // }

  render() {
    // debugger; /* REDUX FLOW STEP 0,5 */
    
    // destructor props here at top of render
    const { courses } = this.props;

    return (
      <div>
        <h1>Courses</h1>

        {/* Use new component */}
        <CourseList courses={courses} />


        {/* External function mapping */}
        {/* {this.props.courses.map( this.createCourseRow )} */}

        {/* Inline mapping */}
        {/* { this.props.courses.map( (course, index) => {
          return (<div key={index}>{course.title}</div>);
          })
        } */}

        {/* add course refactored out into manage courses  */}
        {/* <h2>Add Course</h2>
        <input type="text"
            onChange={this.onTitleChange}
            value={this.state.course.title} />

        <input type="submit"
            value="Save"
            onClick={this.onClickSave} /> */}
      </div>
    );
  }
}

CoursesPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  // createCourse: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

/*** !!!! The state param actually shows as courseReducer function....
 *  return props to be exposed on component
 *  ownProps most useful for props injected by React-Router
 *  debugger;
 * // REDUX FLOW STEP 4
*/
function mapStateToProps(state, ownProps) {
  return {
    courses: state.courseReducer // so can say this.props.courses on above component; here access courses in redux store
  };
}

/**
 * mapDispatchToProps
 * for what actions to expose to component
 * this is an optional param
 * when not set as an arg, component automatically gets dispatch property attached, injected by connect
 * then can in JSX use this.props.dispatch --- allows to fire off actions
 * arg (dispatch) injected by connect function
 */
function mapDispatchToProps(dispatch) {
  return {
    /* METHOD 2/3 */
    // createCourse : (course) => dispatch(courseActions.createCourse(course))
    /* dispatch() triggers flow through redux
     * Without it, call would just be an empty call to courseActions.createCourse returning
     * an object to NOWHERE
     */

     /* METHOD 3/3
      * Wraps all actions with dispatch
      * now actions sit on level this.props.actions.(createCourse/etc.)
     */
     actions : bindActionCreators( courseActions, dispatch )
  };
}

/* MEHTOD 0/3 Original */
// export default CoursesPage;

/* export a component decorated by react-redux connect function
 * allows components to interact with Redux
 * connect is a higher order component that wraps the CoursesPage
 * args (both are functions)
 * mapStateToProps
 * mapDispatchToProps (without this arg, connect adds this.props.dispatch method)
 * */
// export default connect(mapStateToProps /*, mapDispatchToProps */)(CoursesPage);

/* METHOD 1/3 - omit mapDispatchToProps arg - works with using this.props.dispatch */
// export default connect(mapStateToProps)(CoursesPage);

/* METHOD 2/3 more advancd */
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
  /* double ()() means first function returns a function, the second () is to call that returned function
   * This syntax is the same as:
   */
  // const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
  // export default connectedStateAndProps(CoursesPage);

  /* METHOD 3/3 - using bindActionCreators */

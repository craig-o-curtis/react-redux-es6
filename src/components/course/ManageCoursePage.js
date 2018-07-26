import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import { authorsFormattedForDropdown } from '../../selectors/authorSelectors';
import toastr from 'toastr';

// export statement here for easier unit testing, import with curly braces in test - { ManageCoursePage }
export class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    // Set up local state
    this.state = {
      course : Object.assign({}, props.course),
      errors : {},
      saving : false
    };

    // bind method to this context
    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  // handle ajax data, set to state
  /** Called even when props may not have changed - so need to check for equality below **/
  componentWillReceiveProps(nextProps) {
    if (this.props.course.id != nextProps.course.id) {
      // Necessary to populate from when existing course is loaded directly

      this.setState({
        course : Object.assign({}, nextProps.course)
      });
    }
  }

  updateCourseState(event) {
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course : course});
  }

  courseFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.course.title.length < 5) {
      errors.title = 'Title must be at least 5 characters.';
      formIsValid = false;
    }

    this.setState( { errors : errors } );

    return formIsValid;
  }

  saveCourse(event) {
    event.preventDefault();
    // validation function
    if ( !this.courseFormIsValid() ) {
      return;
    }

    this.setState({saving: true});
    // below thunk returns a promise
    this.props.actions.saveCourse(this.state.course)
      .then(() => {
        this.redirect();
      }).catch( (error) => {
        // could use an error dispatch, but toastr for simplicity
        toastr.error(error);
        this.setState({saving: false});
        // this.setState({loading: false});
      });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Course saved!');
    // able to user context from declaration below in ManageCoursePage.contextTypes
    this.context.router.push('/courses');
  }

  render() {
    return (
      <div>
        <CourseForm
          onChange={this.updateCourseState}
          onSave={this.saveCourse}
          allAuthors={this.props.authors}
          course={this.state.course}
          errors={this.state.errors}
          saving={this.state.saving}
          />
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
  course : PropTypes.object.isRequired,
  authors : PropTypes.array.isRequired,
  actions : PropTypes.object.isRequired
};

// add context for react-router
ManageCoursePage.contextTypes = {
  router : PropTypes.object
  // now can user router's context above in save function
};

// used inside mapStateToProps
function mstp_getCourseById(courses, id) {
  const course = courses.filter(course => course.id == id);
  if (course.length) {
    return course[0]; // since filter returns an array still
  }
  return null;
}

function mapStateToProps(state, ownProps) {
  // get params from url, determine if adding new or updating existing
  const courseId = ownProps.params.id; // from the path '/course/:id'  console.log(ownProps)

  // need to load empty course
  let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

  // ensure getting courses on load
  if (courseId && state.courseReducer.length > 0) {
    // set course to course within state
    course = mstp_getCourseById(state.courseReducer, courseId);
  }

  // transform shape of data from authors mock api call -
  // !!! Separated into ANOTHER folder - selectors -- this is too much separation -- should just be IN THIS FILE
  // const authorsFormattedForDropdown = state.authorReducer.map(author => {
  //   return {
  //     value : author.id,
  //     text : author.firstName + ' ' + author.lastName
  //   };
  // });


  // pass data to component here
  return {
    course : course,
    authors : authorsFormattedForDropdown( state.authorReducer )
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // makes all courseActions available under this.props.actions
    actions : bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
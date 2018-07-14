Demo project from Pluralsight's React-Redux-ES6 course

Additional NPM Packages:
  prop-types
  babel-polyfill
  chalk
  react-dom
  react-redux
  react-router
  react-redux-router

Basic Redux Flow...
1. CoursesPage.js : onClick save in component, dispatches an action
    this.props.dispatch( courseActions.createCourse( this.state.course ) );
    
2. courseActions.js : receives action, with type and data

3. courseReducer.js : Somehow receives action and does switch
??  How does it land in course reducer?

4. CoursesPage.js : mapStateToProps function returns call again to courseReducer
?? Why is mapStateToProps called here?

5. React re-renders





Review - Parts of Container Components 
 * see CoursesPage.js as example

1. constructor
  1. initialize state
  2. call bind functions to this

2. child functions
  1. functions called by render (i.e. called as methods in JSX inside render function)

3. render function
  1. Should call child components that contain markup
  2. i.e. ideally shouldn't have inline JSX

4. propTypes validation

5. Redux connect and related functions
  1. mapStateToProps
  2. mapDispatchToProps
  3. export default connect(mapStateToProps, mapDispatchToProps)(ComponentName);



// Mock APIs
Options
1. redux-thunks
  1. Easier to learn
  2. return functions
2. redux-sagas
  1. harder to learn 
  2. use ES6 generators - can yield at points in API return

This project uses redux-thunks.
Example of redux-thunk:
```js
  export function deleteAuthor(authorId) {
    return dispatch => {
      return AuthorApi.deleteAuthor(authorId).then(() =. {
        /* calling inline action */
        dispatch(deletedAuthor(authorId));
      }).catch(handleError);
    }
  }
```


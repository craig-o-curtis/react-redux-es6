// This component handles the App template layout on every page
import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';
import { connect } from 'react-redux';

class App extends React.Component {
  render () {
    return (
      <div className="container-fluid">
        <Header
          loading={this.props.loading} />
        {/* children passed in from React Router */}
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children : PropTypes.object.isRequired,
  loading : PropTypes.bool.isRequired
};

/** redux */
function mapStateToProps(state, ownProps) {
  return {
    loading : state.ajaxCallsInProgress > 0
  };
}

// export default App;
export default connect(mapStateToProps)(App);
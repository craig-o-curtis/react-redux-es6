// This component handles the App template layout on every page
import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';

class App extends React.Component {
  render () {
    return (
      <div className="container-fluid">
        <Header />
        {/* children passed in from React Router */}
        {this.props.children}
      </div>
    );
  }
}

// App.propTypes = {
//   children: PropTypes.object.isRequired
// };
App.propTypes = {
  children: PropTypes.object
};

export default App;
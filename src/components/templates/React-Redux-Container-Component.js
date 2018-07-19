import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class $NAME extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div></div>
    );
  }
}

$NAME.PropTypes = {

};

function mapStateToProps(state, ownProps) {
  return {
    state : state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions : bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)($NAME);
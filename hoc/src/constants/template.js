import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

import * as actions from '../actions';

class Template extends Component {
  constructor(props) {
    super(props);

    this.state ={

    }
  }

  render() {
    return (
      <div className="view-container">

      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.authenticated };
}

export default withRouter(connect(mapStateToProps, actions)(Template));

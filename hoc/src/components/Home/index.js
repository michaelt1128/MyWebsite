import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';
import * as actions from '../../actions';
import Header from '../Header';

import './style.scss';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	gotoPencilPusher(e) {
		e.preventDefault();
	}

	render() {
		return (
			<div className='home-view-container'>
				<Header>
				What would you like to do?
				</Header>
				<div className='pencil-pusher-link'>
					<Link to='pencilPusher'>Pencil Pusher</Link>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
  return { authenticated: state.authenticated };
}

export default withRouter(connect(mapStateToProps, actions)(Home));
	
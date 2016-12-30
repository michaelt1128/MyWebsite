import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';
import * as actions from '../../actions';
import GameButton from './gameButton';

import './style.scss';

class PencilPusher extends Component {
	constructor(props) {
		super(props);
		this.state = {
			interval: 200,
		}
	}

	loop() {
		this.props.setScore(this.props.pencilGame.score + 1)
		setTimeout(this.loop.bind(this), this.state.interval);
	}
	componentDidMount() {
    var startTime = (new Date()).getTime();
    this.loop();
	}
	
	render() {
		return (
			<div className='pencil-pusher-view-container'>
				<div className='score-display'>
					Score: {this.props.pencilGame.score}
				</div>
				<GameButton />
			</div>
		);
	}
}

function mapStateToProps(state) {
  return {
  	authenticated: state.authenticated,
  	pencilGame: state.pencilGame
  };
}

export default withRouter(connect(mapStateToProps, actions)(PencilPusher));
	
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';
import * as actions from '../../actions';
import GameButton from './gameButton';
import UpgradeButton from './upgradeButton';

import './style.scss';

class PencilPusher extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	loop() {
		this.props.setScore(this.props.pencilGame.score + this.props.pencilGame.scoreMultiplier);
		setTimeout(this.loop.bind(this), this.props.pencilGame.timeInterval);
	}
	
	componentDidMount() {
    var startTime = (new Date()).getTime();
    this.loop();
	}
	
	render() {
		return (
			<div className='pencil-pusher-view-container'>
				<div className='score-container'>
					<div className='score-display'>
					Score: {this.props.pencilGame.score}
						<div>
						Multiplier: {this.props.pencilGame.scoreMultiplier}
						</div>
					</div>
					<GameButton />
					<div className='fill'>
					</div>
				</div>
				<div className='upgrade-container'>
					<UpgradeButton upgradeType='Pencil Sharpener' upgradeCost='10' multiplier='3'/>
					<UpgradeButton upgradeType='Faster Shipment' upgradeCost='50' multiplier='10'/>
					<UpgradeButton upgradeType='Extra Worker' upgradeCost='200' multiplier='40'/>
				</div>
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
	
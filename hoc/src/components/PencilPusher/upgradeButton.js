import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';
import * as actions from '../../actions';

class UpgradeButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			disabled: false,
			count: 0,
			cost: this.props.upgradeCost,
		}

		this.onButtonClick = this.onButtonClick.bind(this);
		console.log(props.upgradeType);
	}

	onButtonClick() {
		if(this.props.pencilGame.score > this.state.cost) {
			this.props.setScore(this.props.pencilGame.score - this.state.cost);
			var upg = this.camelize(this.props.upgradeType);
			this.state.count += 1;
			this.props.setUpgradeCount({
				[upg]: this.state.count,
				upgradeType: upg,
			});
			this.props.setScoreMultiplier(this.props.pencilGame.scoreMultiplier + parseInt(this.props.multiplier));
		}
	}
	
	camelize(str) {
	  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
	    return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
	  }).replace(/\s+/g, '');
	}


	render() {
	  return (
	    <div className='upgrade-item-container'>
	    	<div className='upgrade-type'>
		    	{this.props.upgradeType}
	    	</div>
	    	<div className='upgrade-cost'>
	    		Cost: {this.props.upgradeCost}
	    	</div>
	    	<div className='upgrade-button-container'>
	    		{this.state.count}
		    	<button disabled={this.state.disabled} onClick={this.onButtonClick.bind(this)}>Click</button>
	    	</div>
	    </div>
	  );
	};
}



function mapStateToProps(state) {
  return {
  	authenticated: state.authenticated,
  	pencilGame: state.pencilGame
  };
}

export default withRouter(connect(mapStateToProps, actions)(UpgradeButton));
	
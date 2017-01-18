import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';
import * as actions from '../../actions';

class GameButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			disabled: false
		}

		this.onButtonClick = this.onButtonClick.bind(this);
	}

	onButtonClick() {
		this.setState({disabled: true});
		this.props.setScore(this.props.pencilGame.score + 1);
		setTimeout(function() { this.setState({disabled: false}) }.bind(this), 1000);
		console.log(this.props.pencilGame);
	}
	
	render() {
	  return (
	    <div className='game-button'>
	    	<button disabled={this.state.disabled} onClick={this.onButtonClick.bind(this)}>Click</button>
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

export default withRouter(connect(mapStateToProps, actions)(GameButton));
	
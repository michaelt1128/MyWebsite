import * as types from '../actions/types';

const initialState = {
	score: 0,
	scoreMultiplier: 1,
	timeInterval: 2000, //ms
	upgrades: {
		pencilSharpener: 0,
		fasterShipment: 0,
		extraWorker: 0,
	},
};

export default function pencilGame(state = initialState, {type, payload}) {
	switch(type) {
		case types.SCORE:
			return {
				...state,
				score: payload
			};
		case types.UPGRADE:
			return {
				...state,
				upgrades: {
					...state.upgrades,
					[payload.upgradeType]: payload[payload.upgradeType],
				},
			};
		case types.SCORE_MULTIPLIER:
			return {
				...state,
				scoreMultiplier: payload
			};
		case types.TIME_INTERVAL:
			return {
				...state,
				timeInterval: payload
			}
		default:
			return state;
	}
}
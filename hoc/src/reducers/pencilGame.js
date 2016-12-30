import * as types from '../actions/types';

const initialState = {
	score: 0,
};

export default function pencilGame(state = initialState, {type, payload}) {
	switch(type) {
		case types.SCORE:
			return {
				...state,
				score: payload
			};
		default:
			return state;
	}
}
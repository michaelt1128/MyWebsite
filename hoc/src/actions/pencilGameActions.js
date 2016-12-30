import * as types from './types';

export function setScore(payload) {
	return {
		type: types.SCORE,
		payload: payload
	}
}
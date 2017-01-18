import * as types from './types';

export function setScore(payload) {
	return {
		type: types.SCORE,
		payload: payload
	}
}

export function setItem(itemName, amount) {
	return {
		type: itemName,
		payload: payload
	}
}

export function setUpgradeCount(payload) {
	return {
		type: types.UPGRADE,
		payload: payload,
	}
}

export function setScoreMultiplier(payload) {
	return {
		type: types.SCORE_MULTIPLIER,
		payload: payload,
	}
}

export function setTimeInterval(payload) {
	return {
		type: types.TIME_INTERVAL,
		payload: payload,
	}
}
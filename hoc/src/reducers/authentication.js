import * as types from '../actions/types';

const initialState = {
  userID: null,
  info: {
    firstname: null,
  },
  email: null,
  loggedIn: false,
  username: null,
  error: false,
  token: false,
};

export default function auth(state = initialState, {type, payload}) {
  switch (type) {
    case types.LOGIN:
      return {
        ...state,
        userID: payload.user.id,
        username: payload.user.username,
        loggedIn: true,
        error: false,
        token: payload.token,
        email: payload.user.email,
        info: {
          firstname: payload.firstName,
        }
      };
    case types.LOGOUT:
      return {
        ...initialState
      };
    case types.SET_UNIQUE_INFO:
      return {
        ...state,
        email: payload.email,
        username: payload.username,
      };
    case types.SET_INFO:
      return {
        ...state,
        info:{
          firstname: payload.firstName,
        },
      };
     case types.SET_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
}
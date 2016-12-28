import * as types from './types';
import { browserHistory } from 'react-router';
import Cookies from 'cookies-js';

import {
  SERVER_URL,
  SERVER_PORT,
} from '../constants/network';

import fetch from 'isomorphic-fetch'

export function logIn(payload) {
  return {
    type: types.LOGIN,
    payload: payload,
  };
}

export function logOut() {
  Cookies.expire('userSession');
  Cookies.expire('fastlinkSession');
  return {
    type: types.LOGOUT
  };
}

export function setUniqueInfo(payload) {
  console.log('set unique info', payload)
  return {
    type: types.SET_UNIQUE_INFO,
    payload: payload,
  };
}

export function setInfo(payload) {
  return {
    type: types.SET_INFO,
    payload: payload,
  };
}

export function setError(payload) {
  return {
    type: types.SET_ERROR,
    payload: payload,
  };
}


//For creating user accounts
export function createUser(payload) {
  return (dispatch) => {
    fetch(`${SERVER_URL}${SERVER_PORT}/api/user`,
    {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('response create user', data)
      browserHistory.replace('/')
    })
    .catch((error) => {
      console.log('error',error);
    });
  };
}

export function checkUniqueUser (payload) {
  return (dispatch) => {
    fetch(`${SERVER_URL}${SERVER_PORT}/api/user/check`,
    {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload),
    })
    .then((response) => response.json())
    .then((data) => {
      if (!data.error){
        dispatch(setUniqueInfo(payload))
      }else{
        dispatch(setError(data.error))
      }
    })
    .catch((error) => {
      dispatch(setError(error))
    });
  };
}

export function signIn(payload) {
  console.log('signin', payload);
  return (dispatch) => {
    fetch(`${SERVER_URL}${SERVER_PORT}/login`,
    {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload),
    })
    .then((response) => response.json())
    .then((data) => {
      if (!data.error){
        dispatch(logIn(data));
      }else{
        console.log('sign in error', data.error)
        dispatch(setError(data.error))
      }
    })
    .catch((error) => {
      console.log('error catch',error);
      dispatch(setError('invalid credentials'))
    });
  };
}

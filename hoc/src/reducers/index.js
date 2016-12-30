import { combineReducers } from 'redux';
import authenticationReducer from './authentication';
import pencilGameReducer from './pencilGame';


const rootReducer = combineReducers({
  authenticated: authenticationReducer,
  pencilGame: pencilGameReducer,
});

export default rootReducer;

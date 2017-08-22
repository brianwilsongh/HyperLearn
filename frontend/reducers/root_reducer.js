import { combineReducers } from 'redux';
import { sessionReducer } from './session_reducer.js';


//session handles currentUser and errors (related to login) only
const rootReducer = combineReducers({
  session: sessionReducer,
});

export default rootReducer;

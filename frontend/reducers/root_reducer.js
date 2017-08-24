import { combineReducers } from 'redux';
import { sessionReducer } from './session_reducer.js';
import { subjectsReducer } from './subjects_reducer.js';
import { decksReducer } from './decks_reducer.js';


//session handles currentUser and errors (related to login) only
const rootReducer = combineReducers({
  session: sessionReducer,
  subjects: subjectsReducer,
  decks: decksReducer,
});

export default rootReducer;

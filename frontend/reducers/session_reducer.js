import * as SessionActions from '../actions/session_actions';

const defaultState = {
  currentUser: null,
  errors: [],
};

export const sessionReducer = (state=defaultState, action) => {
  Object.freeze(state);
  switch(action.type){
    case SessionActions.RECEIVE_CURRENT_USER:
      return {currentUser: action.data, errors: []};
    case SessionActions.RECEIVE_ERRORS:
      return {currentUser: null, errors: action.data};
    default:
      return state;
  }
};

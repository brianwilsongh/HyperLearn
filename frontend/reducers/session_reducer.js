import * as SActions from "../actions/session_actions";

const defaultState = {
  currentUser: null,
  errors: [],
};

export const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SActions.RECEIVE_CURRENT_USER:
      return { current_user: action.user, errors: []};
    case SActions.RECEIVE_ERRORS:
      return { current_user: null, errors: action.data.responseJSON };
    default:
      return state;
  }
};

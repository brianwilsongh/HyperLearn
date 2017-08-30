import * as SActions from "../actions/session_actions";
import { RECEIVE_FOLLOWED_SUBJECTS } from "../actions/subject_actions";
import _ from 'lodash';

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
    case RECEIVE_FOLLOWED_SUBJECTS:
    debugger;
      return _.merge({}, state, {current_user: {subjects: action.data}});
    default:
      return state;
  }
};

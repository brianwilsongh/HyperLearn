import * as SActions from '../actions/session_actions';
import _ from 'lodash';
import * as SubjectActions from '../actions/subject_actions';

const defaultState = {
  //should this be currentUser or current_user?
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

    case SubjectActions.RECEIVE_FOLLOWED_SUBJECT:
      var oldSubjectsArray = state.current_user.subjects;
      return _.merge({}, state,
        {current_user: {subjects: [action.data].concat(oldSubjectsArray)} });

    default:
      return state;
  }
};

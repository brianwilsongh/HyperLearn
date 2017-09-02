import * as SessionActions from '../actions/session_actions';
import _ from 'lodash';
import * as SubjectActions from '../actions/subject_actions';

const defaultState = {
  current_user: null,
  errors: [],
};

export const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {

    case SessionActions.RECEIVE_CURRENT_USER:
      return { current_user: action.user, errors: []};

    case SessionActions.RECEIVE_ERRORS:
      var newErrors = action.data.responseJSON;
      if (action.data.responseJSON === undefined){
        //catch weird non-errors that show up here, shouldn't need this tho
        newErrors = ["Error, please try again"];
      }
      return Object.assign({}, {current_user: null, errors: newErrors });

    case SubjectActions.RECEIVE_FOLLOWED_SUBJECT:
      var oldSubjectsArray = state.current_user.subjects;
      return _.merge({}, state,
        {current_user: {subjects: [action.data].concat(oldSubjectsArray)} });

    case SessionActions.PURGE_STATE:
      return Object.assign({}, defaultState);

    default:
      return state;
  }
};

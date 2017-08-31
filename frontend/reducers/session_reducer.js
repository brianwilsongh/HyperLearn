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

    case SubjectActions.RECEIVE_UNFOLLOWED_SUBJECT:
      var unfollowedSubject = action.data;
      var oldSubjectsArray = state.current_user.subjects;
      for (var idx = oldSubjectsArray.length - 1; idx >= 0; idx-- ){
        if (oldSubjectsArray[idx].id === unfollowedSubject.id){
          debugger;
          oldSubjectsArray.splice(idx, 1);
        }
      }
      debugger;

      return _.merge({}, state,
        {current_user: {subjects: oldSubjectsArray} });
    default:
      return state;
  }
};

import * as SActions from "../actions/subject_actions";
import * as SessionActions from "../actions/session_actions";
import _ from 'lodash';

const defaultState = {
  sorted: [],
  current: {},
  errors: [],
  categories: [],
  queried: []
};

export const subjectsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SActions.RECEIVE_SUBJECTS:
      // sorted store the idx array, alphabetical while current is obj
      //also receives all categories into an array
      return Object.assign({}, state,
        {sorted: action.data.alphabetical, categories: action.data.categories, queried: []});

    case SActions.RECEIVE_SUBJECT_ERRORS:
      return Object.assign({}, state, {errors: action.data.responseJSON});

    case SActions.RECEIVE_CURRENT_SUBJECT:
      return Object.assign({}, state, {current: action.data});

    case SActions.RECEIVE_SEARCHED_SUBJECTS:
      return Object.assign({}, state, {queried: action.data});

    case SessionActions.PURGE_STATE:
      return Object.assign({}, defaultState);

    default:
      return state;
  }
};

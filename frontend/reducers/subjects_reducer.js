import * as SActions from "../actions/subject_actions";

const defaultState = {
  sorted: [],
  current: {},
  errors: []
};

export const subjectsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SActions.RECEIVE_SUBJECTS:
      // sorted store the idx array, alphabetical while current is obj
      return Object.assign({}, state, {sorted: action.data.alphabetical});
    case SActions.RECEIVE_SUBJECT_ERRORS:
      return Object.assign({}, state, {errors: action.data.responseJSON});
    case SActions.RECEIVE_CURRENT_SUBJECT:
      return Object.assign({}, state, {current: action.data});
    default:
      return state;
  }
};

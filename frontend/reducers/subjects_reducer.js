import * as SActions from "../actions/subject_actions";


export const subjectsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case SActions.RECEIVE_SUBJECTS:
      // return Object.assign({}, state, action.data.subjects);
      return [].concat(state).concat(action.data.alphabetical);
    case SActions.RECEIVE_ERRORS:
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
};

import * as DActions from "../actions/deck_actions";

const defaultState = {
  list: [],
  current: {},
  errors: []
};

export const decksReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case DActions.RECEIVE_DECKS:
      return Object.assign({}, state, {sorted: action.data.sort_recent});
    case DActions.RECEIVE_ERRORS:
      return Object.assign({}, state, {errors: action.data});
    default:
      return state;
  }
};

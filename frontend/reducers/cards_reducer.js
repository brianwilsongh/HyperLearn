import * as CActions from "../actions/card_actions";

const defaultState = {
  current: {},
  store: {},
  errors: [],
};

export const cardsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case CActions.RECEIVE_CARDS:
      return Object.assign({}, state, {store: action.data.store});
    case CActions.RECEIVE_CARD_ERRORS:
      return Object.assign({}, state, {errors: action.data.responseJSON});
    case CActions.RECEIVE_CURRENT_CARD:
      return Object.assign({}, state, {current: action.data});
    default:
      return state;
  }
};

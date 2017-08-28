import * as DActions from "../actions/deck_actions";

const defaultState = {
  sorted: [],
  current: {},
  errors: [],
  pending_card_mods: {},
};

export const decksReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case DActions.RECEIVE_DECKS:
      return Object.assign({}, state, {sorted: action.data.sort_recent});
    case DActions.RECEIVE_DECK_ERRORS:
      return Object.assign({}, state, {errors: action.data.responseJSON});
    case DActions.RECEIVE_CURRENT_DECK:
      var newSorted = [];
      var newCurrentDeck = action.data;
      //make sure the newly received current is also update in the sorted storage
      state.sorted.forEach((deck) => {
        if (deck.id !== newCurrentDeck.id){
          newSorted.push(deck);
        } else {
          newSorted.push(action.data);
        }
      });
      return Object.assign({}, state, {sorted: newSorted}, {current: action.data});
    default:
      return state;
  }
};

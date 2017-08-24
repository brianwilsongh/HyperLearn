import * as APIUtils from "../utils/deck_api_utils";

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';


export const getDecks = (subject) => dispatch => {
  return APIUtils.getDecks(subject)
    .then(decks => dispatch(receiveDecks(decks)),
    error => dispatch(receiveErrors(error)));
};

export const createDeck = (deck) => dispatch => {
  return APIUtils.createDeck(deck)
    .then(decks => dispatch(receiveDecks(decks)),
    error => dispatch(receiveErrors(error)));
};


export const receiveDecks = (decks) => {
  return {
    type: RECEIVE_DECKS,
    data: decks,
  };
};


export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    data: errors
  };
};

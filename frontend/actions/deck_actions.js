import * as APIUtils from '../utils/deck_api_utils';
import { getCards } from './card_actions';

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const RECEIVE_CURRENT_DECK = 'RECEIVE_CURRENT_DECK';
export const RECEIVE_DECK_ERRORS = 'RECEIVE_DECK_ERRORS';


export const getDecks = (subject) => dispatch => {
  return APIUtils.getDecks(subject)
    .then(decks => dispatch(receiveDecks(decks)),
    error => dispatch(receiveDeckErrors(error)));
};

export const getCurrentDeck = (id) => dispatch => {
  return APIUtils.getCurrentDeck(id)
    .then(deck => dispatch(receiveCurrentDeck(deck)),
    errors => dispatch(receiveDeckErrors(errors)));
};

export const createDeck = (deck) => dispatch => {
  return APIUtils.createDeck(deck)
    .then(decks => dispatch(receiveDecks(decks)),
    errors => dispatch(receiveDeckErrors(errors)));
};

export const editDeck = (editedDeck) => dispatch => {
  return APIUtils.editDeck(editedDeck)
    .then(decks => dispatch(receiveDecks(decks)),
    errors => dispatch(receiveDeckErrors(errors)));
};

export const deleteDeck = (id) => dispatch => {
  return APIUtils.deleteDeck(id)
    .then(decks => dispatch(receiveDecks(decks)),
    errors => dispatch(receiveDeckErrors(errors)));
};


export const receiveDecks = (decks) => {
  return {
    type: RECEIVE_DECKS,
    data: decks,
  };
};


export const receiveDeckErrors = (errors) => {
  return {
    type: RECEIVE_DECK_ERRORS,
    data: errors
  };
};

export const receiveCurrentDeck = (deck) => {
  return {
    type: RECEIVE_CURRENT_DECK,
    data: deck,
  };
};

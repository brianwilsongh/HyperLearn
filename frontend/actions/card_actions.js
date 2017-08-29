import * as APIUtils from '../utils/card_api_utils';
import { receiveCurrentDeck } from './deck_actions';

export const RECEIVE_CARDS = 'RECEIVE_CARDS';
export const RECEIVE_CURRENT_CARD = 'RECEIVE_CURRENT_CARD';
export const DELETE_CARD = 'DELETE_CARD';

//should be individualized based on location
export const RECEIVE_CARD_ERRORS = 'RECEIVE_CARD_ERRORS';

//called for each form in edit page to build big patch req
export const ADD_CARD_EDIT = 'ENQUEUE_CARD_EDIT';

//called in subject panel after edit cards or study
export const WIPE_CARD_STATE = 'WIPE_CARD_STATE';


export const getCards = (deck) => dispatch => {
  return APIUtils.getCards(deck)
    .then(cards => dispatch(receiveCards(cards)),
    error => dispatch(receiveCardErrors(error)));
};

export const createCard = (card) => dispatch => {
  return APIUtils.createCard(card)
    .then(cards => dispatch(receiveCards(cards)),
    errors => dispatch(receiveCardErrors(errors)));
};

export const editCards = (editedCards) => dispatch => {
  return APIUtils.editCards(editedCards)
    .then(cards => dispatch(receiveCards(cards)),
    errors => dispatch(receiveCardErrors(errors)));
};

export const deleteCard = (card) => dispatch => {
  return APIUtils.deleteCard(card.id)
    .then((currentDeck) => {
      dispatch(wipeCardState());
      dispatch(receiveCurrentDeck(currentDeck));
    },
      errors => dispatch(receiveCardErrors(errors))
    );
};

export const sendRating = (state) => dispatch => {
  return APIUtils.sendRating(state)
  .then(cards => dispatch(receiveCards(cards)),
  errors => dispatch(receiveCardErrors(errors)));
};


export const receiveCards = (cards) => {
  return {
    type: RECEIVE_CARDS,
    data: cards,
  };
};

export const receiveCurrentCard = (card) => {
  return {
    type: RECEIVE_CURRENT_CARD,
    data: card,
  };
};

export const receiveCardErrors = (errors) => {
  return {
    type: RECEIVE_CARD_ERRORS,
    data: errors
  };
};

export const addCardEdit = (editedCard) => {
  return {
    type: ADD_CARD_EDIT,
    data: editedCard,
  };
};

export const wipeCardState = () => {
  return {
    type: WIPE_CARD_STATE,
  };
};

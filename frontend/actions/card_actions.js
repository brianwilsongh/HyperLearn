import * as APIUtils from "../utils/card_api_utils";

export const RECEIVE_CARDS = 'RECEIVE_CARDS';
export const RECEIVE_CURRENT_CARD = 'RECEIVE_CURRENT_CARD';
export const RECEIVE_CARD_ERRORS = 'RECEIVE_CARD_ERRORS';
export const ADD_CARD_EDIT = 'ENQUEUE_CARD_EDIT';


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

export const deleteCard = (id) => dispatch => {
  return APIUtils.deleteCard(id)
    .then(cards => dispatch(receiveCards(cards)),
    errors => dispatch(receiveCardErrors(errors)));
};


export const receiveCards = (cards) => {
  return {
    type: RECEIVE_CARDS,
    data: cards,
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

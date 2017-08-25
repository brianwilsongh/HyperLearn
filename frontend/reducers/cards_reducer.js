import * as CActions from '../actions/card_actions';
import _ from 'lodash';

const defaultState = {
  current: {},
  store: {},
  errors: [],
  editQueue: {},
};

export const cardsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case CActions.RECEIVE_CARDS:
      return Object.assign({}, state,
        {store: action.data.store, editQueue: {}});

    case CActions.RECEIVE_CARD_ERRORS:
      //this will have to receive an array which we'll nest/merge into store
      return Object.assign({}, state,
        {errors: action.data.responseJSON, editQueue: {}});

    case CActions.ADD_CARD_EDIT:
      //editQueue will hold all edits with id as key and obj as value
      return _.merge({}, state,
        { editQueue: { [action.data.id]: action.data} });

    case CActions.RECEIVE_CURRENT_CARD:
      return Object.assign({}, state,
        {current: action.data, editQueue: {}});

    default:
      return state;
  }
};

import * as CActions from '../actions/card_actions';
import _ from 'lodash';

const defaultState = {
  current: {},
  store: {},
  errors: [],
  editStore: {},
};

export const cardsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case CActions.RECEIVE_CARDS:
      if (!action.data.store){
        return Object.assign({}, state,
          {store: {}, editStore: {}});
      }
      return Object.assign({}, state,
        {store: action.data.store, editStore: {}});

    case CActions.RECEIVE_CARD_ERRORS:
      //this will have to receive an array which we'll nest/merge into store
      return Object.assign({}, state,
        {errors: action.data.responseJSON, editStore: {}});

    case CActions.ADD_CARD_EDIT:
      //editStore will hold all edits with id as key and obj as value
      return _.merge({}, state,
        { editStore: { [action.data.id]: action.data} });

    case CActions.WIPE_CARD_STATE:
      //editStore will hold all edits with id as key and obj as value
      return _.merge({}, defaultState);

    case CActions.RECEIVE_CURRENT_CARD:
      return Object.assign({}, state,
        {current: action.data, editStore: {}});

    default:
      return state;
  }
};

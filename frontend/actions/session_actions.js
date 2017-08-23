import * as APIUtils from "../utils/session_api_utils";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';


export const login = (user) => dispatch => {
  return APIUtils.login(user)
    .then(theUser => dispatch(receiveCurrentUser(theUser)))
    .fail(error => dispatch(receiveErrors(error)));
};

export const loginDemo = () => dispatch => {
  return APIUtils.loginDemo()
    .then(theUser => dispatch(receiveCurrentUser(theUser)),
  error => dispatch(receiveErrors(error)));
};

export const signup = (user) => dispatch => {
  return APIUtils.signup(user)
    .then(theUser => dispatch(receiveCurrentUser(theUser)),
  error => dispatch(receiveErrors(error)));
};

export const logout = () => dispatch => {
  return APIUtils.logout()
    .then(emptyObj => dispatch(receiveCurrentUser(null)),
  error => dispatch(receiveErrors(error)));
};

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    data: errors,
  };
};

export const clearErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    data: {
      responseJSON: [],
    }
  };
};

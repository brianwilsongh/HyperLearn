import * as SessionApi from '../utils/session_api_utils';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const DELETE_CURRENT_USER = "DELETE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const signup = (user) => (dispatch) => {
  return SessionApi.signup(user)
  .then((currentUser) => dispatch(receieveCurrentUser(currentUser)),
(errors) => dispatch(receieveErrors(errors)));
};

export const login = (user) => (dispatch) => {
  return SessionApi.login(user)
  .then((currentUser) => dispatch(receieveCurrentUser(currentUser)),
(errors) => dispatch(receieveErrors(errors)));
};

export const logout = () => (dispatch) => {
  return SessionApi.logout()
  .then(() => dispatch(deleteCurrentUser()),
(errors) => dispatch(receieveErrors(errors)));
};

export const receieveCurrentUser = (currentUser) => {
  return ({
    type: RECEIVE_CURRENT_USER,
    data: currentUser
  });
};

export const deleteCurrentUser = () => {
  return ({
    type: RECEIVE_CURRENT_USER
  });
};

export const receieveErrors = (errors) => {
  return ({
    type: RECEIVE_ERRORS,
    data: errors
  });
};

import * as APIUtils from "../utils/subject_api_utils";

export const RECEIVE_SUBJECTS = 'RECEIVE_SUBJECTS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';


export const getSubjects = () => dispatch => {
  return APIUtils.getSubjects()
    .then(subjects => dispatch(receiveSubjects(subjects)),
    error => dispatch(receiveErrors(error)));
};

export const receiveSubjects = (subjects) => {
  return {
    type: RECEIVE_SUBJECTS,
    data: subjects,
  };
};


export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    data: errors
  };
};

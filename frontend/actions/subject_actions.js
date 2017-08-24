import * as APIUtils from "../utils/subject_api_utils";

export const RECEIVE_SUBJECTS = 'RECEIVE_SUBJECTS';
export const RECEIVE_CURRENT_SUBJECT = 'RECEIVE_CURRENT_SUBJECT';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';


export const getSubjects = () => dispatch => {
  return APIUtils.getSubjects()
    .then(subjects => dispatch(receiveSubjects(subjects)),
    error => dispatch(receiveErrors(error)));
};

export const createSubject = (newSubject) => dispatch => {
  return APIUtils.createSubject(newSubject)
    .then(subjects => dispatch(receiveSubjects(subjects)),
    error => dispatch(receiveErrors(error)));
};

export const editSubject = (editedSubject) => dispatch => {
  return APIUtils.editSubject(editedSubject)
    .then(subjects => dispatch(receiveSubjects(subjects)),
    error => dispatch(receiveErrors(error)));
};

export const deleteSubject = (id) => dispatch => {
  return APIUtils.deleteSubject(id)
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

export const receiveCurrentSubject = (subject) => {
  return {
    type: RECEIVE_CURRENT_SUBJECT,
    data: subject,
  };
};

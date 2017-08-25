import * as APIUtils from "../utils/subject_api_utils";

export const RECEIVE_SUBJECTS = 'RECEIVE_SUBJECTS';
export const RECEIVE_CURRENT_SUBJECT = 'RECEIVE_CURRENT_SUBJECT';
export const RECEIVE_SUBJECT_ERRORS = 'RECEIVE_SUBJECT_ERRORS';


export const getSubjects = () => dispatch => {
  return APIUtils.getSubjects()
    .then(subjects => dispatch(receiveSubjects(subjects)),
    error => dispatch(receiveSubjectErrors(error)));
};

export const createSubject = (newSubject) => dispatch => {
  return APIUtils.createSubject(newSubject)
    .then(subjects => dispatch(receiveSubjects(subjects)),
    error => dispatch(receiveSubjectErrors(error)));
};

export const editSubject = (editedSubject) => dispatch => {
  return APIUtils.editSubject(editedSubject)
    .then(subjects => dispatch(receiveSubjects(subjects)),
    error => dispatch(receiveSubjectErrors(error)));
};

export const deleteSubject = (id) => dispatch => {
  return APIUtils.deleteSubject(id)
    .then(subjects => dispatch(receiveSubjects(subjects)),
    error => dispatch(receiveSubjectErrors(error)));
};

export const receiveSubjects = (subjects) => {
  return {
    type: RECEIVE_SUBJECTS,
    data: subjects,
  };
};


export const receiveSubjectErrors = (errors) => {
  return {
    type: RECEIVE_SUBJECT_ERRORS,
    data: errors
  };
};

export const receiveCurrentSubject = (subject) => {
  return {
    type: RECEIVE_CURRENT_SUBJECT,
    data: subject,
  };
};

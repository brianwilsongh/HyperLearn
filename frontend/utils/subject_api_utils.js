export const getSubjects = (user) => {
  return $.ajax({
    method: "GET",
    url: "/api/subjects"
  });
};

export const createSubject = (newSubject) => {
  return $.ajax({
    method: "POST",
    url: `/api/subjects/`,
    data: {subject: newSubject}
  });
};

export const editSubject = (editedSubject) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/subjects/${editedSubject.id}`,
    data: {subject: editedSubject}
  });
};

export const deleteSubject = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/subjects/${id}`,
  });
};

export const sendFollow = (subjectId) => {
  return $.ajax({
    method: "POST",
    url: `/api/follows/`,
    data: {subjectId}
  });
};

export const getSubjects = (user) => {
  return $.ajax({
    method: "GET",
    url: "/api/subjects"
  });
};



export const signup = (user) => {
  return $.ajax({
    method: "POST",
    url: "/api/users",
    data: user,
    dataType: "json",
    contentType: false,
    processData: false,
  });
};

export const login = (user) => {
  return $.ajax({
    method: "POST",
    url: "/api/sessions",
    data: { user }
  });
};

export const loginDemo = (user) => {
  return $.ajax({
    method: "POST",
    url: "/api/sessions",
    data: {
      user: {
        username: "guest",
        password: "password",
      }
    }
  });
};

export const logout = () => {
  return $.ajax({
    method: "DELETE",
    url: "/api/sessions",
  });
};

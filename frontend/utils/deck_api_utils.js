export const getDecks = (subject) => {
  return $.ajax({
    method: "GET",
    url: "/api/decks",
    data: subject,
  });
};

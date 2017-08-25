export const getDecks = (subject) => {
  return $.ajax({
    method: "GET",
    url: "/api/decks",
    data: subject,
  });
};

export const getCurrentDeck = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/decks/${id}`,
  });
};

export const createDeck = (newDeck) => {
  return $.ajax({
    method: "POST",
    url: `/api/decks/`,
    data: {deck: newDeck}
  });
};

export const editDeck = (editedDeck) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/decks/${editedDeck.id}`,
    data: {deck: editedDeck}
  });
};

export const deleteDeck = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/decks/${id}`,
  });
};

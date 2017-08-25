export const getCards = (deck) => {
  return $.ajax({
    method: "GET",
    url: "/api/cards",
    data: deck,
  });
};

export const createCard = (newCard) => {
  return $.ajax({
    method: "POST",
    url: `/api/decks/`,
    data: {card: newCard}
  });
};

export const editCards = (editedCardArray) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/decks/1337`,
    data: {card: editedCardArray}
  });
};

export const deleteDeck = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/decks/${id}`,
  });
};

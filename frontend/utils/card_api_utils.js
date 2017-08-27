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
    url: `/api/cards/`,
    data: {card: newCard}
  });
};

export const editCards = (editedCards) => {
  var firstId = Object.keys(editedCards)[0];
  return $.ajax({
    method: "PATCH",
    url: `/api/cards/${firstId}`,
    data: {card: editedCards}
  });
};

export const deleteCard = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/cards/${id}`,
  });
};

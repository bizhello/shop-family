import $api from "../http";

export default class CardService {
  static async getCards() {
    return $api.get("/cards");
  }

  // static async getUserById(cardId) {
  //   return $api.get(`/cards/:${cardId}`);
  // }

  static async deleteCardById(id) {
    return $api.delete(`/cards/${id}`);
  }

  static async createCard(card) {
    return $api.post("/cards", card);
  }

  static async changeCardById(card) {
    return $api.put(`/cards/${card.id}`, card);
  }

  static async increment(id) {
    return $api.patch(`/cards/${id}/increment`);
  }

  static async decrement(id) {
    return $api.patch(`/cards/${id}/decrement`);
  }
}

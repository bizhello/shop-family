import $api from "../http";

export default class CardService {
  static async getCards() {
    return $api.get("/cards");
  }

  static async deleteCardById(id) {
    return $api.delete(`/cards/${id}`);
  }

  static async createCard(card) {
    return $api.post("/cards", card, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  static async changeCardById(id, data) {
    return $api.put(`/cards/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  static async increment(id) {
    return $api.get(`/cards/${id}/increment`);
  }

  static async decrement(id) {
    return $api.get(`/cards/${id}/decrement`);
  }
}

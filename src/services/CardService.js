import $api from "../http";

export default class CardService {
  static async getCards() {
    return $api.get("/cards");
  }

  static async getUserById(cardId) {
    return $api.get(`/cards/:${cardId}`);
  }

  static async deleteUserById(userId) {
    return $api.delete(`/cards/:${userId}`);
  }

  static async createCard(title, dateFrom, dateTo, count, url) {
    return $api.post("/cards", { title, dateFrom, dateTo, count, url });
  }
}

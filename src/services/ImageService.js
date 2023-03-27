import $api from "../http";
import axios from "axios";

export default class ImageService {
  static async getImageById(cardId) {
    return $api.get(`/static/images/${cardId}/image.webp`);
  }

  static async deleteImageById(cardId) {
    return $api.delete(`/image/${cardId}`);
  }

  static async createImageById(cardId, body) {
    return axios.post(
      `${process.env.REACT_APP_API_URL}/images/${cardId}`,
      body,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          redirect: 'follow'
        },
      }
    );
  }
}

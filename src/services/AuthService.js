import $api from "../http";

export default class AuthService {
  static async login({ email, password, remember }) {
    return $api.post(
      "/login",
      { email, password, remember },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  static async register({ email, password, firstName, lastName }) {
    return $api.post(
      "/registry",
      { email, password, firstName, lastName },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  static async logout() {
    return $api.get("/logout");
  }

  static async refreshToken(config) {
    return $api.get("/refresh", config);
  }
}

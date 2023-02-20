import $api from "../http";

export default class AuthService {
  static async login({ email, password, remember }) {
    return $api.post("/signin", { email, password, remember });
  }

  static async register({ email, password, firstName, lastName }) {
    return $api.post("/signup", { email, password, firstName, lastName });
  }

  static async logout() {
    return $api.get("/logout");
  }

  static async refreshToken(config) {
    return $api.get("/refresh", config);
  }
}

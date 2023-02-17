import userService from "../services/UserService";
import authService from "../services/AuthService";

const tokenCheck = async (id) => {
  try {
    await userService.getUserById(id);
  } catch (e) {
    const refresh = await authService.refreshToken();
    if (refresh) {
      localStorage.setItem("accessToken", refresh.data.accessToken);
    }
  }
};

export default tokenCheck;

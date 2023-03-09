import axios from "axios";
import AuthService from "../services/AuthService";

const $api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
  baseURL: process.env.API_URL || "http://localhost:8000",
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
  )}`;
  return config;
});

$api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalConfig = error.config;
    if (error.response.status === 403 && !originalConfig._retry) {
      originalConfig._retry = true;
      const rs = await AuthService.refreshToken(originalConfig);
      localStorage.setItem("accessToken", rs.data.accessToken);
      localStorage.setItem("userId", rs.data.userId);

      return $api(originalConfig);
    }

    return Promise.reject(error);
  }
);

export default $api;

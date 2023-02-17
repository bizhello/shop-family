import axios from "axios";

const $api = axios.create({
  withCredentials: true,
  baseURL: process.env.API_URL || "http://localhost:4000",
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
  )}`;
  return config;
});

export default $api;

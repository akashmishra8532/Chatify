import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chatify-123m.onrender.com/api" : "/api",
  withCredentials: true,
});

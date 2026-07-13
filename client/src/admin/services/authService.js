import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const login = (data) => API.post("/auth/login", data);

export const getProfile = (token) =>
  API.get("/auth/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
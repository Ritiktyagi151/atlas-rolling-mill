import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/navbar`,
});

const getToken = () => localStorage.getItem("token");

export const getNavbar = async () => {
  const { data } = await API.get("/");
  return data.data;
};

export const updateNavbar = async (navbarData) => {
  const { data } = await API.put("/", navbarData, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return data;
};
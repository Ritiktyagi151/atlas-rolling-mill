import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/categories`,
});

const getToken = () => localStorage.getItem("token");

export const getCategories = async () => {
  const { data } = await API.get("/");
  return data;
};

export const getCategory = async (id) => {
  const { data } = await API.get(`/${id}`);
  return data;
};

export const createCategory = async (category) => {
  const { data } = await API.post("/", category, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return data;
};

export const updateCategory = async (id, category) => {
  const { data } = await API.put(`/${id}`, category, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return data;
};

export const deleteCategory = async (id) => {
  const { data } = await API.delete(`/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return data;
};
import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/events`,
});

const getToken = () => localStorage.getItem("token");

export const getEvents = async () => {
  const { data } = await API.get("/");
  return data;
};

export const createEvent = async (formData) => {
  const { data } = await API.post("/", formData, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

export const updateEvent = async (id, formData) => {
  const { data } = await API.put(`/${id}`, formData, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

export const deleteEvent = async (id) => {
  const { data } = await API.delete(`/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return data;
};
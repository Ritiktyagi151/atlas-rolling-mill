import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/blogs`,
});

const getToken = () => localStorage.getItem("token");

// GET ALL
export const getBlogs = async () => {
  const { data } = await API.get("/");
  return data;
};

// GET SINGLE
export const getBlog = async (slug) => {
  const { data } = await API.get(`/${slug}`);
  return data;
};

// CREATE
export const createBlog = async (formData) => {
  const { data } = await API.post("/", formData, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

// UPDATE
export const updateBlog = async (id, formData) => {
  const { data } = await API.put(`/${id}`, formData, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

// DELETE
export const deleteBlog = async (id) => {
  const { data } = await API.delete(`/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return data;
};
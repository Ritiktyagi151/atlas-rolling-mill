import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/contact`,
});

const getToken = () => localStorage.getItem("token");

// CONTACT

export const getContact = async () => {
  const { data } = await API.get("/");
  return data;
};

export const updateContact = async (contactData) => {
  const { data } = await API.put("/", contactData, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return data;
};

// ENQUIRIES

export const getEnquiries = async () => {
  const { data } = await API.get("/enquiries", {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return data;
};

export const getEnquiry = async (id) => {
  const { data } = await API.get(`/enquiries/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return data;
};

export const deleteEnquiry = async (id) => {
  const { data } = await API.delete(`/enquiries/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return data;
};
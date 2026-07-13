import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/footer`,
});

const getToken = () => localStorage.getItem("token");

export const getFooter = async () => {
  const { data } = await API.get("/");
  return data;
};

export const updateFooter = async (footerData) => {
  const { data } = await API.put("/", footerData, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return data;
};
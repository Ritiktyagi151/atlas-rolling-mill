import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/api/products`;

const getAuthConfig = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

const productService = {
  getProducts: async () => {
    const res = await axios.get(API_URL);
    return res.data;
  },

  getProduct: async (slug) => {
    const res = await axios.get(`${API_URL}/${slug}`);
    return res.data;
  },

  createProduct: async (data) => {
    const res = await axios.post(API_URL, data, getAuthConfig());
    return res.data;
  },

  updateProduct: async (id, data) => {
    const res = await axios.put(
      `${API_URL}/${id}`,
      data,
      getAuthConfig()
    );
    return res.data;
  },

  deleteProduct: async (id) => {
    const res = await axios.delete(
      `${API_URL}/${id}`,
      getAuthConfig()
    );
    return res.data;
  },
};

export default productService;
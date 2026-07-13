import { useEffect, useState } from "react";
import NavbarForm from "../components/navbar/NavbarForm";
import {
  getNavbar,
  updateNavbar,
} from "../services/navbarService";
import productService from "../services/productService";
import { getCategories } from "../services/categoryService";

const Navbar = () => {
  const [navbar, setNavbar] = useState(null);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNavbar = async () => {
    try {
      const navbarData = await getNavbar();
      setNavbar(navbarData);
    } catch (error) {
      console.error(error);
      alert("Failed to load navbar.");
    } finally {
      setLoading(false);
    }
  };

  const fetchOptions = async () => {
    try {
      const [categoriesRes, productsRes] = await Promise.all([
        getCategories(),
        productService.getProducts(),
      ]);

      setCategories(categoriesRes.data);
      setProducts(productsRes.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load categories or products.");
    }
  };

  useEffect(() => {
    fetchNavbar();
    fetchOptions();
  }, []);

  const handleSave = async (formData) => {
    try {
      await updateNavbar(formData);

      alert("Navbar updated successfully.");

      fetchNavbar();
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Something went wrong.");
    }
  };

  if (loading) {
    return (
      <div className="container-fluid py-5 text-center">
        <h4>Loading...</h4>
      </div>
    );
  }

  return (
    <div className="container-fluid">

      <div className="mb-4">
        <h2 className="fw-bold">
          Navbar Management
        </h2>

        <p className="text-muted">
          Manage announcement bar and products dropdown menu.
        </p>
      </div>

      <NavbarForm
        navbar={navbar}
        categories={categories}
        products={products}
        onSave={handleSave}
      />

    </div>
  );
};

export default Navbar;
import { useEffect, useState } from "react";
import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../services/categoryService";

import CategoryForm from "../components/category/CategoryForm";
import CategoryTable from "../components/category/CategoryTable";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [editingCategory, setEditingCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCategories = async () => {
    try {
      setLoading(true);

      const res = await getCategories();

      setCategories(res.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load categories.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSubmit = async (formData) => {
    try {
      if (editingCategory) {
        await updateCategory(editingCategory._id, formData);

        alert("Category updated successfully.");
      } else {
        await createCategory(formData);

        alert("Category created successfully.");
      }

      setEditingCategory(null);

      fetchCategories();
    } catch (error) {
      console.error(error);

      alert(error.response?.data?.message || "Something went wrong.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this category?")) return;

    try {
      await deleteCategory(id);

      alert("Category deleted successfully.");

      fetchCategories();
    } catch (error) {
      console.error(error);

      alert("Failed to delete category.");
    }
  };

  if (loading) {
    return (
      <div className="text-center py-5">
        <h5>Loading...</h5>
      </div>
    );
  }

  return (
    <div className="container-fluid">

      <div className="mb-4">
        <h2 className="fw-bold">
          Category Management
        </h2>

        <p className="text-muted">
          Create, update and delete product categories.
        </p>
      </div>

      <CategoryForm
        editingCategory={editingCategory}
        onSubmit={handleSubmit}
        onCancel={() => setEditingCategory(null)}
      />

      <CategoryTable
        categories={categories}
        onEdit={setEditingCategory}
        onDelete={handleDelete}
      />

    </div>
  );
};

export default Categories;
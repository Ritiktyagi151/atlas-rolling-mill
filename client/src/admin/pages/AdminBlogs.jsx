import { useEffect, useState } from "react";
import BlogForm from "../components/blog/BlogForm";
import BlogTable from "../components/blog/BlogTable";

import {
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
} from "../services/blogService";

import { getCategories } from "../services/categoryService";

const AdminBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);

  const [editingBlog, setEditingBlog] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const fetchBlogs = async () => {
    try {
      const res = await getBlogs();
      setBlogs(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await getCategories();
      setCategories(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
    fetchCategories();
  }, []);

  const handleCreate = async (formData) => {
    try {
      await createBlog(formData);

      setShowForm(false);

      fetchBlogs();
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message);
    }
  };

  const handleUpdate = async (formData) => {
    try {
      await updateBlog(editingBlog._id, formData);

      setEditingBlog(null);
      setShowForm(false);

      fetchBlogs();
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this blog?"
    );

    if (!confirmDelete) return;

    try {
      await deleteBlog(id);

      fetchBlogs();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container-fluid">

      <div className="d-flex justify-content-between align-items-center mb-4">

        <h2 className="fw-bold mb-0">
          Blog Management
        </h2>

        {!showForm && (
          <button
            className="btn btn-primary"
            onClick={() => {
              setEditingBlog(null);
              setShowForm(true);
            }}
          >
            Add Blog
          </button>
        )}

      </div>

      {showForm ? (
        <BlogForm
          blog={editingBlog}
          categories={categories}
          onSave={
            editingBlog
              ? handleUpdate
              : handleCreate
          }
          onCancel={() => {
            setEditingBlog(null);
            setShowForm(false);
          }}
        />
      ) : (
        <BlogTable
          blogs={blogs}
          onEdit={(blog) => {
            setEditingBlog(blog);
            setShowForm(true);
          }}
          onDelete={handleDelete}
        />
      )}

    </div>
  );
};

export default AdminBlogs;
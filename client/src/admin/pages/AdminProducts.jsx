import { useEffect, useState } from "react";
import productService from "../services/productService";
import { getCategories } from "../services/categoryService";
import RichTextEditor from "../components/Editor/TiptapEditor";

const initialState = {
  name: "",
  tagline: "",
  hasCategory: false,
  category: "",
  description: "",
};

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState(initialState);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    const res = await productService.getProducts();
    setProducts(res.data);
  };

  const fetchCategories = async () => {
    const res = await getCategories();
    setCategories(res.data);
  };

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      category: formData.hasCategory ? formData.category : null,
    };

    if (editingId) {
      await productService.updateProduct(editingId, payload);
    } else {
      await productService.createProduct(payload);
    }

    setEditingId(null);

    setFormData({
      name: "",
      tagline: "",
      hasCategory: false,
      category: "",
      description: "",
    });

    fetchProducts();
  };

  const handleEdit = (product) => {
    setEditingId(product._id);

    setFormData({
      name: product.name || "",
      tagline: product.tagline || "",
      hasCategory: product.hasCategory || false,
      category: product.category?._id || "",
      description: product.description || "",
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete Product?")) return;

    await productService.deleteProduct(id);
    fetchProducts();
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData(initialState);
  };

  return (
    <div className="container-fluid">
      <div className="card shadow-sm mb-4">
        <div className="card-header">
          <h4 className="mb-0">{editingId ? "Edit Product" : "Add Product"}</h4>
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {/* Product Name */}

            <div className="mb-3">
              <label className="form-label">Product Name</label>

              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Tagline */}

            <div className="mb-3">
              <label className="form-label">Tagline</label>

              <input
                type="text"
                className="form-control"
                name="tagline"
                placeholder="Enter product tagline"
                value={formData.tagline}
                onChange={handleChange}
              />
            </div>

            {/* Category Checkbox */}

            <div className="form-check mb-3">
              <input
                id="hasCategory"
                name="hasCategory"
                type="checkbox"
                className="form-check-input"
                checked={formData.hasCategory}
                onChange={handleChange}
              />

              <label htmlFor="hasCategory" className="form-check-label">
                Belongs to Category
              </label>
            </div>

            {/* Category Dropdown */}

            {formData.hasCategory && (
              <div className="mb-3">
                <label className="form-label">Category</label>

                <select
                  className="form-select"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Category</option>

                  {categories.map((cat) => (
                    <option key={cat._id} value={cat._id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Description */}

            <div className="mb-4">
              <label className="form-label">Description</label>

              <RichTextEditor
                key={editingId || "new-product"}
                value={formData.description}
                onChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    description: value,
                  }))
                }
              />
            </div>

            <div className="d-flex">
              <button type="submit" className="btn btn-primary">
                {editingId ? "Update Product" : "Add Product"}
              </button>

              {editingId && (
                <button
                  type="button"
                  className="btn btn-secondary ms-2"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Products Table */}

      <div className="card shadow-sm">
        <div className="card-header">
          <h4 className="mb-0">Products</h4>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered align-middle mb-0">
            <thead>
              <tr>
                <th>Name</th>
                <th>Tagline</th>
                <th>Category</th>
                <th width="180">Actions</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product.name}</td>

                  <td>{product.tagline || "-"}</td>

                  <td>
                    {product.hasCategory ? product.category?.name || "-" : "-"}
                  </td>

                  <td>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => handleEdit(product)}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(product._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;

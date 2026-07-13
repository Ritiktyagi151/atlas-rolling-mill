import { useEffect, useState } from "react";
import TiptapEditor from "../Editor/TiptapEditor";

const BlogForm = ({
  blog,
  categories,
  onSave,
  onCancel,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    date: "",
    author: "",
    category: "",
    image: null,
  });

  useEffect(() => {
    if (blog) {
      setFormData({
        title: blog.title || "",
        excerpt: blog.excerpt || "",
        content: blog.content || "",
        date: blog.date || "",
        author: blog.author || "",
        category: blog.category || "",
        image: null,
      });
    }
  }, [blog]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("title", formData.title);
    data.append("excerpt", formData.excerpt);
    data.append("content", formData.content);
    data.append("date", formData.date);
    data.append("author", formData.author);
    data.append("category", formData.category);

    if (formData.image) {
      data.append("image", formData.image);
    }

    const formattedDate = new Date(formData.date)
  .toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

data.set("date", formattedDate);

onSave(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="card shadow-sm border-0">

        <div className="card-header bg-white">
          <h5 className="mb-0">
            {blog ? "Edit Blog" : "Add Blog"}
          </h5>
        </div>

        <div className="card-body">

          <div className="mb-3">
            <label className="form-label">
              Title
            </label>

            <input
              type="text"
              name="title"
              className="form-control"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Category
            </label>

            <select
              className="form-select"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">
                Select Category
              </option>

              {categories.map((cat) => (
                <option
                  key={cat._id}
                  value={cat.name}
                >
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">
              Author
            </label>

            <input
              type="text"
              name="author"
              className="form-control"
              value={formData.author}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Publish Date
            </label>

            <input
              type="date"
              name="date"
              className="form-control"
              value={formData.date}
              onChange={handleChange}
              placeholder="July 10, 2026"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Short Description
            </label>

            <textarea
              rows="3"
              name="excerpt"
              className="form-control"
              value={formData.excerpt}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Full Description
            </label>

            <TiptapEditor
  value={formData.content}
  onChange={(content) =>
    setFormData((prev) => ({
      ...prev,
      content,
    }))
  }
/>
          </div>

          <div className="mb-4">
            <label className="form-label">
              Featured Image
            </label>

            <input
              type="file"
              name="image"
              className="form-control"
              accept="image/*"
              onChange={handleChange}
            />
          </div>

        </div>

        <div className="card-footer bg-white d-flex justify-content-end gap-2">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="btn btn-primary"
          >
            Save Blog
          </button>
        </div>

      </div>
    </form>
  );
};

export default BlogForm;
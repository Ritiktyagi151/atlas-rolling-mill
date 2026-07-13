import { useEffect, useState } from "react";

const CategoryForm = ({
  onSubmit,
  editingCategory,
  onCancel,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    order: "",
  });

  useEffect(() => {
    if (editingCategory) {
      setFormData({
        name: editingCategory.name,
        order: editingCategory.order,
      });
    } else {
      setFormData({
        name: "",
        order: "",
      });
    }
  }, [editingCategory]);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      ...formData,
      order: Number(formData.order),
    });

    if (!editingCategory) {
      setFormData({
        name: "",
        order: "",
      });
    }
  };

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-header">
        <h5 className="mb-0">
          {editingCategory ? "Edit Category" : "Add Category"}
        </h5>
      </div>

      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="row">

            <div className="col-md-8 mb-3">
              <label className="form-label">
                Category Name
              </label>

              <input
                type="text"
                className="form-control"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
                required
              />
            </div>

            <div className="col-md-4 mb-3">
              <label className="form-label">
                Display Order
              </label>

              <input
                type="number"
                className="form-control"
                value={formData.order}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    order: e.target.value,
                  })
                }
                required
              />
            </div>

          </div>

          <div className="d-flex gap-2">
            <button
              type="submit"
              className="btn btn-primary"
            >
              {editingCategory
                ? "Update Category"
                : "Add Category"}
            </button>

            {editingCategory && (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onCancel}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CategoryForm;
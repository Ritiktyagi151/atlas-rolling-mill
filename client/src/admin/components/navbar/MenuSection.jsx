import React from "react";

const MenuSection = ({
  menuItems,
  setMenuItems,
  categories,
  products,
}) => {
  const categoryMenuItems = menuItems.filter(
    (item) => item.type === "category"
  );

  const categoryOptions = categories || [];
  const productOptions = products || [];

  const handleChange = (index, field, value) => {
    const updated = [...menuItems];
    updated[index][field] = value;

    if (field === "type") {
      if (value === "category") {
        updated[index].parentCategory = null;
        updated[index].productId = null;
      } else {
        updated[index].categoryId = null;
      }
    }

    setMenuItems(updated);
  };

  const handleCategorySelect = (index, categoryId) => {
    const updated = [...menuItems];
    const category = categoryOptions.find(
      (cat) => cat._id === categoryId
    );

    if (!category) return;

    updated[index].categoryId = category._id;
    updated[index].name = category.name;
    updated[index].parentCategory = null;
    updated[index].type = "category";

    setMenuItems(updated);
  };

  const handleProductSelect = (index, productId) => {
    const updated = [...menuItems];
    const product = productOptions.find(
      (prod) => prod._id === productId
    );

    if (!product) return;

    updated[index].productId = product._id;
    updated[index].name = product.name;
    updated[index].type = "product";
    updated[index].parentCategory =
      product.hasCategory && product.category
        ? product.category.name
        : null;
    updated[index].categoryId =
      product.hasCategory && product.category
        ? product.category._id
        : null;

    setMenuItems(updated);
  };

  const addItem = () => {
    setMenuItems([
      ...menuItems,
      {
        name: "",
        type: "product",
        parentCategory: null,
        order: menuItems.length + 1,
      },
    ]);
  };

  const removeItem = (index) => {
    const updated = menuItems
      .filter((_, i) => i !== index)
      .map((item, i) => ({
        ...item,
        order: i + 1,
      }));

    setMenuItems(updated);
  };

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="mb-0">
          Products Menu
        </h5>

        <button
          type="button"
          className="btn btn-success btn-sm"
          onClick={addItem}
        >
          + Add Item
        </button>
      </div>

      <div className="card-body">

        {menuItems.map((item, index) => (
          <div
            className="row align-items-end mb-3"
            key={index}
          >
            <div className="col-md-4">
              <label className="form-label">
                Name
              </label>

              {item.type === "product" ? (
                <select
                  className="form-select"
                  value={item.productId || ""}
                  onChange={(e) =>
                    handleProductSelect(index, e.target.value)
                  }
                >
                  <option value="">Select Product</option>
                  {productOptions.map((product) => (
                    <option key={product._id} value={product._id}>
                      {product.name}
                    </option>
                  ))}
                </select>
              ) : (
                <select
                  className="form-select"
                  value={item.categoryId || ""}
                  onChange={(e) =>
                    handleCategorySelect(index, e.target.value)
                  }
                >
                  <option value="">Select Category</option>
                  {categoryOptions.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              )}
            </div>

            <div className="col-md-2">
              <label className="form-label">
                Type
              </label>

              <select
                className="form-select"
                value={item.type}
                onChange={(e) =>
                  handleChange(
                    index,
                    "type",
                    e.target.value
                  )
                }
              >
                <option value="category">
                  Category
                </option>

                <option value="product">
                  Product
                </option>
              </select>
            </div>

            <div className="col-md-3">
              <label className="form-label">
                Parent Category
              </label>

              <select
                className="form-select"
                disabled={item.type === "category"}
                value={item.parentCategory || ""}
                onChange={(e) =>
                  handleChange(
                    index,
                    "parentCategory",
                    e.target.value || null
                  )
                }
              >
                <option value="">
                  None
                </option>

                {categoryOptions.map((cat) => (
                  <option
                    key={cat.name}
                    value={cat.name}
                  >
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-md-2">
              <label className="form-label">
                Order
              </label>

              <input
                type="number"
                className="form-control"
                value={item.order}
                onChange={(e) =>
                  handleChange(
                    index,
                    "order",
                    Number(e.target.value)
                  )
                }
              />
            </div>

            <div className="col-md-1">
              <button
                type="button"
                className="btn btn-danger w-100"
                onClick={() =>
                  removeItem(index)
                }
              >
                ×
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default MenuSection;
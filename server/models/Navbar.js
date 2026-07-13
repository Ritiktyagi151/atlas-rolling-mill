import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    type: {
      type: String,
      enum: ["category", "product"],
      required: true,
    },

    parentCategory: {
      type: String,
      default: null,
    },

    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      default: null,
    },

    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      default: null,
    },

    order: {
      type: Number,
      default: 0,
    },
  },
  { _id: true }
);

const announcementSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      trim: true,
    },

    order: {
      type: Number,
      default: 0,
    },
  },
  { _id: true }
);

const navbarSchema = new mongoose.Schema(
  {
    announcements: [announcementSchema],

    menuItems: [menuItemSchema],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Navbar", navbarSchema);
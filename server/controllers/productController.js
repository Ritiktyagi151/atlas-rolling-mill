import slugify from "slugify";
import Product from "../models/Product.js";

// GET ALL PRODUCTS
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .populate("category", "name slug")
      .sort({ name: 1 });

    res.json({
      success: true,
      data: products,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// GET SINGLE PRODUCT
export const getProduct = async (req, res) => {
  try {
    const product = await Product.findOne({
      slug: req.params.slug,
    }).populate("category");

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found.",
      });
    }

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// CREATE PRODUCT
export const createProduct = async (req, res) => {
  try {
    const {
      name,
      tagline,
      hasCategory,
      category,
      description,
    } = req.body;

    const slug = slugify(name, {
      lower: true,
      strict: true,
    });

    const exists = await Product.findOne({ slug });

    if (exists) {
      return res.status(400).json({
        success: false,
        message: "Product already exists.",
      });
    }

    const product = await Product.create({
      name,
      tagline,
      slug,
      hasCategory,
      category: hasCategory ? category : null,
      description,
    });

    res.status(201).json({
      success: true,
      message: "Product created successfully.",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// UPDATE PRODUCT
export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found.",
      });
    }

    product.name = req.body.name;
    product.tagline = req.body.tagline;
    product.slug = slugify(req.body.name, {
      lower: true,
      strict: true,
    });

    product.hasCategory = req.body.hasCategory;
    product.category = req.body.hasCategory
      ? req.body.category
      : null;

    product.description = req.body.description;

    await product.save();

    res.status(200).json({
      success: true,
      message: "Product updated successfully.",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE PRODUCT
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found.",
      });
    }

    await product.deleteOne();

    res.status(200).json({
      success: true,
      message: "Product deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
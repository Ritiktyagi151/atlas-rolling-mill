import slugify from "slugify";
import Blog from "../models/Blog.js";

// GET ALL BLOGS
export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      data: blogs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET SINGLE BLOG
export const getBlog = async (req, res) => {
  try {
    const blog = await Blog.findOne({
      slug: req.params.slug,
    });

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found.",
      });
    }

    res.status(200).json({
      success: true,
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// CREATE BLOG
export const createBlog = async (req, res) => {
  try {
    const {
      title,
      excerpt,
      content,
      date,
      author,
      category,
    } = req.body;

    const slug = slugify(title, {
      lower: true,
      strict: true,
    });

    const exists = await Blog.findOne({ slug });

    if (exists) {
      return res.status(400).json({
        success: false,
        message: "Blog already exists.",
      });
    }

    const blog = await Blog.create({
      title,
      slug,
      excerpt,
      content,
      date,
      author,
      category,
      image: {
  url: `/uploads/blogs/${req.file.filename}`,
  public_id: req.file.filename,
}
    });

    res.status(201).json({
      success: true,
      message: "Blog created successfully.",
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// UPDATE BLOG
export const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found.",
      });
    }

    blog.title = req.body.title;
    blog.slug = slugify(req.body.title, {
      lower: true,
      strict: true,
    });

    blog.excerpt = req.body.excerpt;
    blog.content = req.body.content;
    blog.date = req.body.date;
    blog.author = req.body.author;
    blog.category = req.body.category;

    if (req.file) {
      blog.image = {
  url: `/uploads/blogs/${req.file.filename}`,
  public_id: req.file.filename,
};
    }

    await blog.save();

    res.status(200).json({
      success: true,
      message: "Blog updated successfully.",
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE BLOG
export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found.",
      });
    }

    await blog.deleteOne();

    res.status(200).json({
      success: true,
      message: "Blog deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
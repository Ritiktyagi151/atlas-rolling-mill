import express from "express";
import {
  getBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
} from "../controllers/blogController.js";

import { protect } from "../middleware/authMiddleware.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.get("/", getBlogs);
router.get("/:slug", getBlog);

router.post(
  "/",
  protect,
  upload("blogs").single("image"),
  createBlog
);

router.put(
  "/:id",
  protect,
  upload("blogs").single("image"),
  updateBlog
);

router.delete("/:id", protect, deleteBlog);

export default router;
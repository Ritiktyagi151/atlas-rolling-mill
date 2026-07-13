import dotenv from "dotenv";
import slugify from "slugify";
import connectDB from "../config/db.js";
import Blog from "../models/Blog.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

await connectDB();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogs = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "../data/blogs.json"),
    "utf8"
  )
);

try {
  await Blog.deleteMany();

  const formattedBlogs = blogs.map((blog) => ({
    title: blog.title,
    slug: slugify(blog.title, {
      lower: true,
      strict: true,
    }),
    excerpt: blog.excerpt,
    content: blog.content,
    date: blog.date,
    author: blog.author,
    category: blog.category,
    image: {
      url: blog.image,
      public_id: "",
    },
  }));

  await Blog.insertMany(formattedBlogs);

  console.log("✅ Blogs seeded successfully.");

  process.exit();
} catch (error) {
  console.log(error);
  process.exit(1);
}
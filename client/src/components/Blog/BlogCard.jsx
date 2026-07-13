// src/components/Blog/BlogCard.jsx

import { Link } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

const BlogCard = ({ blog }) => {
  // Supports:
  // 1. Cloudinary URL (string)
  // 2. { url: "..." }
  // 3. Local uploads (/uploads/...)
  // 4. Original JSON image path
  const imageUrl =
    blog.image?.url
      ? blog.image.url.startsWith("/uploads")
        ? `${API_URL}${blog.image.url}`
        : blog.image.url
      : typeof blog.image === "string"
      ? blog.image.startsWith("/uploads")
        ? `${API_URL}${blog.image}`
        : blog.image
      : "/images/blog-placeholder.jpg";

  return (
    <Link to={`/blogs/${blog.slug || blog._id || blog.id}`}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
        <img
          src={imageUrl}
          alt={blog.title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />

        <div className="p-6 flex flex-col flex-grow">
          <div className="text-orange-600 text-sm font-semibold">
            {blog.date} • {blog.category}
          </div>

          <h2 className="text-xl font-bold text-gray-800 mt-2 mb-2">
            {blog.title}
          </h2>

          <p className="text-gray-600 mb-4 flex-grow">
            {blog.excerpt}
          </p>

          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">
              By {blog.author || "Atlas Team"}
            </span>

            <div className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md transition-colors duration-300">
              Read Full Story
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
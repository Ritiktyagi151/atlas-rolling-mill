// src/components/Blog/BlogCard.js
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <Link to={`/blogs/${blog.id}`}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
        <img
          src={blog.image}
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
          <p className="text-gray-600 mb-4 flex-grow">{blog.excerpt}</p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">By {blog.author}</span>
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

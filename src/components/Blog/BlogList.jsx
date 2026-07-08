// src/components/Blog/BlogList.js
import { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import blogsData from "../../data/blogs.json";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setBlogs(blogsData);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-600"></div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <header className="h-[400px] relative">
        {/* Desktop Banner - Visible on md and above */}
        <img
          src="/images/banners/OurBlog.jpg"
          alt="Our Blog Desktop"
          className="hidden md:block w-full h-full object-fill"
        />

        {/* Mobile Banner - Visible below md */}
        <img
          src="images/banners/ourblogMobile.jpg"
          alt="Our Blog Mobile"
          className="block md:hidden w-full h-full object-fill"
        />
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="mb-8 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search blogs..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {filteredBlogs.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-700">
              No blogs found
            </h3>
            <p className="text-gray-500 mt-2">Try a different search term</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default BlogList;

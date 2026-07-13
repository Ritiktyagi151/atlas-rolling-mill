// src/components/Blog/Dynamic_BlogList.jsx

import { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";

const API_URL = import.meta.env.VITE_API_URL;

const Dynamic_BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/api/blogs`);

        // Supports both:
        // [{...}]
        // { data: [{...}] }
        setBlogs(data.data || data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const filteredBlogs = blogs.filter((blog) => {
    const title = blog.title || "";
    const excerpt = blog.excerpt || "";
    const author = blog.author || "";

    return (
      title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

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
        {/* Desktop Banner */}
        <img
          src="/images/banners/OurBlog.jpg"
          alt="Our Blog Desktop"
          className="hidden md:block w-full h-full object-fill"
        />

        {/* Mobile Banner */}
        <img
          src="/images/banners/ourblogMobile.jpg"
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
            <p className="text-gray-500 mt-2">
              Try a different search term
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <BlogCard
                key={blog._id || blog.id || blog.slug}
                blog={blog}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Dynamic_BlogList;
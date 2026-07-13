import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import BlogCard from "./BlogCard";
import ImageSlider from "../Clientslider";

const API_URL = import.meta.env.VITE_API_URL;

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
  const fetchBlog = async () => {
    try {
      setLoading(true);

      const { data } = await axios.get(
        `${API_URL}/api/blogs/${slug}`
      );

      const currentBlog = data.data;

      setBlog(currentBlog);

      const blogsRes = await axios.get(
        `${API_URL}/api/blogs`
      );

      const related = blogsRes.data.data
        .filter(
          (b) =>
            b.category === currentBlog.category &&
            b.slug !== currentBlog.slug
        )
        .slice(0, 3);

      setRelatedBlogs(related);
    } catch (err) {
      console.error(err);
      navigate("/blogs", { replace: true });
    } finally {
      setLoading(false);
    }
  };

  fetchBlog();
}, [slug, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="h-12 w-12 rounded-full border-t-2 border-b-2 border-orange-600"
        ></motion.div>
      </div>
    );
  }

  if (!blog) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gradient-to-b from-gray-50 to-white min-h-screen"
    >
      <div className="container mx-auto px-4 py-12">
        <motion.button
          whileHover={{ x: -5 }}
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center text-orange-600 hover:text-orange-700 transition-colors group"
        >
          <motion.span
            animate={{ x: [0, -3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="mr-2"
          >
            ←
          </motion.span>
          <span className="border-b border-transparent group-hover:border-orange-600 transition-all">
            Back to Blog
          </span>
        </motion.button>

        <motion.article
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-orange-600 bg-orange-100 rounded-full shadow-sm">
              {blog.category}
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight"
          >
            {blog.title}
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="flex items-center text-sm text-gray-500 mb-8"
          >
            <span>Published: {blog.date}</span>
            <span className="mx-2">•</span>
            <span>By {blog.author}</span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="overflow-hidden rounded-xl shadow-lg mb-8"
          >
            <motion.img
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              src={
  blog.image.url.startsWith("/uploads")
    ? `${import.meta.env.VITE_API_URL}${blog.image.url}`
    : blog.image.url
}
              alt={blog.title}
              className="w-full h-64 md:h-[32rem] object-cover"
            />
          </motion.div>

         <motion.div
  variants={itemVariants}
  className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
  dangerouslySetInnerHTML={{
    __html: blog.content,
  }}
>
          </motion.div>
        </motion.article>

        {relatedBlogs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-24"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b border-gray-200">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedBlogs.map((relatedBlog) => (
                <motion.div
                  key={relatedBlog._id}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <BlogCard blog={relatedBlog} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-gray-50"
      >
        <ImageSlider />
      </motion.div>
    </motion.div>
  );
};

export default BlogDetail;
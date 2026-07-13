import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "swiper/css";
import "swiper/css/pagination";

const PremiumBlogSlider = () => {
  const swiperRef = useRef(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const blogs = [
    {
      id: 1,
      title: "Advanced Rolling Mill Technologies",
      excerpt:
        "Explore our latest innovations in rolling mill design that increase production efficiency by up to 35%.",
      date: "May 15, 2023",
      author: "Robert Steelman",
      readTime: "5 min read",
      category: "Technology",
      tags: ["Innovation", "Efficiency"],
      image:
        "https://img.freepik.com/free-vector/industrial-augmented-reality-isometric-composition_1284-29750.jpg",
      slug: "advanced-rolling-mill-technologies",
    },
    {
      id: 2,
      title: "Maintaining Your Rolling Mill",
      excerpt:
        "Essential maintenance practices to extend the lifespan of your rolling mill equipment.",
      date: "April 28, 2023",
      author: "Sarah Machinist",
      readTime: "4 min read",
      category: "Maintenance",
      tags: ["Longevity", "Best Practices"],
      image:
        "https://img.freepik.com/free-photo/worker-controlling-process-rail-cutting-busy-metal-factory_613910-5254.jpg",
      slug: "maintaining-your-rolling-mill",
    },
    {
      id: 3,
      title: "Energy-Efficient Rolling Solutions",
      excerpt:
        "How our modern rolling mills reduce energy consumption by 25% while maintaining output.",
      date: "March 10, 2023",
      author: "David Greenfield",
      readTime: "6 min read",
      category: "Sustainability",
      tags: ["Eco-Friendly", "Cost Savings"],
      image:
        "https://img.freepik.com/free-photo/full-shot-environmental-engineers-working-together_23-2149352244.jpg",
      slug: "energy-efficient-rolling-solutions",
    },
    {
      id: 4,
      title: "Custom Rolling Mill Solutions",
      excerpt:
        "Tailored rolling mill configurations for specialized metal forming applications.",
      date: "February 22, 2023",
      author: "Lisa Metallurgist",
      readTime: "7 min read",
      category: "Custom Solutions",
      tags: ["Bespoke", "Precision"],
      image:
        "https://img.freepik.com/free-photo/machines-industrial-building_140725-7605.jpg",
      slug: "custom-rolling-mill-solutions",
    },
    {
      id: 5,
      title: "Quality Control in Metal Rolling",
      excerpt:
        "Advanced techniques for maintaining consistent quality in rolled metal products.",
      date: "January 18, 2023",
      author: "Michael Inspector",
      readTime: "5 min read",
      category: "Quality Control",
      tags: ["Standards", "Precision"],
      image:
        "https://img.freepik.com/free-photo/two-happy-steel-workers-preparing-manufacture-products-distribution-communicating-industrial-facility-focus-is-mid-adult-worker_637285-4160.jpg",
      slug: "quality-control-in-metal-rolling",
    },
    {
      id: 6,
      title: "Compact Rolling Mills for SMEs",
      excerpt:
        "Space-efficient rolling solutions for small to medium metalworking businesses.",
      date: "December 5, 2022",
      author: "James Entrepreneur",
      readTime: "4 min read",
      category: "Small Business",
      tags: ["Compact", "Affordable"],
      image:
        "https://img.freepik.com/free-photo/cement-factory-indoors-industrial-cement-production-conveyor-conveyer-line-ceramic-tile-heavy-plant-factory-production-ceramic-tiles_645730-162.jpg",
      slug: "compact-rolling-mills-for-smes",
    },
    {
      id: 7,
      title: "Heavy-Duty Industrial Rolling",
      excerpt:
        "Our rugged mills designed for continuous operation in demanding industrial environments.",
      date: "November 15, 2022",
      author: "William Industrialist",
      readTime: "6 min read",
      category: "Industrial",
      tags: ["Durable", "High-Capacity"],
      image:
        "https://img.freepik.com/free-photo/load-carrier-with-wheels_1161-208.jpg",
      slug: "heavy-duty-industrial-rolling",
    },
    {
      id: 8,
      title: "The Future of Rolling Technology",
      excerpt:
        "Emerging trends and technologies shaping the next generation of rolling mills.",
      date: "October 22, 2022",
      author: "Thomas Futurist",
      readTime: "5 min read",
      category: "Innovation",
      tags: ["Trends", "Future Tech"],
      image:
        "https://img.freepik.com/free-photo/person-using-ar-technology-perform-their-occupation_23-2151137460.jpg",
      slug: "future-of-rolling-technology",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, when: "beforeChildren" },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -5,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <div
      ref={ref}
      className="relative py-4 px-2 sm:py-6 sm:px-4 md:py-8 md:px-6 bg-gradient-to-br from-white via-orange-50 to-yellow-50 overflow-visible"
    >
      {/* Header */}
      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.div
          className="text-center mb-4 sm:mb-6"
          variants={itemVariants}
        >
          <h2 className="text-lg sm:text-4xl font-bold text-gray-900">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600  to-orange-700">
              <span className="text-black">Our</span>  Blogs
            </span>
          </h2>
          <div className="w-20 h-1 bg-orange-600 mt-3 mb-3 mx-auto"></div>
          <p className="text-sm text-gray-600 mt-1">
            Latest updates & trends in Rolling Mill Industry
          </p>
        </motion.div>

        {/* Swiper */}
        <motion.div className="relative" variants={itemVariants}>
          <Swiper
            ref={swiperRef}
            modules={[Autoplay, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.1, spaceBetween: 12 },
              768: { slidesPerView: 2, spaceBetween: 16 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
              1280: { slidesPerView: 4, spaceBetween: 24 },
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
              dynamicBullets: true,
            }}
            className="pb-6 sm:pb-8"
            style={{ overflow: "hidden" }}
          >
            <AnimatePresence>
              {blogs.map((blog) => (
                <SwiperSlide key={blog.id} className="!h-auto">
                  <motion.div
                    className="h-full min-h-[320px] sm:min-h-[360px] md:min-h-[400px] flex flex-col bg-white rounded-lg shadow border border-orange-100"
                    variants={itemVariants}
                    whileHover="hover"
                  >
                    {/* Image */}
                    <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-2 left-2 px-2 py-0.5 text-[10px] sm:text-xs bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded shadow">
                        {blog.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-2 sm:p-3 flex-1 flex flex-col">
                      <div className="text-[10px] sm:text-xs text-gray-500 mb-1 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{blog.date}</span>
                        <Clock className="w-3 h-3 ml-2" />
                        <span>{blog.readTime}</span>
                      </div>

                      <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1 line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 mb-2 flex-1 line-clamp-3">
                        {blog.excerpt}
                      </p>

                      <div className="flex items-center text-[10px] sm:text-xs text-gray-500 mb-2">
                        <User className="w-3 h-3 mr-1" />
                        <span>{blog.author}</span>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-2">
                        {blog.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-0.5 text-[10px] sm:text-xs rounded-full bg-orange-100 text-orange-800"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <Link to="/blogs">
                        <button className="w-full py-1 text-[10px] sm:text-xs font-semibold rounded bg-orange-50 text-orange-600 hover:bg-orange-100 border border-orange-200 flex items-center justify-center gap-1">
                          Read More <ArrowRight className="w-3 h-3" />
                        </button>
                      </Link>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </AnimatePresence>
          </Swiper>

          {/* Pagination */}
          <div className="swiper-pagination relative mt-3 text-sm" />
        </motion.div>

        {/* View All Button */}
        <motion.div className="text-center mt-5" variants={itemVariants}>
          <Link to="/blogs">
            <motion.button
              className="inline-flex items-center px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full bg-white/50 backdrop-blur-sm text-orange-700 border-2 border-orange-300 hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 hover:text-white hover:border-transparent transition duration-300 shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-1">View All Articles</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-3 h-3" />
              </motion.span>
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PremiumBlogSlider;

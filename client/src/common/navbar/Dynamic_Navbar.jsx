import { useState, useEffect, useRef, useMemo } from "react";
import {
  FaSearch,
  FaChevronDown,
  FaHome,
  FaInfoCircle,
  FaTools,
  FaWrench,
  FaCog,
  FaChevronRight,
  FaCut,
  FaPlus,
  FaMinus,
  FaNewspaper,
  FaCalendarAlt,
  FaEnvelope,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredNav, setHoveredNav] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [activeMobileSubmenus, setActiveMobileSubmenus] = useState({});
  const navbarRef = useRef(null);

  // Text slider content and state
  const [sliderMessages, setSliderMessages] = useState([]);
  const [currentSliderIndex, setCurrentSliderIndex] = useState(0);
  const [navbarData, setNavbarData] = useState(null);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setSearchOpen(false);
        setHoveredNav(null);
        setActiveSubmenu(null);
        setActiveMobileSubmenus({});
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
  const fetchNavbar = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/api/navbar`);

      setNavbarData(data.data);

const [productsRes, categoriesRes] = await Promise.all([
  axios.get(`${API_URL}/api/products`),
  axios.get(`${API_URL}/api/categories`)
]);

setProducts(productsRes.data.data);
setCategories(categoriesRes.data.data);

      setSliderMessages(
        (data.data.announcements || [])
          .sort((a, b) => a.order - b.order)
          .map((item) => item.text)
      );
    } catch (error) {
      console.error(error);
    }
  };

  fetchNavbar();
}, []);
  // Auto-rotate slider messages
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSliderIndex((prev) =>
        prev === sliderMessages.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [sliderMessages]);

  const navLinks = [
  { name: "Home", path: "/", icon: <FaHome className="mr-2" /> },
  {
    name: "About Us",
    path: "/about-us",
    icon: <FaInfoCircle className="mr-2" />,
  },
  {
    name: "Products",
    icon: <FaTools className="mr-2" />,
    submenu: [],
  },
  {
    name: "Blogs",
    path: "/blogs",
    icon: <FaNewspaper className="mr-2" />,
  },
  {
    name: "Events",
    path: "/gallerypage",
    icon: <FaCalendarAlt className="mr-2" />,
  },
  {
    name: "Contact Us",
    path: "/Contact-Us",
    icon: <FaEnvelope className="mr-2" />,
  },
];

const productMenu = useMemo(() => {
  if (
    !navbarData ||
    !navbarData.menuItems ||
    !categories.length
  )
    return [];

  const productItems = navbarData.menuItems.filter(
    (item) => item.type === "product"
  );

  const orderedMenu = [...navbarData.menuItems]
    .filter(
      (item) => item.type === "category" || item.parentCategory === null
    )
    .sort((a, b) => (a.order || 0) - (b.order || 0))
    .map((item) => {
      if (item.type === "category") {
        const category = item.categoryId
          ? categories.find((c) => c._id === item.categoryId)
          : categories.find((c) => c.name === item.name);

        if (!category) return null;

        const subproducts = productItems
          .filter((productItem) => {
            if (productItem.categoryId) {
              return productItem.categoryId === category._id;
            }

            return productItem.parentCategory === item.name;
          })
          .sort((a, b) => (a.order || 0) - (b.order || 0))
          .map((productItem) => {
            const product = productItem.productId
              ? products.find((p) => p._id === productItem.productId)
              : products.find((p) => p.name === productItem.name);

            if (!product) return null;

            return {
              name: product.name,
              path: `/products/${product.slug}`,
              order: productItem.order,
            };
          })
          .filter(Boolean);

        return {
          name: category.name,
          icon: <FaCog className="mr-2" />,
          subproducts,
          order: item.order,
        };
      }

      if (item.type === "product") {
        const product = item.productId
          ? products.find((p) => p._id === item.productId)
          : products.find((p) => p.name === item.name);

        if (!product) return null;

        return {
          name: product.name,
          path: `/products/${product.slug}`,
          icon: <FaCog className="mr-2" />,
          order: item.order,
        };
      }

      return null;
    })
    .filter(Boolean);

  return orderedMenu;
}, [products, categories, navbarData]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setSearchOpen(false);
    }
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (!searchOpen) {
      setIsMenuOpen(false);
    }
  };

  const handleProductHover = (productName) => {
    setHoveredNav(productName);
    setActiveSubmenu(productName);
  };

  const handleMobileSubmenu = (name, parent = null) => {
    setActiveMobileSubmenus((prev) => {
      const newState = { ...prev };
      const key = parent ? `${parent}.${name}` : name;

      if (newState[key]) {
        delete newState[key];
      } else {
        newState[key] = true;
      }

      return newState;
    });
  };

  return (
    <div ref={navbarRef} className="relative">
      {/* Top Announcement Bar */}
      <div className="fixed top-0 left-0 w-full z-[150] bg-orange-400 text-white text-xs sm:text-sm py-1.5 px-2 sm:px-4 overflow-hidden">
        <motion.div
          key={currentSliderIndex}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.5 }}
          className="whitespace-nowrap text-center"
        >
          {sliderMessages.length > 0
            ? sliderMessages[currentSliderIndex]
            : "ISO 9001-2008 certification attests to ATLAS's unwavering commitment to quality!"}
        </motion.div>
      </div>

      {/* Header */}
      <header
  className={`fixed top-7 left-0 w-full z-[140] transition-all duration-300 bg-orange-50/90 backdrop-blur-sm ${
    isScrolled ? "bg-orange-50 shadow-lg" : ""
  }`}
>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Link to="/" aria-label="Home">
                <img
                  className="h-14 w-auto sm:h-14 md:h-28 object-contain"
                  src="images/logo/atlas-logo-final.png"
                  alt="Atlas Rolling Mill Logo"
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => {
  const currentLink =
    link.name === "Products"
      ? { ...link, submenu: productMenu }
      : link;

  return (
                <motion.div
                  key={currentLink.name}
                  className="relative"
                  onHoverStart={() => handleProductHover(currentLink.name)}
                  onHoverEnd={() => {
                    setHoveredNav(null);
                    setActiveSubmenu(null);
                  }}
                >
                  <motion.div
                    className={`flex items-center px-2 py-2 text-sm lg:text-base rounded-lg font-medium transition-colors ${
                      hoveredNav === currentLink.name
                        ? "text-orange-700 bg-orange-100"
                        : "text-gray-700 hover:text-orange-600"
                    }`}
                  >
                    <Link
                      to={currentLink.path || "#"}
                      className="flex items-center"
                      aria-haspopup={currentLink.submenu ? "true" : undefined}
                      aria-expanded={
                        hoveredNav === currentLink.name ? "true" : "false"
                      }
                    >
                      {currentLink.icon}
                      {currentLink.name}
                      {currentLink.submenu && (
                        <FaChevronDown
                          className={`ml-1 text-xs transition-transform ${
                            hoveredNav === currentLink.name ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </Link>
                  </motion.div>

                  {currentLink.submenu && activeSubmenu === currentLink.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 mt-0 w-[300px] origin-top-left rounded-lg bg-white shadow-xl ring-1 ring-gray-300 ring-opacity-5 focus:outline-none z-50"
                      role="menu"
                    >
                      <div className="p-4 grid grid-cols-1 gap-2">
                        {currentLink.submenu
  .sort((a, b) => (a.order || 0) - (b.order || 0))
  .map((item) => (
                          <div
                            key={item.name}
                            className="relative group"
                            onMouseEnter={() => setHoveredNav(item.name)}
                            onMouseLeave={() => setHoveredNav(null)}
                          >
                            <Link
                              to={item.path || "#"}
                              className={`flex items-center justify-between p-3 text-sm rounded-lg ${
                                hoveredNav === item.name
                                  ? "bg-orange-50 text-orange-600"
                                  : "text-gray-700 hover:bg-orange-50"
                              }`}
                              role="menuitem"
                              onClick={(e) => {
                                if (item.subproducts) e.preventDefault();
                              }}
                            >
                              <div className="flex items-center">
                                {item.icon}
                                <span className="font-medium">{item.name}</span>
                              </div>
                              {item.subproducts && (
                                <FaChevronRight className="text-xs text-gray-400 group-hover:text-orange-500" />
                              )}
                            </Link>

                            {item.subproducts && hoveredNav === item.name && (
                              <motion.div
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                className="absolute left-full top-0 w-64 rounded-lg bg-white shadow-xl ring-1 ring-gray-200 ring-opacity-5 z-50"
                                role="menu"
                              >
                                <div className="py-2">
                                  {item.subproducts.map((subproduct) => (
                                    <Link
                                      key={subproduct.name}
                                      to={subproduct.path}
                                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                                      role="menuitem"
                                    >
                                      {subproduct.name}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
  );
})}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Social Media Icons - Desktop */}
              <div className="hidden md:flex items-center space-x-4 mr-5">
                <a
                  href="https://www.linkedin.com/company/atlas-rolling-mill-mfg-co/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-orange-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-lg" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61560527662822"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-orange-600 transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook className="text-lg" />
                </a>
                <a
                  href="https://www.instagram.com/atlas_rolling_mill_mfg_co?igsh=M3QxZTUzbTE2Mmtr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-orange-600 transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-lg" />
                </a>
              </div>

              {/* Search */}
              <motion.button
                onClick={toggleSearch}
                className="p-2 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-200 transition-colors"
                whileTap={{ scale: 0.9 }}
                aria-label="Search"
              >
                <FaSearch className="text-base sm:text-lg" />
              </motion.button>

              {/* Mobile Menu Toggle */}
              <motion.button
                onClick={toggleMenu}
                className="md:hidden p-2 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-200 focus:outline-none"
                whileTap={{ scale: 0.9 }}
                aria-label="Menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <HiX className="text-lg sm:text-xl" />
                ) : (
                  <HiOutlineMenuAlt3 className="text-lg sm:text-xl" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-orange-50 shadow-xl max-h-[80vh] overflow-y-auto"
              style={{ zIndex: 450 }}
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {navLinks.map((link) => {
  const currentLink =
    link.name === "Products"
      ? { ...link, submenu: productMenu }
      : link;

  return (
                  <div key={`mobile-${currentLink.name}`}>
                    <motion.div
                      className="flex items-center px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-100 rounded-lg font-medium text-sm sm:text-base"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -20, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        to={currentLink.path || "#"}
                        onClick={(e) => {
                          if (!currentLink.submenu) {
                            setIsMenuOpen(false);
                          } else {
                            e.preventDefault();
                            handleMobileSubmenu(currentLink.name);
                          }
                        }}
                        className="flex items-center w-full"
                        aria-expanded={activeMobileSubmenus[currentLink.name] || false}
                      >
                        {currentLink.icon}
                        {currentLink.name}
                        {currentLink.submenu && (
                          <span className="ml-auto">
                            {activeMobileSubmenus[currentLink.name] ? (
                              <FaMinus className="text-xs" />
                            ) : (
                              <FaPlus className="text-xs" />
                            )}
                          </span>
                        )}
                      </Link>
                    </motion.div>
                    {currentLink.submenu && activeMobileSubmenus[currentLink.name] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-4 mt-1 space-y-1 overflow-hidden"
                      >
                        {currentLink.submenu
  .sort((a, b) => (a.order || 0) - (b.order || 0))
  .map((item) => (
                          <div key={`mobile-sub-${item.name}`}>
                            <Link
                              to={item.path || "#"}
                              className="flex items-center justify-between px-4 py-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg"
                              onClick={(e) => {
                                if (item.subproducts) {
                                  e.preventDefault();
                                  handleMobileSubmenu(item.name, currentLink.name);
                                } else {
                                  setIsMenuOpen(false);
                                }
                              }}
                              aria-expanded={
                                activeMobileSubmenus[
                                  `${currentLink.name}.${item.name}`
                                ] || false
                              }
                            >
                              <div className="flex items-center">
                                {item.icon}
                                {item.name}
                              </div>
                              {item.subproducts && (
                                <span className="ml-auto">
                                  {activeMobileSubmenus[
                                    `${currentLink.name}.${item.name}`
                                  ] ? (
                                    <FaMinus className="text-xs" />
                                  ) : (
                                    <FaPlus className="text-xs" />
                                  )}
                                </span>
                              )}
                            </Link>
                            {item.subproducts &&
                              activeMobileSubmenus[
                                `${currentLink.name}.${item.name}`
                              ] && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="ml-4 space-y-1 overflow-hidden"
                                >
                                  {item.subproducts.map((subproduct) => (
                                    <Link
                                      key={`mobile-sub-sub-${subproduct.name}`}
                                      to={subproduct.path}
                                      className="block px-4 py-2 text-xs text-gray-500 hover:text-orange-600 hover:bg-orange-50 rounded-lg"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {subproduct.name}
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
  );
})}

                {/* Social Media Icons - Mobile */}
                <div className="flex justify-center space-x-8 pt-4">
                  <a
                    href="https://www.linkedin.com/company/atlas-engineering-corporation/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-orange-600 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a
                    href="https://www.facebook.com/AtlasEngineeringCorporation/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-orange-600 transition-colors"
                    aria-label="Facebook"
                  >
                    <FaFacebook className="text-xl" />
                  </a>
                  <a
                    href="https://www.instagram.com/atlasengineeringcorp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-orange-600 transition-colors"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="text-xl" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Search Drawer */}
        <AnimatePresence>
          {searchOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/30 z-[460]"
                onClick={toggleSearch}
              />
              <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: searchOpen ? 0 : "100%", opacity: 1 }}
                exit={{ x: "100%", opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed top-0 right-0 h-screen bg-orange-50 shadow-xl z-[470] w-full sm:w-80 md:w-96"
              >
                <div className="h-full flex flex-col">
                  <div className="p-4 border-b border-orange-200 flex items-center">
                    <div className="relative flex-1">
                      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-400" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search products, solutions..."
                        className="w-full pl-10 pr-12 py-2 sm:py-3 bg-white rounded-lg border border-orange-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-700 placeholder-orange-400 text-sm sm:text-base"
                        autoFocus
                        aria-label="Search input"
                      />
                    </div>
                    <button
                      onClick={toggleSearch}
                      className="ml-4 p-2 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-200"
                      aria-label="Close search"
                    >
                      <HiX className="text-lg sm:text-xl" />
                    </button>
                  </div>
                  <div className="flex-1 p-4 overflow-y-auto">
                    {searchQuery ? (
                      <div className="space-y-2">
                        <h3 className="text-base sm:text-lg font-medium text-orange-700 mb-2">
                          Search Results
                        </h3>
                        {[
  ...navLinks.filter((item) => item.name !== "Products"),

  ...products.map((product) => ({
  name: product.name,
  path: `/products/${product.slug}`,
})),

...categories.map((category) => ({
  name: category.name,
  path: "#",
})),
]
  .filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  )
  .map((result, index) => (
                            <Link
                              key={index}
                              to={result.path}
                              className="block p-3 hover:bg-orange-100 rounded-lg transition-colors"
                              onClick={() => {
                                toggleSearch();
                                setSearchQuery("");
                              }}
                            >
                              <div className="flex items-center">
                                <FaSearch className="text-orange-500 mr-3" />
                                <span className="text-gray-700 text-sm sm:text-base">
                                  {result.name}
                                </span>
                              </div>
                            </Link>
                          ))}
                      </div>
                    ) : (
                      <div className="text-center mt-10">
                        <FaSearch className="mx-auto text-3xl sm:text-4xl text-orange-400 mb-4" />
                        <p className="text-orange-600 mb-2 text-sm sm:text-base">
                          Search our products and solutions
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500">
                          Try searching for "rolling mills", "gear boxes", etc.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer to prevent content from being hidden under fixed elements */}
      <div className="h-24 sm:h-28"></div>
    </div>
  );
};

export default Navbar;

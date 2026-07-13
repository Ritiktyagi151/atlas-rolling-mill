// Dynamic_Events.jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const Dynamic_Events = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/api/events`);
        setGalleryItems(data.data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{minHeight:"60vh"}}>
        <h4>Loading...</h4>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mb-10">
        <img
          src="images/banners/event-new.jpg"
          alt="event-banner-desktop"
          className="hidden md:block w-full"
        />
        <img
          src="images/banners/event-phone.jpg"
          alt="event-banner-mobile"
          className="block md:hidden w-full"
        />
      </div>

      <div className="max-w-6xl mx-auto">
        {galleryItems.length === 0 ? (
          <div className="text-center py-5">
            <h3>No Event Images Found</h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-14">
            {galleryItems.map((item) => (
              <motion.div
                key={item._id}
                className="relative overflow-hidden rounded-lg shadow-md bg-white cursor-pointer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedImage(item)}
                layoutId={item._id}
              >
                <motion.img
                  src={`${API_URL}${item.image}`}
                  alt="Event"
                  className="w-full h-80 object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 backdrop-blur-sm z-300 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              layoutId={selectedImage._id}
            >
              <img
                src={`${API_URL}${selectedImage.image}`}
                alt="Event"
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />

              <button
                className="absolute top-4 right-4 bg-white rounded-full w-10 h-10"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dynamic_Events;

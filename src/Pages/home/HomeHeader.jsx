import React from "react";
import { motion } from "framer-motion";

const VideoAndImages = () => {
  const videoSrc = "/video/videos/atlasvideolandingpage.mp4";

  return (
    <div className="w-full relative inset-0 -top-1 bg-gray-50 overflow-hidden">
      <motion.div
        className="w-full h-[40vh] sm:h-[50vh] md:h-[70vh] lg:h-[85vh] overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="w-full h-full"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5 }}
        >
          <video
            className="w-full h-full object-fill"
            muted
            autoPlay
            loop
            playsInline
            src={videoSrc}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default VideoAndImages;

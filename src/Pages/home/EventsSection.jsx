import React, { useState, useRef, useEffect } from "react";

const EventsSection = () => {
  const [activeTab, setActiveTab] = useState("videos");
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on component mount
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Common breakpoint for mobile
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const videos = [
    {
      id: 1,
      title: "Product Launch 2023",
      thumbnail: "/placeholder-video1.jpg",
      src: "video/videos/production.mp4",
      poster: "images/ProductsImgaes/atlas2.jpg",
    },
    {
      id: 2,
      title: "2nd Future Steel Exihibition In Chennai",
      thumbnail: "/placeholder-video2.jpg",
      src: "video/videos/2future-steel-exhibition.mp4",
      poster: "images/extra/event-poster2.png",
    },
  ];

  const images = [
    {
      id: 1,
      title: "HousingLess Mill Stand ",
      src: "images/ProductsImgaes/products-posts/1-6-25.jpg",
    },
    {
      id: 2,
      title: "Flying Shearing Machine",
      src: "images/ProductsImgaes/products-posts/2-1-2025 1.jpg",
    },
    {
      id: 3,
      title: "Gear Coupling",
      src: "images/ProductsImgaes/products-posts/2-1-2025.jpg",
    },
    {
      id: 4,
      title: "Twin Channel",
      src: "images/ProductsImgaes/products-posts/10-1-2025.jpg",
    },
  ];

  const videoRefs = useRef([]);

  const handleVideoHover = (index, isHovering) => {
    if (isMobile) return; // Don't handle hover effects on mobile

    if (videoRefs.current[index]) {
      if (isHovering) {
        videoRefs.current[index].play();
      } else {
        videoRefs.current[index].pause();
        videoRefs.current[index].currentTime = 0;
      }
    }
  };

  return (
    <section className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-2">
          <h2 className="text-3xl font-bold text-orange-600 mb-4">
           <span className="text-black"> Our </span>Events
          </h2>
          <div className="w-20 bg-orange-600 h-1 mb-2 mx-auto"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Relive our memorable moments through these captured experiences
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex justify-center mb-8 border-b border-gray-200">
          <button
            onClick={() => setActiveTab("videos")}
            className={`px-6 py-3 font-medium text-lg ${
              activeTab === "videos"
                ? "text-orange-600 border-b-2 border-orange-600"
                : "text-gray-500"
            }`}
          >
            Videos
          </button>
          {/* <button
            onClick={() => setActiveTab("images")}
            className={`px-6 py-3 font-medium text-lg ${
              activeTab === "images"
                ? "text-orange-600 border-b-2 border-orange-600"
                : "text-gray-500"
            }`}
          >
            Photos
          </button> */}
        </div>

        {/* Videos Tab */}
        {activeTab === "videos" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <div
                key={video.id}
                className="bg-orange-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                onMouseEnter={() => handleVideoHover(index, true)}
                onMouseLeave={() => handleVideoHover(index, false)}
                onClick={() => isMobile && videoRefs.current[index]?.play()}
              >
                <div className="relative h-96 w-full">
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    className="w-full h-full object-fill"
                    loop
                    poster={video.poster}
                    preload="metadata"
                    controls={isMobile} // Show controls on mobile
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Images Tab */}
        {/* {activeTab === "images" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-72 object-fill transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-medium text-lg">
                    {image.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )} */}
      </div>
    </section>
  );
};

export default EventsSection;

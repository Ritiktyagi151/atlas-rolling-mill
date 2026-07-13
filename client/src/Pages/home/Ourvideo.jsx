import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import {
  FaChevronLeft,
  FaChevronRight,
  FaVolumeUp,
  FaVolumeMute,
} from "react-icons/fa";

const OurVideos = () => {
  const videos = [
    { src: "/video/videos/video1.mp4" },
    { src: "video/videos/Atlas-Taj-Event.mp4" },
    { src: "video/videos/video-new-4.mp4" },
    { src: "/video/videos/video5.mp4" },
    { src: "/video/videos/video6.mp4" },
    { src: "/video/videos/video7.mp4" },
  ];

  const swiperRef = useRef(null);
  const videoRefs = useRef([]);
  const [activeVideo, setActiveVideo] = useState(null);
  const [mutedStates, setMutedStates] = useState(videos.map(() => true));
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
      videoRefs.current.forEach((video) => {
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      });
    };
  }, []);

  const toggleMute = (index) => {
    const newMutedStates = [...mutedStates];
    newMutedStates[index] = !newMutedStates[index];
    setMutedStates(newMutedStates);

    if (videoRefs.current[index]) {
      videoRefs.current[index].muted = newMutedStates[index];
    }
  };

  const handleMouseEnter = (index) => {
    if (!isMobile) {
      setActiveVideo(index);
      if (swiperRef.current) {
        swiperRef.current.autoplay.stop();
      }
      if (videoRefs.current[index]) {
        videoRefs.current[index].play();
      }
    }
  };

  const handleMouseLeave = (index) => {
    if (!isMobile) {
      setActiveVideo(null);
      if (swiperRef.current) {
        swiperRef.current.autoplay.start();
      }
      if (videoRefs.current[index]) {
        videoRefs.current[index].pause();
        videoRefs.current[index].currentTime = 0;
      }
    }
  };

  const handleVideoClick = (index) => {
    if (isMobile) {
      if (activeVideo === index) {
        // Toggle play/pause for the active video
        if (videoRefs.current[index].paused) {
          videoRefs.current[index].play();
          if (swiperRef.current) {
            swiperRef.current.autoplay.stop();
          }
        } else {
          videoRefs.current[index].pause();
          if (swiperRef.current) {
            swiperRef.current.autoplay.start();
          }
        }
      } else {
        // If clicking a different video, pause current and play new one
        if (activeVideo !== null && videoRefs.current[activeVideo]) {
          videoRefs.current[activeVideo].pause();
        }
        setActiveVideo(index);
        videoRefs.current[index].play();
        if (swiperRef.current) {
          swiperRef.current.autoplay.stop();
        }
      }
    }
  };

  // Handle video end event to restart slider
  const handleVideoEnd = (index) => {
    if (isMobile && swiperRef.current) {
      swiperRef.current.autoplay.start();
    }
  };

  return (
    <section className="py-8 bg-neutral-100 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-neutral-800 text-[18px] font-medium  tracking-wider">
            Our Social Media Presence
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mt-3 mb-4">
           <span className="text-black">Discover Our Cutting-Edge</span>  Industrial Solutions
          </h2>
          <div className="w-50 h-1 bg-orange-500 mx-auto mb-2"></div>
        </motion.div>
      </div>

      <div className="w-full relative px-10">
        {/* Custom Navigation Buttons */}
        <button
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-orange-50 transition border-2 border-orange-500"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <FaChevronLeft className="h-6 w-6 text-orange-600" />
        </button>

        <button
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-orange-50 transition border-2 border-orange-500"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <FaChevronRight className="h-6 w-6 text-orange-600" />
        </button>

        {/* Video Slider */}
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: !isMobile,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="py-8"
        >
          {videos.map((video, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative overflow-hidden rounded-xl shadow-lg bg-black h-[500px] group"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                onClick={() => handleVideoClick(index)}
              >
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                    if (el) {
                      el.onended = () => handleVideoEnd(index);
                    }
                  }}
                  className="w-full h-full object-cover transition-opacity duration-300"
                  muted={mutedStates[index]}
                  loop={false} // Changed to false to detect end of video
                  playsInline
                  poster={video.poster}
                  controls={isMobile && activeVideo === index}
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Volume control button */}
                {(activeVideo === index ||
                  (isMobile && !videoRefs.current[index]?.paused)) && (
                  <button
                    className="absolute bottom-4 right-4 z-10 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-70 transition"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMute(index);
                    }}
                  >
                    {mutedStates[index] ? (
                      <FaVolumeMute className="h-5 w-5" />
                    ) : (
                      <FaVolumeUp className="h-5 w-5" />
                    )}
                  </button>
                )}

                {/* Play button overlay when not active */}
                {(!isMobile && activeVideo !== index) ||
                  (isMobile &&
                    (activeVideo !== index ||
                      videoRefs.current[index]?.paused) && (
                      <div className="absolute inset-0 flex items-center justify-center group-hover:bg-opacity-10 transition-all duration-300">
                        <div className="w-16 h-16 bg-orange-500 bg-opacity-80 rounded-full flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-white ml-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurVideos;

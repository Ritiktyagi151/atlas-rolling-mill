import { useState, useEffect, useRef } from "react";

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  const slides = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Modern packaging machinery"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Industrial packaging equipment"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1581094794324-8a6c9d3ad9e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Automated packaging line"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1581094794324-8a6c9d3ad9e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "High-speed packaging"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1581094794324-8a6c9d3ad9e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Precision packaging"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1581094794324-8a6c9d3ad9e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Custom packaging solutions"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1581094794324-8a6c9d3ad9e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Quality control"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1581094794324-8a6c9d3ad9e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Packaging innovation"
    }
  ];

  // Group slides into sets of 6
  const slideGroups = [];
  for (let i = 0; i < slides.length; i += 6) {
    slideGroups.push(slides.slice(i, i + 6));
  }

  // Auto-play functionality
  useEffect(() => {
    setIsVisible(true);
    
    intervalRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slideGroups.length);
    }, 5000); // Change slide every 5 seconds

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [slideGroups.length]);

  // Handle manual slide change
  const goToSlide = (index) => {
    setCurrentSlide(index);
    // Reset auto-play timer
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slideGroups.length);
    }, 5000);
  };

  return (
    <div 
      className={`lg:w-1/2 relative transition-all duration-1000 ${
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
      }`}
      ref={sliderRef}
    >
      {/* Slider Container */}
      <div className="overflow-hidden rounded-xl shadow-2xl">
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            width: `${slideGroups.length * 100}%`
          }}
        >
          {slideGroups.map((group, groupIndex) => (
            <div 
              key={`group-${groupIndex}`}
              className="w-full flex"
              style={{ width: `${100 / slideGroups.length}%` }}
            >
              {group.map((slide, slideIndex) => (
                <div 
                  key={`slide-${slide.id}`}
                  className="relative flex-shrink-0 w-1/6 h-full group"
                >
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {slideGroups.map((_, index) => (
          <button
            key={`dot-${index}`}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index 
                ? "bg-orange-600 w-6" 
                : "bg-orange-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Tech Pattern Overlay */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 opacity-10 pointer-events-none">
        <div className="w-full h-full border-4 border-orange-500 rounded-full animate-ping"></div>
      </div>
    </div>
  );
};

export default ImageSlider;



<div className="relative h-[500px]  w-full overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src="video/videos/contact.mp4"
          muted
          loop
          playsInline
          autoPlay
          onClick={toggleVideoPlay}
        >
          <source src="/videos/contact-hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Video Overlay */}

        {/* Video Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-8">
          <div className="max-w-7xl mx-auto">
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Connect With Atlas Rolling Mills
            </motion.h1>
          </div>
        </div>
      </div>
import { useState, useRef, useEffect } from "react";

const AtlasRollingMillFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleMouseEnter = () => {
    if (!isMobile && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = false;
      videoRef.current
        .play()
        .then(() => setIsVideoPlaying(true))
        .catch((error) => console.error("Video play failed:", error));
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.muted = true;
      setIsVideoPlaying(false);
    }
  };

  const handleVideoClick = () => {
    if (isMobile && videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.currentTime = 0;
        videoRef.current.muted = false;
        videoRef.current
          .play()
          .then(() => setIsVideoPlaying(true))
          .catch((error) => console.error("Video play failed:", error));
      } else {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      }
    }
  };

  const faqs = [
    {
      question: "What types of rolling mills does Atlas manufacture?",
      answer:
        "Atlas Rolling Mill manufactures a complete range of rolling mills including 2-High, 4-High, cluster mills, and tandem mill configurations for various metal rolling applications.",
    },
    {
      question: "What materials can your rolling mills process?",
      answer:
        "Our mills are designed to process a wide range of metals including steel, aluminum, copper, brass, and specialty alloys. We can customize mills for specific material requirements.",
    },
    {
      question: "Do you offer custom rolling mill solutions?",
      answer:
        "Yes, we specialize in custom-engineered rolling mill solutions tailored to your specific production needs, material specifications, and throughput requirements.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We serve industries including automotive, aerospace, construction, electronics, and metal fabrication with our precision rolling mills.",
    },
    {
      question: "How can I request a quote for a rolling mill?",
      answer:
        "You can request a quote through our website contact form, by emailing sales@atlasrollingmill.com, or by calling our sales team directly at (555) 123-4567.",
    },
    {
      question: "What's your lead time for new rolling mill equipment?",
      answer:
        "Lead times vary based on the complexity of the mill and current production schedule. Standard mills typically ship within 12-16 weeks, while custom solutions may require 20-24 weeks.",
    },
    {
      question: "Do you provide installation and training services?",
      answer:
        "Yes, we offer comprehensive installation, commissioning, and operator training services to ensure optimal performance of your rolling mill.",
    },
    {
      question: "What maintenance services do you offer?",
      answer:
        "We provide complete maintenance services including preventive maintenance programs, spare parts supply, and emergency repair services for all Atlas rolling mills.",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 py-4 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* FAQ Section */}
          <div className="w-full lg:w-1/2 space-y-4">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Frequently Asked <span className="text-orange-600" >Questions</span> 
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded"></div>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden transition-all duration-200 ease-in-out hover:border-orange-400/30"
                >
                  <button
                    className={`w-full px-4 py-3 text-left focus:outline-none transition-all duration-200 ${
                      activeIndex === index
                        ? "bg-gradient-to-r from-orange-500/10 to-orange-600/10"
                        : "hover:bg-slate-700/30"
                    }`}
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm sm:text-base font-semibold text-white pr-4">
                        {faq.question}
                      </h3>
                      <div
                        className={`transform transition-all duration-200 ${
                          activeIndex === index
                            ? "rotate-180 text-orange-400"
                            : "text-slate-400 hover:text-orange-400"
                        }`}
                      >
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </button>

                  <div
                    className={`px-4 overflow-hidden transition-all duration-300 ease-in-out ${
                      activeIndex === index
                        ? "max-h-96 pb-4 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="border-l-2 border-orange-400/30 pl-3">
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video Section */}
          <div className="w-full lg:w-1/2 mt-9 lg:sticky top-30">
            <div
              className="relative bg-slate-800/30 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-slate-700/50 overflow-hidden"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleVideoClick}
            >
              <div className="text-center mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                  Our Manufacturing Process
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm">
                  {isMobile
                    ? isVideoPlaying
                      ? "Tap to pause"
                      : "Tap to play"
                    : isVideoPlaying
                    ? "Hover to continue watching"
                    : "Hover to play with sound"}
                </p>
              </div>

              {/* Video Container */}
              <div className="relative aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
                <video
                  ref={videoRef}
                  className="w-full h-auto"
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  poster="/video/videos/faq.mp4"
                  controls={isMobile && isVideoPlaying}
                >
                  <source src="/video/videos/faq.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Play indicator overlay */}
                {(!isVideoPlaying || (isMobile && !isVideoPlaying)) && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="text-center p-4">
                      <svg
                        className="w-12 h-12 mx-auto text-orange-400 mb-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-white font-medium text-sm">
                        {isMobile ? "Tap to play" : "Hover to play"}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtlasRollingMillFAQ;

import React, { useState, useEffect } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [activePopup, setActivePopup] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const popupContent = {
    experience: {
      title: "20+ Years of Experience",
      icon: (
        <svg
          className="w-12 h-12 text-orange-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z" />
        </svg>
      ),
      content:
        "Atlas Rolling Mill Mfg. Co. has been a trusted name in the steel rolling mill industry since 2005. With over five decades of experience, we've perfected the art of manufacturing high-quality rolling mills and related equipment. Our journey began with a small workshop and has grown into a state-of-the-art manufacturing facility serving clients across 15+ countries. This extensive experience allows us to understand the unique challenges of metal forming and provide solutions that stand the test of time.",
    },
    manufacturing: {
      title: "Advanced Manufacturing",
      icon: (
        <svg
          className="w-12 h-12 text-orange-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
        </svg>
      ),
      content:
        "Our 50,000 sq. ft. manufacturing facility in Ghaziabad, India is equipped with modern CNC machines, heat treatment plants, and precision testing equipment. We combine traditional craftsmanship with cutting-edge technology to produce rolling mills that deliver exceptional performance. Our vertically integrated manufacturing process allows us to maintain strict quality control at every stage - from raw material selection to final assembly and testing. We manufacture complete rolling mill plants including rolling mill stands, gear boxes, shearing machines, and all associated equipment under one roof.",
    },
    quality: {
      title: "Quality Commitment",
      icon: (
        <svg
          className="w-12 h-12 text-orange-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
        </svg>
      ),
      content:
        "Quality is the foundation of our business. All Atlas Rolling Mill equipment undergoes rigorous testing and inspection before delivery. We maintain ISO 9001:2015 certification and implement strict quality control measures at every production stage. Our quality assurance team conducts material testing, dimensional checks, hardness testing, and performance validation to ensure every machine meets our high standards. We provide comprehensive warranties and after-sales support, with a network of service engineers available to assist our clients worldwide. Our commitment to quality has resulted in a client retention rate of over 85% for the past decade.",
    },
  };

  const openPopup = (type) => {
    setActivePopup(type);
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setActivePopup(null);
    document.body.style.overflow = "unset";
  };

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Image */}
          <div
            className={`lg:w-1/2 relative transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-12 opacity-0"
            }`}
          >
            <div className="group">
              <div className="overflow-hidden rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform duration-700">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline // <-- Ye line add karna zaruri hai
                  src="/video/videos/atlas-new-video-homeaboutus.mp4" // Path check karein
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}
              </div>
            </div>

            {/* Tech Pattern Overlay */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 opacity-10">
              <div className="w-full h-full border-4 border-orange-500 rounded-full animate-ping"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div
            className={`lg:w-1/2 transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-12 opacity-0"
            }`}
          >
            <div className="mb-8">
              <div className="text-4xl font-bold text-gray-800 mb-4">
                <h1 className="leading-tight">
                  ATLAS Rolling Mill{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700 animate-pulse">
                    Mfg. Co.
                  </span>
                </h1>
              </div>
              <div
                className="h-1 bg-gradient-to-r from-orange-500 to-orange-700 mb-2 transform origin-left animate-pulse"
                style={{ width: "80px" }}
              ></div>
              <div className="text-gray-600 leading-relaxed">
                <p className="text-lg">
                  ATLAS Rolling Mill Mfg. Co. is a leading manufacturer and
                  exporter of steel rolling mill machinery, established in 2005.
                  With our extensive experience and technical expertise, we
                  design and manufacture high-quality rolling mills, rolling
                  mill stands, gear boxes, shearing machines, and other metal
                  forming equipment. Our products are known for their
                  durability, precision, and performance, serving clients across
                  India and internationally.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div
                className={`group cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                  activeCard === "experience" ? "scale-105" : ""
                }`}
                onMouseEnter={() => setActiveCard("experience")}
                onMouseLeave={() => setActiveCard(null)}
                onClick={() => openPopup("experience")}
              >
                <div className="flex items-center p-2 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border-l-4 border-orange-500">
                  <div className="mr-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-100 to-orange-200 rounded-full flex items-center justify-center group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300">
                      <svg
                        className="w-6 h-6 text-orange-600 group-hover:scale-110 transition-transform duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h5 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                      20+ Years of Experience
                    </h5>
                    <p className="text-gray-600 mt-1 group-hover:text-gray-700 transition-colors duration-300">
                      Trusted since 2005 in rolling mill manufacturing
                    </p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-6 h-6 text-orange-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div
                className={`group cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                  activeCard === "manufacturing" ? "scale-105" : ""
                }`}
                onMouseEnter={() => setActiveCard("manufacturing")}
                onMouseLeave={() => setActiveCard(null)}
                onClick={() => openPopup("manufacturing")}
              >
                <div className="flex items-center p-2 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border-l-4 border-orange-500">
                  <div className="mr-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-100 to-orange-200 rounded-full flex items-center justify-center group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300">
                      <svg
                        className="w-6 h-6 text-orange-600 group-hover:scale-110 transition-transform duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h5 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                      Advanced Manufacturing
                    </h5>
                    <p className="text-gray-600 mt-1 group-hover:text-gray-700 transition-colors duration-300">
                      50,000 sq. ft. state-of-the-art facility
                    </p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-6 h-6 text-orange-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div
                className={`group cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                  activeCard === "quality" ? "scale-105" : ""
                }`}
                onMouseEnter={() => setActiveCard("quality")}
                onMouseLeave={() => setActiveCard(null)}
                onClick={() => openPopup("quality")}
              >
                <div className="flex items-center p-2 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border-l-4 border-orange-500">
                  <div className="mr-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-100 to-orange-200 rounded-full flex items-center justify-center group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300">
                      <svg
                        className="w-6 h-6 text-orange-600 group-hover:scale-110 transition-transform duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h5 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                      Quality Commitment
                    </h5>
                    <p className="text-gray-600 mt-1 group-hover:text-gray-700 transition-colors duration-300">
                      ISO 9001:2015 certified manufacturing
                    </p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-6 h-6 text-orange-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {activePopup && (
        <div className="fixed inset-0 z-200 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-opacity-80 backdrop-blur-sm transition-opacity duration-300"
            onClick={closePopup}
          ></div>
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden transform transition-all duration-500 scale-100 opacity-100">
            {/* Header */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full transform translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-white opacity-5 rounded-full transform -translate-x-10 translate-y-10"></div>
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white bg-opacity-20 rounded-full">
                    {popupContent[activePopup].icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">
                      {popupContent[activePopup].title}
                    </h2>
                    <p className="text-gray-300 text-sm">
                      Atlas Rolling Mills Excellence
                    </p>
                  </div>
                </div>
                <button
                  onClick={closePopup}
                  className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors duration-200"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 overflow-y-auto max-h-96">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {popupContent[activePopup].content}
                </p>
              </div>

              {/* Stats or Highlights */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                {activePopup === "experience" && (
                  <>
                    <div className="bg-orange-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-orange-600">
                        26+
                      </div>
                      <div className="text-sm text-gray-600">
                        Years in business
                      </div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-orange-600">
                        15+
                      </div>
                      <div className="text-sm text-gray-600">
                        Countries served
                      </div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-orange-600">
                        1000+
                      </div>
                      <div className="text-sm text-gray-600">
                        Machines installed
                      </div>
                    </div>
                  </>
                )}
                {activePopup === "manufacturing" && (
                  <>
                    <div className="bg-orange-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-orange-600">
                        50,000
                      </div>
                      <div className="text-sm text-gray-600">
                        Sq. ft. facility
                      </div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-orange-600">
                        CNC
                      </div>
                      <div className="text-sm text-gray-600">
                        Precision machining
                      </div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-orange-600">
                        100%
                      </div>
                      <div className="text-sm text-gray-600">
                        In-house production
                      </div>
                    </div>
                  </>
                )}
                {activePopup === "quality" && (
                  <>
                    <div className="bg-orange-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-orange-600">
                        ISO 9001
                      </div>
                      <div className="text-sm text-gray-600">
                        Certified quality
                      </div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-orange-600">
                        85%
                      </div>
                      <div className="text-sm text-gray-600">
                        Client retention
                      </div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-orange-600">
                        24/7
                      </div>
                      <div className="text-sm text-gray-600">
                        Support available
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t bg-gray-50 px-8 py-2 flex justify-between items-center">
              <div className="text-sm text-gray-600">
                Learn more about Atlas Rolling Mills
              </div>
              <button
                onClick={closePopup}
                className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutSection;

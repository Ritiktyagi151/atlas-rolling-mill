import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AtlasRollingMillProcess = () => {
  const [activePhase, setActivePhase] = useState(1);
  const [popupContent, setPopupContent] = useState(null);

  const phases = [
    {
      id: 1,
      number: "1",
      title: "Raw Material Inspection",
      icon: "fas fa-search",
      heading: "Material Quality Check",
      content: [
        "Steel billet sourcing from certified suppliers",
        "Chemical composition analysis",
        "Ultrasonic and surface defect inspection",
      ],
      image:
        "images/Phases/phase1.png",
      popup: {
        title: "Raw Material Inspection Details",
        features: [
          "100% material certification before production",
          "Spectrometer testing for chemical accuracy",
          "Defect-free billet selection process",
        ],
        highlight:
          "Ensuring only defect-free, high-grade steel enters our rolling lines.",
      },
    },
    {
      id: 2,
      number: "2",
      title: "Reheating Furnace",
      icon: "fas fa-fire",
      heading: "Precision Heating",
      content: [
        "Computer-controlled billet reheat furnaces",
        "Uniform temperature distribution",
        "Optimized fuel efficiency with regenerative burners",
      ],
      image:
        "images/Phases/phase2.png",
      popup: {
        title: "Reheating Furnace Specifications",
        features: [
          "Temperature uniformity within ±10°C",
          "Real-time furnace temperature monitoring",
          "Low NOx burner technology for cleaner emissions",
        ],
        highlight:
          "Accurate heating for improved metallurgical properties during rolling.",
      },
    },
    {
      id: 3,
      number: "3",
      title: "Rolling Process",
      icon: "fas fa-industry",
      heading: "Multi-Stand Rolling",
      content: [
        "Hot rolling through multi-stand rolling mills",
        "Automatic gauge control (AGC) system",
        "In-line thickness and width monitoring",
      ],
      image:
        "images/Phases/phase3.png",
      popup: {
        title: "Rolling Mill Highlights",
        features: [
          "Dimensional control to ±0.1mm tolerance",
          "Hydraulic and screw down rolling adjustments",
          "High-speed rolling for improved throughput",
        ],
        highlight:
          "Delivering consistent product profiles with superior surface finish.",
      },
    },
    {
      id: 4,
      number: "4",
      title: "Cooling Bed",
      icon: "fas fa-snowflake",
      heading: "Controlled Cooling",
      content: [
        "Laminar water cooling systems",
        "Run-out table control for uniform cooling",
        "Minimized residual stress through slow cooling",
      ],
      image:
        "images/Phases/phase4.png",
      popup: {
        title: "Cooling Process Overview",
        features: [
          "Adjustable cooling rate for desired properties",
          "In-line temperature measurement",
          "Optimized for different steel grades",
        ],
        highlight:
          "Controlled cooling for structural consistency and toughness.",
      },
    },
    {
      id: 5,
      number: "5",
      title: "Cutting & Quality Control",
      icon: "fas fa-check-double",
      heading: "Finishing and Testing",
      content: [
        "Automatic hot saw cutting",
        "Dimensional and surface defect inspection",
        "Mechanical and metallurgical testing",
      ],
      image:
        "images/Phases/phase5.png",
      popup: {
        title: "Final Quality Assurance",
        features: [
          "100% length and straightness verification",
          "Non-destructive testing (NDT) as required",
          "Mill Test Certificate (MTC) issued for each batch",
        ],
        highlight:
          "Every product leaves the mill with full traceability and test compliance.",
      },
    },
  ];

  const openPopup = (phase) => {
    setPopupContent(phase.popup);
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setPopupContent(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-8 md:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Floating industrial elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-orange-200 opacity-10 animate-float"
            style={{
              width: `${Math.random() * 100 + 30}px`,
              height: `${Math.random() * 100 + 30}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 20 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700">
            Our 5-Phase Manufacturing Process
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Each numbered phase represents a critical stage in our precision
            manufacturing workflow
          </p>
        </motion.div>

        {/* Process Timeline - Mobile Horizontal Scroll */}
        <div className="mb-6  md:mb-12 relative">
          <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
            <div className="flex w-max space-x-4">
              {phases.map((phase) => (
                <motion.button
                  key={phase.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActivePhase(phase.id)}
                  className={`flex flex-col items-center transition-all min-w-[80px] ${
                    activePhase === phase.id
                      ? "scale-105"
                      : "opacity-80 hover:opacity-100"
                  }`}
                >
                  <div
                    className={`w-14 h-14 mt-2 md:w-20 md:h-20 rounded-full flex items-center justify-center text-xl md:text-2xl mb-2 transition-all relative ${
                      activePhase === phase.id
                        ? "bg-orange-600 text-white shadow-xl"
                        : "bg-white text-orange-500 shadow-lg"
                    }`}
                  >
                    <div
                      className={`absolute w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs md:text-sm font-bold ${
                        activePhase === phase.id
                          ? "bg-white text-orange-600 border-2 border-orange-600"
                          : "bg-orange-500 text-white"
                      }`}
                    >
                      {phase.number}
                    </div>
                    <i className={phase.icon} />
                  </div>
                  <span
                    className={`text-xs md:text-sm font-medium text-center max-w-[80px] ${
                      activePhase === phase.id
                        ? "text-orange-700 font-bold"
                        : "text-gray-700"
                    }`}
                  >
                    {phase.title}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-300 -translate-y-1/2 z-0"></div>
          <div className="hidden md:flex flex-row justify-between items-center gap-4 md:gap-0 relative z-10">
            {phases.map((phase) => (
              <motion.button
                key={phase.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActivePhase(phase.id)}
                className={`flex flex-col items-center transition-all ${
                  activePhase === phase.id
                    ? "scale-110"
                    : "opacity-80 hover:opacity-100"
                }`}
              >
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center text-2xl mb-3 transition-all relative ${
                    activePhase === phase.id
                      ? "bg-orange-600 text-white shadow-xl"
                      : "bg-white text-orange-500 shadow-lg"
                  }`}
                >
                  <div
                    className={`absolute w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      activePhase === phase.id
                        ? "bg-white text-orange-600 border-2 border-orange-600"
                        : "bg-orange-500 text-white"
                    }`}
                  >
                    {phase.number}
                  </div>
                  <i className={phase.icon} />
                </div>
                <span
                  className={`font-medium text-center max-w-[120px] ${
                    activePhase === phase.id
                      ? "text-orange-700 font-bold"
                      : "text-gray-700"
                  }`}
                  style={{ fontSize: "0.9rem" }}
                >
                  {phase.title}
                </span>
                {activePhase === phase.id && (
                  <motion.div
                    layoutId="phaseIndicator"
                    className="absolute -bottom-4 w-3/4 h-1.5 bg-orange-500 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Phase Content */}
        <AnimatePresence mode="wait">
          {phases.map(
            (phase) =>
              activePhase === phase.id && (
                <motion.div
                  key={phase.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-orange-100"
                >
                  <div className="flex flex-col lg:grid lg:grid-cols-2 gap-0">
                    <div className="relative h-48 sm:h-64 lg:h-auto">
                      <img
                        src={phase.image}
                        alt={phase.heading}
                        className="w-full h-full object-fill absolute inset-0"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent opacity-70" />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6">
                        <div className="flex items-center">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold text-lg sm:text-xl mr-3 sm:mr-4">
                            {phase.number}
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold text-white">
                            {phase.heading}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                      <div className="mb-4 sm:mb-6">
                        <h4 className="text-xs sm:text-sm font-semibold text-orange-600 mb-1 sm:mb-2 uppercase tracking-wider">
                          Phase {phase.number}: {phase.title}
                        </h4>
                        <ul className="space-y-2 sm:space-y-3">
                          {phase.content.map((item, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * i }}
                              className="flex items-start text-sm sm:text-base"
                            >
                              <span className="text-orange-500 mr-2 mt-1">
                                •
                              </span>
                              <span className="text-gray-700">{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <motion.button
                        whileHover={{
                          scale: 1.02,
                          boxShadow: "0 4px 12px rgba(249, 115, 22, 0.3)",
                        }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => openPopup(phase)}
                        className="self-start mt-2 sm:mt-4 group relative overflow-hidden"
                      >
                        <span className="relative z-10 inline-flex items-center text-sm sm:text-base text-orange-600 font-medium">
                          View Phase {phase.number} Details
                          <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">
                            →
                          </span>
                        </span>
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 opacity-30 group-hover:opacity-100 transition-all duration-300"></span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>

      {/* Popup */}
      <AnimatePresence>
        {popupContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-400 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-4 border-orange-500"
            >
              <div className="p-4 sm:p-6 md:p-8">
                <div className="flex justify-between items-start mb-4 sm:mb-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-orange-600">
                      {popupContent.title}
                    </h3>
                    <div className="w-12 h-1 bg-orange-500 mt-1 sm:mt-2 rounded-full"></div>
                  </div>
                  <button
                    onClick={closePopup}
                    className="text-gray-500 hover:text-orange-600 text-2xl transition-colors"
                  >
                    &times;
                  </button>
                </div>

                <div className="mb-4 sm:mb-6">
                  <h4 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 text-gray-800 flex items-center">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-orange-500 text-white flex items-center justify-center mr-2 text-xs sm:text-sm">
                      !
                    </span>
                    Key Features:
                  </h4>
                  <ul className="space-y-2 sm:space-y-3 pl-2">
                    {popupContent.features.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                        className="flex items-start text-sm sm:text-base"
                      >
                        <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold mr-2 sm:mr-3 mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-gray-700">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-3 sm:p-4 rounded-r-lg">
                  <h4 className="font-bold text-orange-700 mb-1 sm:mb-2 flex items-center text-sm sm:text-base">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-orange-600 text-white flex items-center justify-center mr-2 text-xs sm:text-sm">
                      ✓
                    </span>
                    Process Advantage:
                  </h4>
                  <p className="text-gray-800 pl-6 sm:pl-8 text-sm sm:text-base">
                    {popupContent.highlight}
                  </p>
                </div>

                <div className="mt-6 sm:mt-8 flex justify-center">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 4px 12px rgba(249, 115, 22, 0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={closePopup}
                    className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-6 sm:py-3 sm:px-8 rounded-lg shadow-md transition-all text-sm sm:text-base"
                  >
                    Close Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(5%, -5%);
          }
          50% {
            transform: translate(10%, 5%);
          }
          75% {
            transform: translate(-5%, 10%);
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </section>
  );
};

export default AtlasRollingMillProcess;
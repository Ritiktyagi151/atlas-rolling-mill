import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TwinChannelSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("twin-channel");
      if (element) {
        const top = element.getBoundingClientRect().top;
        setIsVisible(top < window.innerHeight - 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial render
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="twin-channel"
      className="py-16 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-gray-800"
          >
            Twin Channel Solution
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 mb-8 leading-relaxed"
          >
            Revolutionizing bar handling at cooling beds with unmatched speed and safety
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-orange-500"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Advanced Bar Handling Technology
            </h3>
            <p className="text-gray-600 mb-6">
              The twin channel offers an innovative solution for high-speed bar handling at cooling beds, supporting bar sizes up to 40mm with speeds reaching 30 meters per second. Our system ensures smooth transportation of bars in a closed channel until they reach a complete standstill, then automatically discharges them to the bed below.
            </p>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="text-orange-600 font-semibold mb-2">
                Key Advantages:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Precision handling at unprecedented speeds</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Enhanced safety with closed channel design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Reduced maintenance requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Seamless integration with existing systems</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-orange-500 p-8 rounded-xl text-white"
          >
            <h3 className="text-2xl font-bold mb-4">Technical Specifications</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Core Features:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-orange-100 mr-2">•</span>
                    <span>Twin water-cooled C-type channels with advanced cooling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-100 mr-2">•</span>
                    <span>Robust supporting structure for stability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-100 mr-2">•</span>
                    <span>Precision cam mechanism for pipe operation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-100 mr-2">•</span>
                    <span>Hydraulic drive system for smooth operation</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Performance Benefits:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-orange-100 mr-2">•</span>
                    <span>Eliminates warping during transfer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-100 mr-2">•</span>
                    <span>Industry-leading safety standards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-100 mr-2">•</span>
                    <span>Compatible with braking pinch rolls</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-100 mr-2">•</span>
                    <span>Automated operation reduces labor costs</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-gray-800 rounded-xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-4 text-orange-400">
            Innovation in Steel Processing
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">
                Our Twin Channel system represents a breakthrough in steel mill technology, combining precision engineering with operational efficiency. The innovative cast iron center box design has revolutionized maintenance procedures, significantly reducing downtime.
              </p>
              <p>
                The automated operation, synchronized with the dividing shear discharge, ensures perfect timing and material flow throughout the cooling process.
              </p>
            </div>
            <div>
              <p className="mb-4">
                Designed for both new installations and retrofits, our solution adapts to your specific mill configuration. The system's ability to work in conjunction with braking pinch rolls allows for shorter run-in lengths, optimizing your floor space utilization.
              </p>
              <p>
                With our Twin Channel technology, you'll achieve higher throughput, improved product quality, and enhanced worker safety - all while reducing operational costs.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TwinChannelSection;
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const UniversalCouplingSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("universal-coupling");
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
      id="universal-coupling"
      className="py-16 bg-gradient-to-b from-white to-gray-50"
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
            Universal Coupling Solutions
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 mb-8 leading-relaxed"
          >
            Advanced shaft connection technology for hot rolling mill applications
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-orange-500">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Versatile Coupling Technology
              </h3>
              <p className="text-gray-600 mb-4">
                Universal couplings are essential components for connecting rotating shafts and transmitting angular movement in mechanical systems, particularly in demanding hot rolling mill environments. Our solutions accommodate various alignment challenges while ensuring reliable power transmission.
              </p>
              <p className="text-gray-600">
                TS ISPAT PVT LTD offers premium universal couplings manufactured with meticulous attention to detail, ensuring optimal performance and longevity for your equipment at competitive industry prices.
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-orange-600 mb-4">
                Coupling Types & Functions
              </h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-gray-800 mb-1">Mechanical Types:</h5>
                  <ul className="space-y-2 pl-5">
                    <li className="flex items-start">
                      <span className="bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 shrink-0">1</span>
                      <span><strong>Rigid</strong> - Flanged, sleeve, clamping types (connection & transmission)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 shrink-0">2</span>
                      <span><strong>Flexible</strong> - Gear, membrane, chain, universal types (buffering & compensation)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 shrink-0">3</span>
                      <span><strong>Safety</strong> - Ball, friction, pin types (overload protection)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800 mb-1">Other Variants:</h5>
                  <ul className="space-y-2 pl-5">
                    <li className="flex items-start">
                      <span className="bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 shrink-0">4</span>
                      <span>Hydraulic and electromagnetic types for specialized applications</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-orange-500 p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-4">Technical Specifications</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2 text-orange-100">Construction</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-orange-100 mr-2 font-bold">•</span>
                      <span>Precision machined for optimal performance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-100 mr-2 font-bold">•</span>
                      <span>Forged steel and high-quality cast steel construction</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-100 mr-2 font-bold">•</span>
                      <span>Versatile design adaptable to specific requirements</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-orange-100">Performance</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-orange-100 mr-2 font-bold">•</span>
                      <span>Handles up to 30° misalignment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-100 mr-2 font-bold">•</span>
                      <span>Simple design for easy maintenance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-100 mr-2 font-bold">•</span>
                      <span>Durable construction for long service life</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-4 text-orange-400">
                Operational Advantages
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-orange-300 mr-2 font-bold">✓</span>
                      <span>Excellent misalignment compensation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-300 mr-2 font-bold">✓</span>
                      <span>Reliable power transmission</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-300 mr-2 font-bold">✓</span>
                      <span>Vibration damping capabilities</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-orange-300 mr-2 font-bold">✓</span>
                      <span>Overload protection (safety types)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-300 mr-2 font-bold">✓</span>
                      <span>Easy installation and alignment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-300 mr-2 font-bold">✓</span>
                      <span>Custom configurations available</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-white rounded-xl p-8 shadow-lg border-t-4 border-orange-500"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Comprehensive Coupling Solutions
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4 text-gray-600">
                Our universal couplings are engineered to meet the rigorous demands of hot rolling mills and other heavy industrial applications. The combination of premium materials and precision manufacturing ensures reliable performance even under extreme operating conditions.
              </p>
              <p className="text-gray-600">
                With the ability to handle up to 30° of misalignment, our couplings provide exceptional flexibility while maintaining efficient power transmission, reducing stress on connected equipment.
              </p>
            </div>
            <div>
              <p className="mb-4 text-gray-600">
                We offer a complete range of coupling types from basic rigid connections to advanced safety couplings with overload protection. Each type is designed with specific operational requirements in mind, ensuring optimal performance for your application.
              </p>
              <p className="text-gray-600">
                Available in various configurations and materials, our universal coupling solutions can be customized to meet your exact specifications, providing the perfect balance of performance, durability, and value.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UniversalCouplingSection;
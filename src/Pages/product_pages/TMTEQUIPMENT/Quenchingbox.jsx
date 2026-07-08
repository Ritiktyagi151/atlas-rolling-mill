import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TMTQuenchingBoxSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("tmt-quenching");
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
      id="tmt-quenching"
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
            TMT Quenching Box Solutions
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 mb-8 leading-relaxed"
          >
            Advanced water treatment technology for superior TMT re-bar production
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-orange-500 mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Premium Quenching Technology
              </h3>
              <p className="text-gray-600 mb-4">
                ATLAS ROLLING MILL MFG.CO. leads the industry in designing and manufacturing high-performance TMT Quenching Boxes for rolling mill plants. Our solutions cover everything from green field installations to brown field modernizations.
              </p>
              <p className="text-gray-600">
                We manufacture premium quality quenching boxes with non-corrosive properties and exceptional finish, adhering to strict industry standards with a client-focused approach.
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-orange-600 mb-4">
                Core Process Features
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">1</span>
                  <span>Multiple injector type high-grade quenching system with surface scrubbing</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">2</span>
                  <span>Automated motorized valve positioning and nozzle fitting</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">3</span>
                  <span>Multi-port fresh water entry system for efficient quenching cycles</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">4</span>
                  <span>Precision-engineered for consistent tensile strength and accurate bar cutting</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-orange-500 p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-4">Technical Specifications</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-orange-100 mr-2 font-bold">•</span>
                  <span>CNC profile cutting and precision welding fabrication</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-100 mr-2 font-bold">•</span>
                  <span>IS 304 grade stainless steel investment casting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-100 mr-2 font-bold">•</span>
                  <span>In-house gear grinding and quality testing facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-100 mr-2 font-bold">•</span>
                  <span>Expert engineering team specializing in quenching systems</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-4 text-orange-400">
                Material Enhancement
              </h3>
              <p className="mb-4">
                Our TMT Quenching Box significantly improves steel properties through advanced Thermo Mechanical Treatment:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-300 mb-2">Mechanical Properties</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center">
                      <span className="text-orange-300 mr-2">+</span>
                      <span>Enhanced tensile strength</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-orange-300 mr-2">+</span>
                      <span>Improved yield stress</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-orange-300 mr-2">+</span>
                      <span>Superior elongation</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-300 mb-2">Performance Benefits</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center">
                      <span className="text-orange-300 mr-2">+</span>
                      <span>Increased corrosion resistance</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-orange-300 mr-2">+</span>
                      <span>Excellent bending properties</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-orange-300 mr-2">+</span>
                      <span>Consistent material quality</span>
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
            Complete Quenching Solutions
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4 text-gray-600">
                Our TMT Quenching Boxes represent the pinnacle of water treatment technology for re-bar production. The innovative multi-injector design ensures thorough and efficient quenching, while the automated systems maintain precise control over the entire process.
              </p>
              <p className="text-gray-600">
                The use of premium IS 304 stainless steel and investment casting techniques guarantees durability and longevity, even in the most demanding industrial environments.
              </p>
            </div>
            <div>
              <p className="mb-4 text-gray-600">
                With our in-house manufacturing capabilities including CNC cutting, precision welding, and gear grinding, we maintain complete quality control throughout the production process.
              </p>
              <p className="text-gray-600">
                Whether you're establishing a new plant or upgrading existing facilities, our quenching solutions will enhance your production efficiency and product quality while reducing operational costs.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TMTQuenchingBoxSection;
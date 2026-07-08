import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FlyingShearSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("flying-shear");
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
      id="flying-shear"
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
            High-Speed Flying Shear Machines
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 mb-8 leading-relaxed"
          >
            Precision cutting solutions for continuous rolling operations
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
                Premium Cutting Technology
              </h3>
              <p className="text-gray-600 mb-4">
                As leading exporters of high-speed flying shears from India, we
                provide durable cutting solutions made from premium
                corrosion-resistant materials. Our shears are positioned after
                the finishing mill and before the cooling bed for optimal
                operation.
              </p>
              <p className="text-gray-600">
                Equipped with encoder technology and MMI interface, our flying
                shears precisely cut materials at line speed without
                interrupting production flow, significantly enhancing overall
                productivity.
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-orange-600 mb-4">
                Core Operational Features
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                    1
                  </span>
                  <span>High-speed cutting up to 30 meters per minute</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                    2
                  </span>
                  <span>Versatile cutting capacity from 8mm to 32mm</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                    3
                  </span>
                  <span>Built-in lubrication system for smooth operation</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                    4
                  </span>
                  <span>Hardened and ground gears for silent meshing</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-orange-500 p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-4">
                Technical Specifications
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2 text-orange-100">
                    Cutting
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-orange-100 mr-2 font-bold">•</span>
                      <span>Multiple cut modes (length/registration)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-100 mr-2 font-bold">•</span>
                      <span>Optimized cutting speed prevents damage</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-100 mr-2 font-bold">•</span>
                      <span>Produces smooth, straight cuts</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-orange-100">
                    Performance
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-orange-100 mr-2 font-bold">•</span>
                      <span>Handles random in-feed applications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-100 mr-2 font-bold">•</span>
                      <span>Maintains constant feed operations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-100 mr-2 font-bold">•</span>
                      <span>Increased throughput with lower downtime</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-4 text-orange-400">
                Industrial Applications
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-orange-300 mr-2 font-bold">✓</span>
                      <span>Hot rolling mill operations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-300 mr-2 font-bold">✓</span>
                      <span>Continuous production lines</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-300 mr-2 font-bold">✓</span>
                      <span>High-speed packaging systems</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-orange-300 mr-2 font-bold">✓</span>
                      <span>Conveyor-based manufacturing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-300 mr-2 font-bold">✓</span>
                      <span>Bottle filling operations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-300 mr-2 font-bold">✓</span>
                      <span>Automated material processing</span>
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
            Precision Cutting Solutions
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4 text-gray-600">
                Our flying shear machines represent cutting-edge technology for
                industrial applications requiring high-speed, precise material
                cutting without interrupting production flow. The hardened gears
                and built-in lubrication system ensure smooth, quiet operation
                even at maximum speeds.
              </p>
              <p className="text-gray-600">
                With advanced control systems including encoder technology and
                MMI interfaces, operators can easily set and adjust cutting
                parameters to achieve perfect results every time.
              </p>
            </div>
            <div>
              <p className="mb-4 text-gray-600">
                Designed for versatility, our shears handle both random in-feed
                and constant feed applications with equal precision. The
                multiple cutting modes allow operators to choose between
                cut-to-length and cut-to-registration options based on specific
                production requirements.
              </p>
              <p className="text-gray-600">
                By maintaining optimal cutting speeds and producing clean,
                straight cuts, our flying shears minimize material waste while
                maximizing throughput - delivering significant productivity
                gains for your operations.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FlyingShearSection;

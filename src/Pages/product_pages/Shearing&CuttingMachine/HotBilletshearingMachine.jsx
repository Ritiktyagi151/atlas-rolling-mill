import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HotBilletShearSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("hot-billet-shear");
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
      id="hot-billet-shear"
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
            Hot Billet Shearing Machines
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 mb-8 leading-relaxed"
          >
            High-temperature cutting solutions for rolling and forging
            operations
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
                High-Temperature Shearing Technology
              </h3>
              <p className="text-gray-600 mb-4">
                Our heavy-duty hot billet shearing machines are specifically
                designed for material preparation in demanding rolling and
                forging operations. These robust machines efficiently cut
                billets and slabs in high-temperature conditions, with
                capacities ranging from 50mm to 175mm MS square shearing.
              </p>
              <p className="text-gray-600">
                Engineered for rolling mill applications, our hot shears
                incorporate heavy-duty double spherical bearings and GM bushes
                in the main and back shafts, ensuring reliable operation even in
                extreme thermal conditions.
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-orange-600 mb-4">
                High-Temp Cutting Features
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                    1
                  </span>
                  <span>Mechanical both type operation for versatility</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                    2
                  </span>
                  <span>Precision-engineered for hot cutting applications</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                    3
                  </span>
                  <span>Thermal-resistant components for durability</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                    4
                  </span>
                  <span>
                    Handles various hot materials (alloy/mild steels, aluminum,
                    brass)
                  </span>
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
                  <h4 className="font-semibold mb-2 text-orange-100">Design</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-orange-100 mr-2 font-bold">•</span>
                      <span>Compact and sturdy construction</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-100 mr-2 font-bold">•</span>
                      <span>
                        Best quality materials and precise engineering
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-100 mr-2 font-bold">•</span>
                      <span>Heavy-duty thermal-resistant bearings</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-orange-100">
                    Integration
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-orange-100 mr-2 font-bold">•</span>
                      <span>Suitable for single and double line furnaces</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-100 mr-2 font-bold">•</span>
                      <span>Easy installation in rolling mill setups</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-100 mr-2 font-bold">•</span>
                      <span>Modern technology integration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-4 text-orange-400">
                Operational Benefits
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-orange-300 mr-2 font-bold">✓</span>
                      <span>Uniform shearing of hot materials</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-300 mr-2 font-bold">✓</span>
                      <span>Precise adjustment for perfect cuts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-300 mr-2 font-bold">✓</span>
                      <span>Hassle-free high-temperature operation</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-orange-300 mr-2 font-bold">✓</span>
                      <span>Reduced material waste</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-300 mr-2 font-bold">✓</span>
                      <span>Increased production efficiency</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-300 mr-2 font-bold">✓</span>
                      <span>Reliable performance in extreme conditions</span>
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
            High-Temp Material Processing
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4 text-gray-600">
                Our hot billet shearing machines are specifically engineered to
                withstand the extreme conditions of high-temperature material
                processing. The thermal-resistant components and precision
                engineering ensure consistent performance when cutting hot
                billets for rolling or forging operations.
              </p>
              <p className="text-gray-600">
                The mechanical both-type operation provides flexibility for
                various production scenarios, while the compact yet sturdy
                design allows for efficient integration into both single and
                double line furnace setups.
              </p>
            </div>
            <div>
              <p className="mb-4 text-gray-600">
                Designed to handle a wide range of hot materials including alloy
                steels, mild steels, aluminum, and brass, our shearing machines
                deliver uniform cuts that are essential for proper material
                feeding into subsequent processing stages.
              </p>
              <p className="text-gray-600">
                With their robust construction and high-quality components, our
                hot billet shearing machines offer reliable, long-lasting
                performance that maximizes productivity while minimizing
                downtime in your high-temperature material processing
                operations.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HotBilletShearSection;

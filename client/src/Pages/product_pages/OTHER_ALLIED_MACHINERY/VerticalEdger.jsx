import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const VerticalEdgerSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("vertical-edger");
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
      id="vertical-edger"
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
            Vertical Edger
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 mb-8 leading-relaxed"
          >
            Precision edge trimming solutions for rolling mills
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
                Advanced Edge Trimming Technology
              </h3>
              <p className="text-gray-600 mb-4">
                Our Vertical Edgers are available in both 2-saw and 3-saw configurations, offering flexible edge trimming solutions. The independent saw collar shifting mechanism provides precise control for various material dimensions.
              </p>
              <p className="text-gray-600">
                Designed for optimal performance, our edgers feature hydraulic cylinder operation for saw shifting and multiple drive options including direct electric motor drive or belt-driven gearbox configurations.
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-orange-600 mb-4">
                Configuration Options
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">1</span>
                  <span>2-saw configuration with independent collar shifting</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">2</span>
                  <span>3-saw configuration with bottom/middle saw independence</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">3</span>
                  <span>Fixed width spacer for top saw attachment</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">4</span>
                  <span>Electric motor direct drive or belt-driven gearbox options</span>
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
              <h3 className="text-2xl font-bold mb-4">Technical Specifications</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-orange-100 mr-2 font-bold">•</span>
                      <span><strong>Motor:</strong> 3PH 1750 RPM, 40-125 HP</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-100 mr-2 font-bold">•</span>
                      <span><strong>Saws:</strong> 2-5 saw configurations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-100 mr-2 font-bold">•</span>
                      <span><strong>Saw Size:</strong> 20"-24" diameter</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-100 mr-2 font-bold">•</span>
                      <span><strong>Mandrel:</strong> 2 3/16" round key bearings</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-orange-100 mr-2 font-bold">•</span>
                      <span><strong>Collars:</strong> Cast iron construction</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-100 mr-2 font-bold">•</span>
                      <span><strong>Cut Depth:</strong> 6" (20") to 8" (24")</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-100 mr-2 font-bold">•</span>
                      <span><strong>Max Width:</strong> 26" (2-saw)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-100 mr-2 font-bold">•</span>
                      <span><strong>Weight:</strong> Approx. 1100kg</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-4 text-orange-400">
                Key Features
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-orange-300 mr-2 font-bold">✓</span>
                      <span>Hydraulic cylinder saw shifting (2" bore)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-300 mr-2 font-bold">✓</span>
                      <span>Factory-made collar bearings with grease fittings</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-300 mr-2 font-bold">✓</span>
                      <span>Optional gearbox/V-belt drive</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-orange-300 mr-2 font-bold">✓</span>
                      <span>2 3/16" diameter float/shifting rod</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-300 mr-2 font-bold">✓</span>
                      <span>Custom spacer dimensions available</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-300 mr-2 font-bold">✓</span>
                      <span>Compact 79" overall height</span>
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
            Precision Edge Control
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4 text-gray-600">
                Our Vertical Edgers are engineered for precise edge control in demanding rolling mill environments. The hydraulic shifting system provides quick, accurate saw positioning while the robust cast iron collars ensure stability during operation.
              </p>
              <p className="text-gray-600">
                The direct motor drive or belt-driven gearbox options offer flexibility for different mill configurations. With saw sizes ranging from 20" to 24" and configurations from 2 to 5 saws, we can provide the perfect solution for your specific edge trimming requirements.
              </p>
            </div>
            <div>
              <p className="mb-4 text-gray-600">
                The 2 3/16" diameter float shaft provides smooth operation while maintaining precise alignment. Our vertical edgers are designed for easy maintenance with accessible grease fittings and factory-made bearings that extend service life.
              </p>
              <p className="text-gray-600">
                Whether you need standard configurations or custom solutions, our Vertical Edgers deliver the performance, precision, and durability needed for modern rolling mill operations, ensuring clean, consistent edges on your finished products.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VerticalEdgerSection;
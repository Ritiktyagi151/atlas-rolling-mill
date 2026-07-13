import { motion } from "framer-motion";
import { FiArrowUpRight, FiZap } from "react-icons/fi";

const SpeedIncreaserGearbox = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.span 
            initial={{ y: -20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-orange-500 font-medium text-lg uppercase tracking-wider mb-2"
          >
            Power Transmission Solutions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
          >
            <span className="text-orange-500">Speed Increaser</span> Gearbox
          </motion.h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
        </div>

        {/* Product Description */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-12 border-l-4 border-orange-500"
        >
          <div className="flex items-start mb-4">
            <FiZap className="text-orange-500 text-2xl mr-3 mt-1" />
            <h3 className="text-xl font-bold text-gray-800">High-Performance Speed Amplification</h3>
          </div>
          <div className="space-y-4 text-gray-700 pl-9">
            <p>
              Our industrial-grade Speed Increaser Gearboxes deliver precise speed amplification 
              from 2 HP to 3000 HP capacity. Engineered for demanding applications, they feature 
              robust construction and optimal efficiency.
            </p>
            <p>
              Specifically designed for bar mills, these units are installed between intermediate 
              mill stands to boost output speed while maintaining torque integrity.
            </p>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200"
          >
            <div className="flex items-start">
              <FiArrowUpRight className="text-orange-600 text-xl mt-1 mr-3 flex-shrink-0" />
              <p className="text-orange-800">
                <strong>Key Benefit:</strong> Modular design allows for custom ratios and 
                configurations to match your exact operational requirements.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Features/Specifications */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          <div className="bg-orange-50 rounded-xl p-6 border border-orange-100 shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
              Core Specifications
            </h3>
            <ul className="space-y-3">
              {[
                "Custom speed ratios for mill requirements",
                "Single/Double input with multiple output options",
                "Forged EN-Series gear materials",
                "Premium spherical roller bearings",
                "Centralized lubrication system",
                "Constant speed transmission"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="flex items-start text-gray-700"
                >
                  <span className="text-orange-500 mr-2 mt-1">▸</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="bg-orange-50 rounded-xl p-6 border border-orange-100 shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
              Operational Advantages
            </h3>
            <ul className="space-y-3">
              {[
                "Ultra-low noise operation (<75dB)",
                "High efficiency (up to 98%)",
                "Wide reduction ratio range",
                "Enhanced torque output",
                "Dual-speed capability",
                "Maintenance-free operation",
                "Continuous duty rating",
                "Precision-engineered components"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="flex items-start text-gray-700"
                >
                  <span className="text-orange-500 mr-2 mt-1">▸</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Application Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-xl p-8 text-white shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <FiZap className="mr-3 text-orange-300" />
            Industrial Applications
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Steel Rolling Mills",
                desc: "Speed synchronization between stands",
                icon: "⚙️"
              },
              {
                title: "Metal Processing",
                desc: "Precision speed control in production lines",
                icon: "🔧"
              },
              {
                title: "Heavy Machinery",
                desc: "Power transmission optimization",
                icon: "🏗️"
              }
            ].map((app, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm border border-orange-400 border-opacity-30"
              >
                <div className="text-3xl mb-3">{app.icon}</div>
                <h4 className="font-bold text-orange-500 text-lg mb-2">{app.title}</h4>
                <p className="text-orange-400">{app.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SpeedIncreaserGearbox;
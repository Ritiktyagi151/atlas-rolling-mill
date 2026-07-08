import { motion } from "framer-motion";
import { FiThermometer, FiRefreshCw, FiSettings } from "react-icons/fi";

const CoolingBedSection = () => {
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
            Steel Mill Solutions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
          >
            Industrial <span className="text-orange-500">Cooling Bed</span> Systems
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
            <FiThermometer className="text-orange-500 text-2xl mr-3 mt-1" />
            <h3 className="text-xl font-bold text-gray-800">Precision Cooling Technology</h3>
          </div>
          <div className="space-y-4 text-gray-700 pl-9">
            <p>
              Our cooling beds provide natural cooling and cross-transfer of materials to the discharge end. 
              Designed with standardized elements, they can be customized to match your plant's product mix 
              and production capacity requirements.
            </p>
            <p>
              Featuring full mechanical component standardization, our cooling beds guarantee consistent 
              equipment quality and high performance. We offer various entry configurations including lifting 
              aprons with natural braking, magnetic braking, or twin channel mechanical braking systems.
            </p>

            {/* Cooling Types */}
            <div className="mt-6 space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 bg-orange-50 p-4 rounded-lg border border-orange-100">
                  <h4 className="font-bold text-orange-600 flex items-center mb-2">
                    <FiSettings className="mr-2" />
                    Automatic Rake Type
                  </h4>
                  <p className="text-gray-700">
                    Transfers material by one pitch per rake movement, featuring twin channel bar delivery 
                    systems or apron-type diverters with integrated bar alignment.
                  </p>
                </div>
                <div className="flex-1 bg-orange-50 p-4 rounded-lg border border-orange-100">
                  <h4 className="font-bold text-orange-600 flex items-center mb-2">
                    <FiRefreshCw className="mr-2" />
                    Turn-over Type
                  </h4>
                  <p className="text-gray-700">
                    Rotates alloy steel bars one full revolution per rake movement, ensuring superior 
                    straightness and uniform cooling for enhanced metallurgical properties.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
              Technical Specifications
            </h3>
            <ul className="space-y-3">
              {[
                "Size range: 9.5m to 66m (custom lengths available)",
                "Commissioned over 10 automatic beds across India",
                "Rack design for uniform air-cooling of TMT bars",
                "Phased material transport from entry to discharge",
                "Front-end leveling for precise cold shearing",
                "600°C capacity straightening racks with cast iron toothed blocks"
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
              Operational Features
            </h3>
            <ul className="space-y-3">
              {[
                "Movable rack mechanism with X-Y axis movement",
                "Profile-cut racks accommodate all bar sizes",
                "Fixed rack system for smooth material transfer",
                "Dual parallel drive shafts with motorized operation",
                "Motorized bar-aligning rollers at discharge end",
                "Configurable for slow/forced cooling options",
                "Twin channel systems for high-speed operations",
                "Insulated covers for controlled cooling rates"
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

        {/* Cooling Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-xl p-8 text-white shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <FiThermometer className="mr-3 text-orange-300" />
            Advanced Cooling Options
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Natural Air Cooling",
                desc: "Standard configuration for most steel grades",
                icon: "🌬️"
              },
              {
                title: "Water Spray Systems",
                desc: "Forced cooling for rapid temperature reduction",
                icon: "💧"
              },
              {
                title: "Insulated Chambers",
                desc: "Slow cooling for specialized alloys",
                icon: "🛡️"
              }
            ].map((option, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm border border-orange-400 border-opacity-30"
              >
                <div className="text-3xl mb-3">{option.icon}</div>
                <h4 className="font-bold text-orange-200 text-lg mb-2">{option.title}</h4>
                <p className="text-orange-100">{option.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CoolingBedSection;
import { motion } from "framer-motion";
import { FiPhoneCall } from "react-icons/fi";

const IndustrialServices = () => {
  return (
    <>
      {/* Gearbox Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.span 
              initial={{ y: -20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-orange-500 font-medium text-lg uppercase tracking-wider mb-2"
            >
              Our Industry Solutions
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
            >
              Reduction Cum Pinion Gearbox
            </motion.h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
          </div>

          {/* Product Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg shadow-md p-8 mb-12 border-l-4 border-orange-500"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Product Description</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                A reduction gear box is used to reduce an input speed to a slower output speed while increasing output torque. 
                This robust system consists of interconnected rotating gears that transmit power while modifying motion and torque characteristics.
              </p>
              <p>
                We specialize in manufacturing single-stage, double-stage, and multistage gear boxes with customized output configurations 
                to meet your specific operational requirements. Our solutions are engineered for reliability in the most challenging environments.
              </p>
              <p>
                Featuring horizontal split case design for maintenance accessibility, our gearboxes incorporate large diameter output shafts 
                and heavy-duty bearings to maximize overhung load capacity.
              </p>
            </div>
          </motion.div>

          {/* Features/Specifications */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="bg-orange-50 rounded-lg p-6 border border-orange-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Construction Details</h3>
              <ul className="space-y-3">
                {[
                  "Housing: Steel fabricated with M.I.G. welding, stress-relieved in oil-fired furnace",
                  "Gear Material: Forged EN-9, EN-19, EN-24 Steel blanks",
                  "Gear Types: Spur, Single & Double Helical Gears up to 2500mm diameter",
                  "Pinion Material: EN-24 with proper heat treatment",
                  "Shaft ends accurately ground for precision",
                  "Double helical teeth cut on imported hobbing machine",
                  "Gear Couplings hydraulically fitted in shafts"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="flex items-start text-gray-700"
                  >
                    <span className="text-orange-500 mr-2 mt-1">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="bg-orange-50 rounded-lg p-6 border border-orange-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Specifications</h3>
              <ul className="space-y-3">
                {[
                  "Input Load Range: 200 HP to 2000 HP (6000 HP peak capacity)",
                  "Sizes: 6” to 30” (150mm to 750mm PCD as required)",
                  "Ratio: Custom configurations from 1:1 to mill requirements",
                  "Speed Range: 50 RPM to 1500 RPM operation",
                  "Anchor Bolts: Carbon Steel construction",
                  "Forced lubrication system for bearings and pinion teeth",
                  "Oil seals to prevent leakage at shaft ends",
                  "Transparent inspection windows on both sides"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="flex items-start text-gray-700"
                  >
                    <span className="text-orange-500 mr-2 mt-1">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-12 bg-gray-800"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 md:mb-0 md:w-1/2"
            >
              <h3 className="text-2xl font-bold text-white mb-2">Let's Get in Touch!</h3>
              <h3 className="text-xl text-orange-300">Have any queries? We're here to help</h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center bg-orange-500 rounded-lg p-4 shadow-lg"
            >
              <div className="bg-white p-3 rounded-full mr-4">
                <FiPhoneCall className="text-orange-500 text-2xl" />
              </div>
              <div>
                <h4 className="text-white font-medium">Call us</h4>
                <a 
                  href="tel:+917888686115" 
                  className="text-white text-xl font-bold hover:text-gray-100 transition-colors"
                >
                  +91 78886 86115
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default IndustrialServices;
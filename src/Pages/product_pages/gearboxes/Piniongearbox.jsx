import { motion } from "framer-motion";
import { FiPhoneCall } from "react-icons/fi";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const PinionGearboxSection = () => {
  return (
    <>
      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-6xl mx-auto text-center mb-12"
          >
            <motion.span 
              variants={fadeIn}
              className="text-orange-500 font-semibold text-lg tracking-wider"
            >
              Our Industry
            </motion.span>
            <motion.h2 
              variants={fadeIn}
              className="text-4xl font-bold text-gray-800 mt-2 mb-6"
            >
              Pinion Gearbox
            </motion.h2>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg mb-12"
            >
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  A Pinion Gearbox is a critical component in rolling mills and industrial machinery, designed to efficiently transmit power and control rotational motion. Our precision-engineered gearboxes feature high-quality gears that ensure smooth torque transmission while minimizing energy loss and maximizing performance.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="border-l-4 border-orange-500 pl-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Industrial Applications</h3>
                    <p>
                      ATLAS pinion gearboxes are widely used in steel rolling mills, paper mills, cement plants, and other heavy-duty industrial applications. They play a vital role in synchronizing roller movement and ensuring uniform material processing.
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Engineering Excellence</h3>
                    <p>
                      Manufactured with precision engineering from high-grade materials, our pinion gearboxes offer exceptional durability, high load-bearing capacity, and superior resistance to wear and tear in demanding environments.
                    </p>
                  </div>
                </div>

                <div className="mt-8 bg-gray-100 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Key Advantages</h3>
                  <ul className="mt-3 grid grid-cols-2 gap-2">
                    {[
                      "Robust construction for heavy loads",
                      "Advanced lubrication systems",
                      "Minimal maintenance requirements",
                      "Customizable configurations",
                      "Precision gear alignment",
                      "Long service life",
                      "Energy efficient operation",
                      "Vibration damping"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-orange-500 mr-2 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-orange-500"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Features & Specifications</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3">
                    {[
                      "Precision engineered for optimal performance",
                      "Speed reduction capability with torque multiplication",
                      "Multiple gear configurations for force transmission",
                      "Double/Triple output shaft options available",
                      "Heavy-duty construction for overload conditions",
                      "Stress-relieved and precision-aligned casing",
                      "Ultrasonic tested gears for superior quality",
                      "Precision pitch measurement and verification"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-orange-500 rounded-full p-1 mr-3 mt-1"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <ul className="space-y-3">
                    {[
                      "Horizontal split-type housing design",
                      "MIG welded structure with NDT testing",
                      "Forged alloy steel gear construction",
                      "Precision ground gear teeth",
                      "Customizable mounting configurations",
                      "Advanced sealing systems",
                      "Temperature-resistant lubrication",
                      "Vibration analysis during testing",
                      "Load testing certification",
                      "ISO 9001 compliant manufacturing"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-orange-500 rounded-full p-1 mr-3 mt-1"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="mt-8 bg-gradient-to-r from-orange-500 to-amber-500 p-6 rounded-lg text-white"
              >
                <h4 className="text-xl font-bold mb-3">Custom Engineering Solutions</h4>
                <p>
                  Our pinion gearboxes can be custom-designed to meet your specific torque, speed, and mounting requirements. With our engineering expertise, we can develop solutions for even the most demanding industrial applications, ensuring optimal performance and reliability.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto"
          >
            <motion.div 
              variants={fadeIn}
              className="md:w-1/2 mb-8 md:mb-0"
            >
              <h3 className="text-3xl font-bold mb-4">Precision Power Transmission</h3>
              <h3 className="text-2xl text-orange-300">Need industrial gearbox solutions?</h3>
              <p className="mt-4 text-gray-300">
                Our engineering team specializes in high-performance pinion gearboxes for demanding industrial applications. Contact us to discuss your specific requirements.
              </p>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              className="md:w-1/2"
            >
              <div className="bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-orange-500 p-3 rounded-full mr-4">
                    <FiPhoneCall className="text-white text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Call our gearbox experts</h4>
                    <a 
                      href="tel:+917888686115" 
                      className="text-orange-400 hover:text-orange-300 text-2xl font-bold transition-colors duration-200"
                    >
                      +91 78886 86115
                    </a>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-xl font-bold mb-3">Request technical specifications:</h4>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center">
                    <span>Get Gearbox Details</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PinionGearboxSection;
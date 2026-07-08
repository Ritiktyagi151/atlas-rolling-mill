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

const ReductionGearboxSection = () => {
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
              Reduction Gearbox
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
                  ATLAS ROLLING MILL MFG.CO. offers an extensive range of robust Reduction Gear Boxes designed to perform in severe industrial conditions. Available in various configurations to meet diverse application requirements, our gearboxes are renowned for their hassle-free operation and low maintenance needs.
                </p>

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Product Description</h3>
                
                <p>
                  We specialize in manufacturing high-performance Reduction Gear Boxes for rolling mills ranging from 6" to 36". Engineered for durability and smooth operation, these gearboxes are the preferred choice for demanding industrial applications, particularly in rerolling mills and stress-relieved fabrication environments.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="border-l-4 border-orange-500 pl-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Manufacturing Excellence</h3>
                    <p>
                      Our state-of-the-art production facilities include continuous MIG welding and stress-relieving capabilities, along with dedicated gearbox testing facilities. This ensures optimal performance across our complete range from 2 HP to 3000 HP gearboxes.
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Custom Solutions</h3>
                    <p>
                      We offer up to 4-stage reduction gearboxes with single or double output configurations. Manufactured from premium forged alloy steel sourced from trusted suppliers, these gearboxes can be customized to meet specific technical requirements.
                    </p>
                  </div>
                </div>

                <div className="mt-8 bg-gray-100 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Key Applications</h3>
                  <ul className="mt-3 grid grid-cols-2 gap-2">
                    {[
                      "Steel rolling mills",
                      "Metal processing plants",
                      "Mining equipment",
                      "Power generation",
                      "Marine propulsion",
                      "Cement industry",
                      "Paper manufacturing",
                      "Heavy machinery"
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
                      "Precision-matched gears with proportional tooth count",
                      "Torque multiplication with speed reduction",
                      "2:1 speed reduction ratio capability",
                      "Closed system maintaining constant input/output power",
                      "Heavy-duty construction for overload protection",
                      "MIG welded structure with NDT testing",
                      "Ultrasonic tested alloy steel gears",
                      "Precision ground gear teeth"
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
                      "Hardened and ground gear surfaces",
                      "Precision pitch measurement",
                      "Multiple reduction stages (up to 4)",
                      "Single/double output configurations",
                      "Forged alloy steel construction",
                      "Efficient power transmission",
                      "Low maintenance design",
                      "Customizable mounting options",
                      "Temperature-resistant lubrication",
                      "Vibration-damped operation"
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
                <h4 className="text-xl font-bold mb-3">Engineering Excellence</h4>
                <p>
                  Our reduction gearboxes undergo rigorous testing including load testing, thermal imaging, and vibration analysis to ensure reliable performance in the most demanding industrial environments. Each unit is precision-engineered to deliver optimal torque transmission with minimal energy loss.
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
              <h3 className="text-3xl font-bold mb-4">Power Transmission Solutions</h3>
              <h3 className="text-2xl text-orange-300">Need custom reduction gearboxes?</h3>
              <p className="mt-4 text-gray-300">
                Our engineering team can design and manufacture precision reduction gearboxes tailored to your specific torque and speed requirements.
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
                    <h4 className="text-xl font-bold">Call our gearbox specialists</h4>
                    <a 
                      href="tel:+917888686115" 
                      className="text-orange-400 hover:text-orange-300 text-2xl font-bold transition-colors duration-200"
                    >
                      +91 78886 86115
                    </a>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-xl font-bold mb-3">Request technical consultation:</h4>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center">
                    <span>Get Gearbox Specifications</span>
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

export default ReductionGearboxSection;
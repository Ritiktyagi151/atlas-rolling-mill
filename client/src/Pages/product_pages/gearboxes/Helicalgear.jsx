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

const HelicalGearsSection = () => {
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
            
            <motion.h2 
              variants={fadeIn}
              className="text-4xl font-bold text-gray-800 mt-2 mb-4"
            >
              Helical Gears
            </motion.h2>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl text-gray-700 font-medium mb-8"
            >
              Providing you the top-notch Single & Double Helical Gears
            </motion.p>
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
                  The Helical gears produced by our production models meet all standards recommended by different gear manufacturing associations (GMA) at both local and international levels. We use world-class raw materials for manufacturing these helical gears, with quality inspection conducted by professionals with specialized knowledge in gear production.
                </p>
                
                <p>
                  We utilize cutting-edge equipment technology and innovative machinery to ensure the highest quality helical gear production, resulting in superior performance and durability.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="border-l-4 border-orange-500 pl-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Material Expertise</h3>
                    <p>
                      We manufacture Helical Gears from premium materials suitable for gear production including alloy steels, cast iron, stainless steel, and specialized alloys. Materials are carefully selected based on gear size, application requirements, and customer specifications.
                    </p>
                    <p className="mt-3">
                      We also produce custom helical gears tailored to specific customer needs and content recommendations.
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Technical Advantages</h3>
                    <p>
                      While spur gears don't generate axial thrust forces, the twist in helical gear teeth creates axial thrust. We address this through proper thrust bearing selection or by manufacturing double helical gears that eliminate thrust forces entirely.
                    </p>
                  </div>
                </div>

                <div className="mt-8 bg-gray-100 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Double Helical Gear Applications</h3>
                  <p>
                    Our double helical gears (herringbone gears) combine the smooth operation of single helical gears with balanced thrust forces. These are particularly valuable in:
                  </p>
                  <ul className="mt-3 grid grid-cols-2 gap-2">
                    {[
                      "Marine propulsion systems",
                      "Heavy equipment manufacturing",
                      "Marine gearboxes",
                      "Steel rolling mills",
                      "Power generation",
                      "Mining equipment",
                      "Oil & gas machinery",
                      "Industrial gearboxes"
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
                      "Smooth and quiet operation with reduced vibration",
                      "Tooth count proportional to gear circumference (larger diameter = more teeth)",
                      "High-speed capability with exceptional durability",
                      "Superior loading capacity compared to spur gears",
                      "Precision teeth grinding on Höfler gear grinders",
                      "Post-operation quality checks including surface finish and geometrical accuracy",
                      "70% minimum contact pattern with mating parts",
                      "Backlash verification within strict tolerances"
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
                      "Apex verification for shrink fits",
                      "Precision center distance maintenance",
                      "Material: 18CrNiMo6 high-strength alloy steel",
                      "Teeth cutting with proper grinding allowance",
                      "Manufactured using premium tooling (Seco, Sandvik)",
                      "Precision edge finishing",
                      "Ultrasonic testing for superior finish verification",
                      "Heavy-duty design for overload protection",
                      "Precision pitch measurement and verification",
                      "Thrust-balanced double helical options available"
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
                <h4 className="text-xl font-bold mb-3">Precision Gear Manufacturing</h4>
                <p>
                  Our helical gears undergo rigorous quality control including coordinate measuring machine (CMM) inspection, hardness testing, and metallurgical analysis to ensure they meet the most demanding industrial applications.
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
              <h3 className="text-3xl font-bold mb-4">Ready for Precision Gearing Solutions?</h3>
              <h3 className="text-2xl text-orange-300">Contact our gear specialists today</h3>
              <p className="mt-4 text-gray-300">
                Whether you need standard or custom helical gear solutions, our engineering team can provide the perfect gearing components for your application.
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
                    <h4 className="text-xl font-bold">Call our gear experts</h4>
                    <a 
                      href="tel:+917888686115" 
                      className="text-orange-400 hover:text-orange-300 text-2xl font-bold transition-colors duration-200"
                    >
                      +91 78886 86115
                    </a>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-xl font-bold mb-3">Request gear specifications:</h4>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center">
                    <span>Get Gear Technical Data</span>
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

export default HelicalGearsSection;
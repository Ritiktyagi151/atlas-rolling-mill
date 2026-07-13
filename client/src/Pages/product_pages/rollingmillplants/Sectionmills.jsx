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

const SectionRollingMills = () => {
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
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <motion.h2 
              variants={fadeIn}
              className="text-4xl font-bold text-gray-800 mt-2"
            >
              Section Rolling Mill Plants
            </motion.h2>
            <motion.h4
              variants={fadeIn}
              className="text-xl text-gray-600 mt-3 mb-6"
            >
              For Light, Medium And Heavy Section, Rails And Special Shapes
            </motion.h4>
            
            <motion.div variants={fadeIn} className="text-left">
              <h3 className="text-orange-500 font-semibold text-lg mb-2">Product Description</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Any green-field complete rolling mill for the most respected and biggest corporations has the aim to cope with the rising demand of steel sections for the building construction industry. This has been the task that ATLAS ROLLING MILL MFG.CO. has been called to fulfill as technological partner for engineering and manufacturing of state-of-the-art long products rolling mills. Expectations have always been met and exceeded, and the long lasting relations with our customers continue with reciprocal satisfaction.
              </p>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                These Mills can be Fully Automatic, Semi Automatic & Manual Production Units, designed to meet diverse industrial requirements.
              </p>
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-orange-500"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Typical Configuration for Section Rolling Mill</h3>
              <ul className="space-y-3">
                {[
                  "Re-heating furnace",
                  "Break down Mill up to 5 MW mill",
                  "Continuous train with universal UNI-H stands and 3 edger, all of cartridge type",
                  "Walking beam type cooling bed",
                  "In-line straightening, cantilever or double supported type",
                  "Band saws",
                  "Automatic stacker & Automatic tying stations",
                  "Weighting and storing area",
                  "Advanced PLC control systems",
                  "Hydraulic and pneumatic systems",
                  "Roll changing devices",
                  "Material handling systems",
                  "Quality inspection stations"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-orange-500 mr-2 mt-1">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right Column */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-orange-500"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Features & Specifications</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Diameter: 6mm to 40 mm",
                  "Material Grade: Low and medium carbon steel",
                  "Finished Size: Light, Medium & Heavy sections",
                  "Type: Fully Automatic, Semi Automatic & Manual",
                  "Finished Products: Flats, Angles, C-Channel, H-Beam, I-Beam, Rails",
                  "Production Capacity: 60,000 TPA – 500,000+ TPA",
                  "Precision rolling with ±0.5mm tolerance",
                  "Energy efficient motor systems",
                  "Customizable production line configurations",
                  "Easy Maintenance with modular design",
                  "Equipped with all safety features",
                  "User-friendly operation with training provided",
                  "Highly efficient continuous operation",
                  "Durable construction with premium components",
                  "Optional automation packages available"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-orange-500 mr-2 mt-1">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-orange-500 to-amber-500 p-6 rounded-lg text-white"
              >
                <h4 className="text-xl font-bold mb-2">Advanced Section Rolling Solutions</h4>
                <p>Our section rolling mills incorporate the latest German and Japanese technologies adapted for Indian manufacturing conditions, delivering precision, efficiency, and reliability for your structural steel production needs.</p>
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
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <motion.div 
              variants={fadeIn}
              className="md:w-1/2 mb-8 md:mb-0"
            >
              <h3 className="text-3xl font-bold mb-4">Let's Get in Touch!</h3>
              <h3 className="text-2xl text-orange-300">Need expert advice on section rolling mills?</h3>
              <p className="mt-4 text-gray-300">
                Our engineering team specializes in custom solutions for light, medium, and heavy section production. Contact us to discuss your specific requirements.
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
                    <h4 className="text-xl font-bold">Call our specialists</h4>
                    <a 
                      href="tel:+917888686115" 
                      className="text-orange-400 hover:text-orange-300 text-2xl font-bold transition-colors duration-200"
                    >
                      +91 78886 86115
                    </a>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-xl font-bold mb-3">Request more information:</h4>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center">
                    <span>Get Technical Specifications</span>
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

export default SectionRollingMills;
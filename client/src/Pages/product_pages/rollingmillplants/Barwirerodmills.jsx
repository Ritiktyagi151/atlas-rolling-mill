import { motion } from "framer-motion";
import { FiPhoneCall } from "react-icons/fi";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Barwirerodmills = () => {
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
              className="text-4xl font-bold text-gray-800 mt-2 mb-6"
            >
              Bar & Wire Rod Rolling Mills
            </motion.h2>

            <motion.p
              variants={fadeIn}
              className="text-gray-600 mb-6 leading-relaxed"
            >
              ATLAS ROLLING MILL MFG.CO. has manufactured, installed and
              commissioned dozens of turn-key hot rolling mills for leading
              rebar manufacturers and wire-rod manufacturers. Our technical
              solutions, both mechanical and automation, combined with flawless
              project execution have significantly enhanced our customers'
              competitiveness, earning the trust of the most demanding steel
              industry leaders.
            </motion.p>

            <motion.p
              variants={fadeIn}
              className="text-gray-600 mb-6 leading-relaxed"
            >
              These Mills can be Fully Automatic, Semi Automatic & Manual
              Production Units, tailored to meet your specific production needs.
            </motion.p>

            <motion.p
              variants={fadeIn}
              className="text-gray-600 mb-8 leading-relaxed"
            >
              We use premium quality MS Ingot/Billet as raw material, with all
              transformation processes to TMT bars supervised by skilled
              professionals. Our commitment is to deliver exceptional return on
              your investment through superior quality and performance.
            </motion.p>
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
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Typical Configuration for TMT Rolling Mill
              </h3>
              <ul className="space-y-3">
                {[
                  "Re-Heating Furnaces",
                  "16–20 Rolling stands arranged in H/V configuration, cartridge type, with or without high-speed finishing blocks",
                  "Crop and dividing start-stop shears",
                  "In-line thermo-processing systems",
                  "Bar High Speed delivery systems",
                  "Bar Low Speed delivery systems",
                  "Bar Cooling beds with associated delivery services",
                  "Cold shears",
                  "Automatic bundling and stacking areas",
                  "Automatic short bars removal systems",
                  "Automatic bar counter and sub-bundling facilities",
                  "In-line bending machines",
                  "Automatic tying, Weighing and collecting area",
                  "Cooling conveyors",
                  "Coil handling areas",
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
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Features & Specifications
              </h3>
              <ul className="space-y-3">
                {[
                  "Diameter: 6mm to 40 mm",
                  "Material Grade: Low, medium, high carbon steel, stainless steel & alloyed steel",
                  "Design: Simple, Compact & Durable",
                  "Type: Fully Automatic, Semi Automatic & Manual",
                  "Finished Products: TMT Bar, Rebar, Round Bars, Wire Rods",
                  "Production Capacity: 60,000 TPA – 300,000+ TPA",
                  "Energy Efficient Operation",
                  "Precision Temperature Control Systems",
                  "Advanced Automation Options Available",
                  "Customizable Production Line Configurations",
                  "Easy Maintenance with Quick Access Points",
                  "Equipped with all safety features",
                  "User-friendly operation with training provided",
                  "Highly efficient continuous operation capability",
                  "Durable construction with premium components",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-orange-500 mr-2 mt-1">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="mt-8 bg-gradient-to-r from-orange-500 to-amber-500 p-6 rounded-lg text-white"
              >
                <h4 className="text-xl font-bold mb-2">
                  Why Choose Our Rolling Mills?
                </h4>
                <p className="mb-4">
                  Our mills combine German engineering precision with robust
                  Indian manufacturing, delivering exceptional performance and
                  longevity.
                </p>
                <p>
                  We provide complete lifecycle support from installation to
                  maintenance, ensuring maximum uptime for your operations.
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
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <motion.div variants={fadeIn} className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-3xl font-bold mb-4">Let's Get in Touch!</h3>
              <h3 className="text-2xl text-orange-300">
                Have questions about our rolling mills?
              </h3>
              <p className="mt-4 text-gray-300">
                Our team of experts is ready to discuss your project
                requirements and provide customized solutions for your steel
                production needs.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="md:w-1/2">
              <div className="bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-orange-500 p-3 rounded-full mr-4">
                    <FiPhoneCall className="text-white text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Call us anytime</h4>
                    <a
                      href="tel:+917888686115"
                      className="text-orange-400 hover:text-orange-300 text-2xl font-bold transition-colors duration-200"
                    >
                      +91 78886 86115
                    </a>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-xl font-bold mb-3">
                    Or request more information:
                  </h4>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                    Contact Our Experts
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

export default Barwirerodmills;

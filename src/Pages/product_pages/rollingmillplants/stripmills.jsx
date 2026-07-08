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

const StripRollingMills = () => {
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
              Strip Rolling Mill Plants
            </motion.h2>
            <motion.h4
              variants={fadeIn}
              className="text-xl text-gray-600 mt-3 mb-6"
            >
              Highest Performance For New And Existing Steel Mills
            </motion.h4>

            <motion.div variants={fadeIn} className="text-left">
              <h3 className="text-orange-500 font-semibold text-lg mb-2">
                Product Description
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The production of hot strip is a key element of steel
                production. Since close to half of all steel produced is
                hot-rolled to strip, mills require maximum throughput and
                availability combined with geometrical precision and the ability
                to create optimum material properties.
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                These Mills can be Fully Automatic, Semi Automatic & Manual
                Production Units, designed to meet the most demanding industrial
                requirements.
              </p>

              <p className="text-gray-600 mb-8 leading-relaxed">
                The production of these coils involves the use of
                state-of-the-art equipment and manufacturing processes that
                ensure products of the highest quality. Our Strip Rolling mill
                is equipped with sizing presses and an automatic line inspection
                facility, guaranteeing precision and consistency in every coil.
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
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Typical Configuration for Strip Rolling Mill
              </h3>
              <ul className="space-y-3">
                {[
                  "Re-Heating Furnaces",
                  "Slab sizing press",
                  "16–20 Rolling stands arranged in H/V configuration",
                  "Differential Speed Crop Shear",
                  "Advanced Coil Box with tension control",
                  "Enhanced strip cooling system with precision nozzles",
                  "Coil handling areas with automated cranes",
                  "Power Cooling Technology for rapid temperature control",
                  "Water cooling line, pinch roll unit",
                  "Cooling bed shear with automatic length measurement",
                  "Automatic tying, Weighting and collecting area",
                  "Surface inspection systems",
                  "Automatic gauge control (AGC) systems",
                  "Profile and flatness measurement",
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
              <ul className="space-y-3 mb-8">
                {[
                  "Billet Size: 110mm x 110mm to 150mm x 150mm",
                  "Thickness: 0.7 mm & Above with ±0.05mm tolerance",
                  "Width: 5″ To 12″ (custom widths available)",
                  "Material Grade: Carbon steels, Alloyed structural steel, Antifriction bearing steel, Spring steel",
                  "Design: Simple, Compact & Durable construction",
                  "Type: Fully Automatic, Semi Automatic & Manual options",
                  "Finished Products: Hot rolled strips, coils, sheets",
                  "Finishing Speed: Up to 90 m/sec with precision control",
                  "Production Capacity: 60,000 TPA – 300,000+ TPA",
                  "Advanced automation with HMI interfaces",
                  "Quick roll changing systems",
                  "Energy efficient drive systems",
                  "Comprehensive safety systems with emergency stops",
                  "User-friendly operation with training provided",
                  "Continuous operation capability with minimal downtime",
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
                <h4 className="text-xl font-bold mb-2">
                  Premium Strip Rolling Technology
                </h4>
                <p>
                  Our strip rolling mills incorporate the latest European and
                  Japanese technologies for precision strip production,
                  featuring advanced automation, superior cooling systems, and
                  exceptional dimensional accuracy for high-quality output.
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
                Need solutions for strip production?
              </h3>
              <p className="mt-4 text-gray-300">
                Our strip mill specialists are ready to discuss your hot rolling
                requirements and provide customized solutions for your steel
                strip production needs.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="md:w-1/2">
              <div className="bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-orange-500 p-3 rounded-full mr-4">
                    <FiPhoneCall className="text-white text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">
                      Call our strip mill experts
                    </h4>
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
                    Request technical details:
                  </h4>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center">
                    <span>Get Strip Mill Brochure</span>
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
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

export default StripRollingMills;

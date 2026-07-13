import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SnapShearSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("snap-shear");
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
      id="snap-shear"
      className="py-16 bg-gradient-to-b from-gray-50 to-white"
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
            Snap Shear Machines
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 mb-8 leading-relaxed"
          >
            Emergency cutting solutions for hot rolling mill breakdowns
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
                Rapid Response Cutting Technology
              </h3>
              <p className="text-gray-600 mb-4">
                Our snap shear machines provide critical emergency cutting capability during rolling mill breakdowns or mis-roll situations. Designed for instant deployment, these specialized shears quickly sever hot rolling stock to prevent equipment damage and minimize production downtime.
              </p>
              <p className="text-gray-600">
                Built with hardened alloy steel components and thermal-resistant materials, our snap shears withstand the extreme conditions of hot rolling operations while delivering reliable performance when you need it most.
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-orange-600 mb-4">
                Emergency Cutting Features
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">1</span>
                  <span>Instantaneous cutting action for emergency situations</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">2</span>
                  <span>Thermal-resistant construction for hot material cutting</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">3</span>
                  <span>Hardened alloy steel blades for extended service life</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">4</span>
                  <span>Quick-deployment design for minimal response time</span>
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
                  <h4 className="font-semibold mb-2 text-orange-100">Construction</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-orange-100 mr-2 font-bold">•</span>
                      <span>Heavy-duty steel frame with thermal shielding</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-100 mr-2 font-bold">•</span>
                      <span>Hardened alloy steel cutting components</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-100 mr-2 font-bold">•</span>
                      <span>High-torque hydraulic or mechanical actuation</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-orange-100">Performance</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-orange-100 mr-2 font-bold">•</span>
                      <span>Millisecond response time</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-100 mr-2 font-bold">•</span>
                      <span>Capable of cutting hot rolling stock up to 300°C</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-100 mr-2 font-bold">•</span>
                      <span>Minimal maintenance requirements</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-4 text-orange-400">
                Operational Benefits
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-orange-300 mr-2 font-bold">✓</span>
                      <span>Prevents equipment damage during mill breakdowns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-300 mr-2 font-bold">✓</span>
                      <span>Minimizes production downtime</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-300 mr-2 font-bold">✓</span>
                      <span>Reduces material waste in emergency situations</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-orange-300 mr-2 font-bold">✓</span>
                      <span>Easy integration with existing mill systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-300 mr-2 font-bold">✓</span>
                      <span>Operator safety features</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-300 mr-2 font-bold">✓</span>
                      <span>Long service life with minimal maintenance</span>
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
            Critical Mill Protection
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4 text-gray-600">
                Our snap shear machines serve as the last line of defense for your rolling mill during breakdowns or mis-roll events. The instantaneous cutting action prevents costly equipment damage by quickly severing the rolling stock, allowing your team to safely address the underlying issue.
              </p>
              <p className="text-gray-600">
                The thermal-resistant construction and hardened alloy steel components ensure reliable operation even when cutting hot materials up to 300°C. The high-torque actuation system delivers the force needed for clean cuts through various rolling stock sizes.
              </p>
            </div>
            <div>
              <p className="mb-4 text-gray-600">
                Designed for quick deployment and easy integration with your existing mill systems, our snap shears provide peace of mind while minimizing both downtime and material waste during unexpected production interruptions.
              </p>
              <p className="text-gray-600">
                With robust construction and minimal maintenance requirements, our snap shear machines represent a smart investment in protecting your mill equipment and maintaining your production efficiency.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SnapShearSection;
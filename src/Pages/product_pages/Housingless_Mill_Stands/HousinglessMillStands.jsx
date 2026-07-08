import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HousinglessMillStandsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("housingless-mill-stands");
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
      id="housingless-mill-stands"
      className="py-16 bg-gradient-to-b from-white to-gray-50"
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
            Housingless Mill Stands
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 mb-8 leading-relaxed"
          >
            Innovative design for improved usability and reduced changeover downtime
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
                Advanced Housingless Technology
              </h3>
              <p className="text-gray-600 mb-4">
                Our housingless stands incorporate all the features that improve usability and reduce changeover downtime, creating stands that simply work and last. Designed for the production of bars, wire rods, and profiles, they cover the whole range of products with different sizes.
              </p>
              <p className="text-gray-600">
                These mills can be configured as fully automatic, semi-automatic, or manual production units, equipped with state-of-the-art equipment and manufacturing processes that ensure the highest quality output.
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-orange-600 mb-4">
                Standard Accessories
              </h4>
              <ul className="space-y-3">
                {[
                  "Pressure Bolts with Worm Wheel Arrangement",
                  "Adjustment Screws and L-Keys",
                  "Wear & Tear Plates for Long Life",
                  "Bearing Chocks / Forged Steel Chocks with Roller/Fiber Bearings",
                  "Universal Couplings / Cast Iron Couplings (Star Grove/Key type)",
                  "Spindle manufactured from Forged Steel (Star/Key type)",
                  "Tie Rods with Nuts & Spacers",
                  "C.I. Foundation Rails with Foundation Bolts",
                  "Tee Bolts with Nuts & Spacers"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
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
              <h3 className="text-2xl font-bold mb-4">Key Features</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <ul className="space-y-2">
                    {[
                      "High Component Rigidity",
                      "Reduced Stress Path",
                      "Fully Automatic Operation",
                      "Axial Roll Adjustment",
                      "Automatic Screw-down System",
                      "Adjustment under load capability"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-orange-100 mr-2 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    {[
                      "Roll balance system eliminates backlash",
                      "Minimum wear with self-balancing spindle support",
                      "Long bearing life",
                      "Automatic utility connections",
                      "MIG welded structure with NDT testing",
                      "Stress relieved and fully machined structure"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-orange-100 mr-2 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-4 text-orange-400">
                Operational Advantages
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <ul className="space-y-2">
                    {[
                      "Quick roll change capability",
                      "Easy maintenance access",
                      "Minimized downtime",
                      "Compact and durable design",
                      "Positive engagement mechanisms",
                      "Precision roll adjustment"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-orange-300 mr-2 font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    {[
                      "Reduced wear components",
                      "Improved product consistency",
                      "Enhanced mill efficiency",
                      "Robust construction",
                      "Flexible configurations",
                      "Reliable long-term performance"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-orange-300 mr-2 font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
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
            Premium Housingless Mill Stand Engineering
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4 text-gray-600">
                Our housingless mill stands are manufactured using technically superior designs and world-class machinery. Under the guidance of our technically experienced director, we produce mill stands renowned for their performance and longevity. Each stand undergoes rigorous quality checks throughout the manufacturing process.
              </p>
              <p className="text-gray-600">
                The roll gap adjustment is manually controlled with a screw-down mechanism, while roll axial adjustment is achieved through side bolts on chock lugs. Our compact designs ensure quick roll changes and easy maintenance to minimize production interruptions.
              </p>
            </div>
            <div>
              <p className="mb-4 text-gray-600">
                The complete structure of our housingless mill stands is stress-relieved and fully machined for optimal performance. We use forged steel chocks with high-quality bearings and universal couplings to suit various operational requirements in bar, rod, and profile production.
              </p>
              <p className="text-gray-600">
                From the innovative roll balance system that eliminates backlash to the self-balancing spindle support that minimizes wear, every component is engineered for maximum durability and reliability in continuous operation. Our housingless stands represent the cutting edge of mill stand technology.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HousinglessMillStandsSection;
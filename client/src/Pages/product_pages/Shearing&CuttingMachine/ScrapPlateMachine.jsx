import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ScrapShearSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("scrap-shear");
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
      id="scrap-shear"
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
            Scrap/Plate Shearing Machines
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 mb-8 leading-relaxed"
          >
            Heavy-duty cutting solutions for scrap processing and re-rolling
            operations
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
                Industrial Scrap Processing Technology
              </h3>
              <p className="text-gray-600 mb-4">
                Our heavy-duty scrap shearing machines are designed for cutting
                various re-rollable materials including plates, rails, beams,
                channels, rounds, angles, and squares in cold conditions. These
                robust machines are essential for mini re-rolling mills and
                scrap processing yards.
              </p>
              <p className="text-gray-600">
                Manufactured with premium components from industry-approved
                suppliers, our shearing machines offer effortless functionality
                and extended service life at competitive prices. Available in 1"
                to 3" shearing capacities, they're ideal for 6-9" mill
                installations.
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-orange-600 mb-4">
                Key Applications
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                    1
                  </span>
                  <span>
                    Processing ship scrap for rolling mill raw material
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                    2
                  </span>
                  <span>Induction melting furnace material preparation</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                    3
                  </span>
                  <span>
                    Scrap yard processing of pipes, angles, and channels
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                    4
                  </span>
                  <span>Cutting sheets, flats, and rounds for recycling</span>
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
              <h3 className="text-2xl font-bold mb-4">
                Technical Specifications
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2 text-orange-100">
                    Construction
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-orange-100 mr-2 font-bold">•</span>
                      <span>Steel fabricated and machined frame</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-100 mr-2 font-bold">•</span>
                      <span>Double bored with pulley-cum-fly wheels</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-100 mr-2 font-bold">•</span>
                      <span>Alloy steel pinions</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-orange-100">
                    Components
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-orange-100 mr-2 font-bold">•</span>
                      <span>EN-8 steel shafts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-100 mr-2 font-bold">•</span>
                      <span>Centralized oil lubrication system</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-100 mr-2 font-bold">•</span>
                      <span>Customizable to customer requirements</span>
                    </li>
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
                    <li className="flex items-start">
                      <span className="text-orange-300 mr-2 font-bold">✓</span>
                      <span>Low power consumption</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-300 mr-2 font-bold">✓</span>
                      <span>Manual and automatic operation options</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-300 mr-2 font-bold">✓</span>
                      <span>Complete ready-to-use systems</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-orange-300 mr-2 font-bold">✓</span>
                      <span>Extended service life</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-300 mr-2 font-bold">✓</span>
                      <span>Effortless operation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-300 mr-2 font-bold">✓</span>
                      <span>Competitive pricing</span>
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
            Efficient Scrap Processing Solutions
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4 text-gray-600">
                Our scrap/plate shearing machines are built to handle the
                toughest recycling and material preparation challenges. The
                robust steel construction combined with precision-machined
                components ensures reliable performance when processing various
                scrap materials for re-rolling or melting operations.
              </p>
              <p className="text-gray-600">
                The double-bored design with alloy steel pinions provides
                exceptional cutting stability, while the centralized lubrication
                system maintains optimal performance of all moving parts. These
                features combine to deliver clean, efficient cuts through even
                the most challenging scrap materials.
              </p>
            </div>
            <div>
              <p className="mb-4 text-gray-600">
                Designed for flexibility, our machines offer both manual and
                automatic operation modes to suit different production
                requirements. The low power consumption makes them
                energy-efficient additions to your scrap processing workflow.
              </p>
              <p className="text-gray-600">
                Whether you're preparing ship scrap for re-rolling or processing
                materials for induction melting, our scrap shearing machines
                deliver the performance, durability, and value needed for modern
                recycling and material recovery operations.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScrapShearSection;

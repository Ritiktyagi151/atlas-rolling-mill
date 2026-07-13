import { motion } from "framer-motion";

const GlobalWorldMapSection = () => {
  // Countries with their coordinates on the SVG map
  const countries = [
    { name: "India", x: 780, y: 140 },
    { name: "USA", x: 150, y: 80 },
    { name: "Germany", x: 570, y: 70 },
    { name: "Japan", x: 950, y: 120 },
    { name: "Egypt", x: 580, y: 150 },
    { name: "Russia", x: 700, y: 70 },
    { name: "Mexico", x: 160, y: 180 },
  ];

  return (
    <section className="py-8 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3 mb-4">
            Global Presence
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl font-medium text-sm mx-auto">
            Trusted by steel manufacturers across the world
          </p>
        </motion.div>

        {/* Map Container */}
        <div className="relative h-auto w-full max-w-6xl mx-auto overflow-hidden">
          {/* SVG Map Background */}
          <img src="public/images/mapbase.svg" alt="World map" className="w-full h-auto" />

          {/* Country Markers */}
          {countries.map((country, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="absolute"
              style={{
                left: `${(country.x / 1280) * 100}%`,
                top: `${(country.y / 360) * 100}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="relative group">
                <div className="w-4 h-4 bg-orange-500 rounded-full border-2 border-white shadow-md transform transition-transform group-hover:scale-125"></div>
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 px-3 py-1 bg-white rounded-full shadow-md text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-gray-800">
                  {country.name}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalWorldMapSection;

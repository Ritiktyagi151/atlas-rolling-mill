import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  FaRocket,
  FaBullseye,
  FaGem,
  FaCheck,
  FaIndustry,
  FaUsers,
  FaGlobe,
  FaAward,
  FaChartLine,
  FaCogs,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { useState, useRef } from "react";
import ImageSlider from "../../components/Clientslider";
import TeamSection from "../home/TeamSection";
import OurVideos from "../home/Ourvideo";

const ManufacturingAboutPage = () => {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rotateX = useTransform(y, [0, 1], [7, -7]);
  const rotateY = useTransform(x, [0, 1], [-7, 7]);

  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xValue = (e.clientX - rect.left) / rect.width;
    const yValue = (e.clientY - rect.top) / rect.height;
    x.set(xValue);
    y.set(yValue);
  };

  const handleLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  const cards = [
    {
      title: "Our Vision",
      description:
        "To be the global leader in rolling mill manufacturing, delivering innovative and sustainable solutions that empower industries worldwide. We envision a future where our technology drives efficiency and sustainability across the metal forming sector.",
      icon: <FaRocket className="text-3xl" />,
      color: "from-amber-500 to-orange-500",
    },
    {
      title: "Our Mission",
      description:
        "To provide high-quality rolling mill equipment through advanced technology, exceptional craftsmanship, and customer-focused service. We commit to continuous innovation that meets the evolving needs of the steel and metal industry while maintaining the highest standards of quality.",
      icon: <FaBullseye className="text-3xl" />,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Our Values",
      description:
        "We are driven by integrity, innovation, and excellence, creating value for our customers, employees, and communities. Our core values include: Quality First, Customer Centricity, Sustainable Growth, and Technological Leadership.",
      icon: <FaGem className="text-3xl" />,
      color: "from-red-500 to-amber-500",
    },
  ];

  const milestones = [
    {
      year: "2005",
      event: "Company Founded",
      description:
        "Established as a small workshop serving local manufacturers",
    },
    {
      year: "2010",
      event: "First Export Order",
      description: "Expanded operations to international markets",
    },
    {
      year: "2019",
      event: "ISO Certification",
      description: "Achieved ISO 9001:2008 quality management certification",
    },
    {
      year: "2020",
      event: "New Facility",
      description: "Opened state-of-the-art 50,000 sq ft manufacturing plant",
    },
    // {
    //   year: "2022",
    //   event: "1000th Installation",
    //   description: "Completed our 1000th rolling mill installation worldwide",
    // },
  ];

  const technologies = [
    {
      name: "Automated Control Systems",
      icon: <FaCogs />,
      description: "Advanced PLC and HMI systems for precise control",
    },
    {
      name: "Predictive Maintenance",
      icon: <FaChartLine />,
      description: "AI-driven maintenance scheduling to minimize downtime",
    },
    {
      name: "Energy Efficiency",
      icon: <FaIndustry />,
      description: "Systems designed to reduce energy consumption by up to 30%",
    },
    {
      name: "Quality Assurance",
      icon: <FaAward />,
      description: "Rigorous testing protocols at every production stage",
    },
  ];

  return (
    <div className="bg-orange-50">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <video
          className="absolute w-full h-full object-cover"
          autoPlay
          muted
          loop
          src="/video/videos/atlasvideolandingpage.mp4"
        ></video>
      </section>

      {/* About Section */}
      <section className="py-6 md:py-8 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-6">
              ATLAS ROLLING MILL MFG.CO.
            </h2>
            <div className="w-20 h-1 bg-amber-500 mb-6"></div>
            <p className="text-gray-700 mb-6">
              ATLAS Rolling Mill Mfg. Co. stands as a pinnacle of quality and
              precision in the steel industry, with over two decades of
              expertise in designing and manufacturing rolling mills. Our
              solutions power industries across 21+ countries, helping shape the
              future of metal forming and processing.
            </p>
            <p className="text-gray-700 mb-8">
              The ISO 9001-2008 certification attests to ATLAS's unwavering
              commitment to quality. Our rolling mills are engineered for
              durability, precision, and efficiency, serving sectors including
              automotive, construction, aerospace, and heavy machinery.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Technology & Innovation",
                "Global Logistics Network",
                "Lean Manufacturing Operations",
                "Quality Assurance Systems",
                "Custom Engineering Solutions",
                "After-Sales Support",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-amber-100 p-2 rounded-full">
                    <FaCheck className="text-amber-600" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <motion.div
              className="relative w-full h-96 rounded-xl overflow-hidden shadow-xl group"
              onMouseMove={handleMove}
              onMouseLeave={handleLeave}
              style={{
                rotateX,
                rotateY,
                perspective: 1000,
                transformStyle: "preserve-3d",
              }}
            >
              <img
                src="images/extra/about-us-image.png"
                alt="ATLAS Factory"
                className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 to-transparent flex items-end p-6">
                <h3 className="text-white text-2xl font-bold">
                  Our 50,000 sq.ft. Manufacturing Facility in Ghaziabad, India
                </h3>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <TeamSection />

      {/* Vision / Mission Section */}
      <section className="py-6 md:py-8 bg-orange-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-4">
              Our Core Principles
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
          </motion.div>

          {isMobile ? (
            <>
              <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                speed={2000}
                autoplay={{ delay: 3000 }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
              >
                {cards.map((item, index) => (
                  <SwiperSlide key={index}>
                    <Card item={item} />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="flex justify-center mt-6 space-x-2">
                {cards.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "bg-amber-600 scale-150 w-4"
                        : "bg-orange-300"
                    }`}
                    onClick={() => swiperRef.current?.slideTo(index)}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {cards.map((item, index) => (
                <Card key={index} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
      <OurVideos />
      {/* Our Journey Section */}
      <section className="py-6 md:py-8 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-4">
              Our Journey
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              From humble beginnings to becoming a global player in rolling mill
              technology
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-0 md:left-1/2 h-full w-1 bg-amber-200 transform -translate-x-1/2"></div>

            <div className="space-y-8 md:space-y-0">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center`}
                >
                  <div
                    className={`md:w-1/2 p-4 ${
                      index % 2 === 0
                        ? "md:pr-8 md:text-right"
                        : "md:pl-8 md:text-left"
                    }`}
                  >
                    <div className="bg-orange-100 p-6 rounded-xl shadow-md">
                      <h3 className="text-xl font-bold text-orange-700">
                        {milestone.event}
                      </h3>
                      <p className="text-amber-600 font-semibold mb-2">
                        {milestone.year}
                      </p>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2 p-4">
                    <div className="h-32"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-6 md:py-8 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-4">
              Our Technological Edge
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Combining cutting-edge technology with decades of engineering
              expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center"
              >
                <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl mb-4">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold text-orange-800 mb-2">
                  {tech.name}
                </h3>
                <p className="text-gray-600">{tech.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 md:p-12">
                <h3 className="text-2xl font-bold text-orange-800 mb-4">
                  Innovation in Rolling Mill Technology
                </h3>
                <p className="text-gray-600 mb-6">
                  Our R&D team continuously develops new solutions to improve
                  rolling mill efficiency, precision, and sustainability. Recent
                  innovations include:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FaCheck className="text-amber-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      AI-powered thickness control systems with ±0.005mm
                      precision
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-amber-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      Energy recovery systems reducing power consumption by 25%
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-amber-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      Modular designs for easier maintenance and upgrades
                    </span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 py-2  flex items-center justify-center ">
                <video
                  src="/images/About-img/abouthomepage1.jpg"
                  alt="Rolling Mill Technology"
                  className="rounded-lg shadow-md max-h-80 object-fill"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-8 md:py-8 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-4">
              Global Reach
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Serving clients across six continents with local support networks
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <div className="bg-orange-50 rounded-xl p-8 shadow-inner">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-3 rounded-full text-white">
                    <FaGlobe className="text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-orange-800">
                    Our Worldwide Network
                  </h3>
                </div>
                <p className="text-gray-700 mb-6">
                  With installations in over 21 countries, ATLAS has established
                  a robust global presence. Our international offices and
                  service centers ensure prompt support wherever your operations
                  are located.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-amber-600 font-bold text-2xl">21+</p>
                    <p className="text-gray-600">Countries</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-amber-600 font-bold text-2xl">20+</p>
                    <p className="text-gray-600">Installations</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-amber-600 font-bold text-2xl">24/7</p>
                    <p className="text-gray-600">Support</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-amber-600 font-bold text-2xl">20+</p>
                    <p className="text-gray-600">Service Engineers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="images/extra/global-map-images.avif"
                alt="ATLAS Global Presence"
                className="rounded-xl shadow-lg h-[450px] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-6 md:py-8 bg-gradient-to-br from-orange-700 to-amber-700 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
            <div className="w-20 h-1 bg-amber-400 mx-auto"></div>
            <p className="text-orange-100 mt-4 max-w-2xl mx-auto">
              The driving force behind our success - combining experience with
              innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-orange-300/20"
            >
              <h3 className="text-xl font-bold mb-4">Engineering Experts</h3>
              <p className="text-orange-100 mb-6">
                Our team includes 50+ mechanical, electrical, and metallurgical
                engineers with an average of 15 years experience in rolling mill
                technology.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center text-orange-800">
                  <FaIndustry />
                </div>
                <span>Specialized in complex custom solutions</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-orange-300/20"
            >
              <h3 className="text-xl font-bold mb-4">Skilled Workforce</h3>
              <p className="text-orange-100 mb-6">
                200+ trained technicians and craftsmen maintaining the highest
                standards of manufacturing precision and quality control.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center text-orange-800">
                  <FaUsers />
                </div>
                <span>Continuous training programs</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-orange-300/20"
            >
              <h3 className="text-xl font-bold mb-4">Leadership</h3>
              <p className="text-orange-100 mb-6">
                Visionary leadership with deep industry knowledge guiding
                ATLAS's strategic direction and innovation roadmap.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center text-orange-800">
                  <FaChartLine />
                </div>
                <span>Committed to sustainable growth</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <ImageSlider />
    </div>
  );
};

// Card Component
const Card = ({ item }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white p-8 rounded-xl shadow-lg h-full flex flex-col"
    >
      <div
        className={`bg-gradient-to-br ${item.color} w-16 h-16 rounded-xl flex items-center justify-center text-white mb-6 mx-auto`}
      >
        {item.icon}
      </div>
      <h3 className="text-xl font-bold text-center text-orange-800 mb-4">
        {item.title}
      </h3>
      <p className="text-gray-600 text-center mb-6 flex-grow">
        {item.description}
      </p>
    </motion.div>
  );
};

export default ManufacturingAboutPage;

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AdvantageCard = ({
  title,
  description,
  icon,
  href,
  delay,
  index,
  onLearnMoreClick,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Color variants based on index
  const colors = [
    {
      bg: "bg-orange-100",
      text: "text-orange-600",
      border: "border-orange-200",
    },
    {
      bg: "bg-orange-100",
      text: "text-orange-600",
      border: "border-orange-200",
    },
    {
      bg: "bg-orange-100",
      text: "text-orange-600",
      border: "border-orange-200",
    },
    {
      bg: "bg-orange-100",
      text: "text-orange-600",
      border: "border-orange-200",
    },
    {
      bg: "bg-orange-100",
      text: "text-orange-600",
      border: "border-orange-200",
    },
    {
      bg: "bg-orange-100",
      text: "text-orange-600",
      border: "border-orange-200",
    },
  ];
  const color = colors[index % colors.length];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5, delay }}
      className={`relative overflow-hidden rounded-xl h-full border ${color.border} shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col`}
    >
      {/* Header with icon */}
      <div
        className={`${color.bg} p-4 sm:p-5 flex items-center space-x-3 sm:space-x-4`}
      >
        <motion.div
          whileHover={{ rotate: 10, scale: 1.1 }}
          className={`p-2 sm:p-3 rounded-full flex-shrink-0 shadow-inner ${color.bg} border ${color.border}`}
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-xl sm:text-2xl">
            {icon}
          </div>
        </motion.div>
        <motion.a
          href={href}
          whileHover={{ x: 5 }}
          className={`text-lg sm:text-xl font-bold ${color.text} hover:opacity-80 transition-colors truncate`}
          title={title}
        >
          {title}
        </motion.a>
      </div>

      {/* Content area */}
      <div className="flex-1 p-4 sm:p-5 flex flex-col">
        <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 line-clamp-3 sm:line-clamp-4">
          {description}
        </p>

        {/* Decorative element */}
        <div className="mt-auto">
          <div
            className={`h-1 w-16 sm:w-20 rounded-full ${color.bg} mb-3 sm:mb-4`}
          ></div>
          <motion.button
            onClick={() => onLearnMoreClick(index)}
            whileHover={{ x: 5 }}
            className={`inline-flex items-center ${color.text} text-sm sm:text-base font-medium cursor-pointer`}
          >
            Learn more
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2"
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
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const DetailModal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="relative bg-white rounded-xl w-full max-w-xs sm:max-w-md md:max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl mx-2"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="p-4 sm:p-6 md:p-8">
          <div
            className={`p-3 sm:p-4 rounded-full inline-flex ${content.color.bg} mb-4 sm:mb-6`}
          >
            <span className="text-2xl sm:text-3xl">{content.icon}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
            {content.title}
          </h3>
          <div className="prose-sm sm:prose text-gray-600">
            {content.details}
          </div>
          <div className="mt-6 sm:mt-8"></div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const AdvantagesSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  const advantages = [
    {
      title: "Expert Craftsmanship",
      description:
        "With decades of experience in rolling mill manufacturing, we deliver precision-engineered solutions built to last. Our skilled craftsmen ensure every component meets exacting standards.",
      details:
        "Atlas Rolling Mill Manufacturing brings over 60 years of combined experience in designing and building rolling mills. Our team of master craftsmen combines traditional metalworking skills with modern manufacturing techniques to create mills that stand the test of time. Every component is precision-machined and rigorously tested before assembly. We use only the highest quality materials, including specialized alloys for high-wear areas. Our mills are known throughout the industry for their durability, precision, and smooth operation. From our machine shop to final assembly, we maintain strict quality control at every step of the manufacturing process.",
      icon: "🛠️",
      href: "/craftsmanship",
      delay: 0.1,
    },
    {
      title: "Custom Solutions",
      description:
        "We specialize in custom-designed rolling mills tailored to your specific production needs. Whether you need a compact mill or industrial-scale solution, we can build it.",
      details:
        "Every metalworking operation has unique requirements, and we pride ourselves on creating fully customized rolling mill solutions. Our engineering team works closely with clients to understand their specific needs - from material types and thicknesses to production volumes and space constraints. We then design mills that optimize for your exact parameters. Our custom capabilities include specialized roll configurations, custom gear ratios, automated thickness controls, and integrated cooling systems. We've built mills for everything from jewelry makers to aerospace manufacturers. The process includes 3D modeling, prototype testing, and on-site installation support to ensure perfect performance.",
      icon: "⚙️",
      href: "/custom-solutions",
      delay: 0.2,
    },
    {
      title: "Quality Materials",
      description:
        "We use only premium-grade steel and alloys in our rolling mills, ensuring durability and consistent performance under heavy industrial use.",
      details:
        "The quality of a rolling mill begins with the materials used in its construction. We source only the finest tool steels and alloys from trusted suppliers, with full material certifications for traceability. Our rolls are made from high-carbon, high-chrome steel that's heat-treated for maximum hardness and wear resistance. The frames are constructed from stress-relieved steel to prevent warping under load. All bearings are premium industrial grade, sized appropriately for the load capacity. We conduct material testing including hardness checks, microstructure analysis, and non-destructive testing to verify quality before machining begins. This commitment to material excellence ensures our mills maintain precision through years of heavy use.",
      icon: "🔩",
      href: "/materials",
      delay: 0.3,
    },
    {
      title: "Reliable Support",
      description:
        "Our commitment doesn't end with delivery. We provide comprehensive after-sales support including maintenance, parts, and technical assistance.",
      details:
        "Atlas Rolling Mill Manufacturing stands behind every product we build with unmatched customer support. Our service team includes factory-trained technicians who understand every aspect of our mills. We maintain an extensive inventory of spare parts for quick turnaround on maintenance needs. Support services include: on-site installation supervision, operator training programs, preventive maintenance planning, and emergency repair services. Our technical support hotline is available for immediate assistance with any operational questions. We also offer upgrade services to extend the capabilities of older mills. Many of our clients have been relying on our mills - and our support - for decades, a testament to our long-term commitment to customer satisfaction.",
      icon: "📞",
      href: "/support",
      delay: 0.4,
    },
  ];

  // Color variants based on index
  const colors = [
    {
      bg: "bg-orange-100",
      text: "text-orange-600",
      border: "border-orange-200",
    },
    {
      bg: "bg-orange-100",
      text: "text-orange-600",
      border: "border-orange-200",
    },
    {
      bg: "bg-orange-100",
      text: "text-orange-600",
      border: "border-orange-200",
    },
    {
      bg: "bg-orange-100",
      text: "text-orange-600",
      border: "border-orange-200",
    },
    {
      bg: "bg-orange-100",
      text: "text-orange-600",
      border: "border-orange-200",
    },
    {
      bg: "bg-orange-100",
      text: "text-orange-600",
      border: "border-orange-200",
    },
  ];

  const handleLearnMoreClick = (index) => {
    const selected = advantages[index];
    setSelectedContent({
      ...selected,
      color: colors[index % colors.length],
    });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4 sm:mb-6"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 ">
            <span className="relative inline-block ">
              Built on <span className="text-orange-600">Trust</span> and{" "}
              <span className="text-orange-600">Performance</span>
              <div className="w-50 h-1 mt-4 bg-orange-500 mx-auto mb-4"></div>
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Precision-engineered rolling mills built for performance,
            durability, and exacting metalworking applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {advantages.map((advantage, index) => (
            <AdvantageCard
              key={index}
              index={index}
              title={advantage.title}
              description={advantage.description}
              icon={advantage.icon}
              href={advantage.href}
              delay={advantage.delay}
              onLearnMoreClick={handleLearnMoreClick}
            />
          ))}
        </div>
      </div>

      <DetailModal
        isOpen={modalOpen}
        onClose={closeModal}
        content={selectedContent}
      />
    </div>
  );
};

export default AdvantagesSection;

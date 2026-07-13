import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const GalaxyPackTechCertifications = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const swiperRef = useRef(null);

  const certifications = [
    {
      id: 1,
      title: "ISO 9001 Certified",
      description: "Quality Management System Certification",
      image:
        "https://laxmielectromech.com/certificates/INCORPORATION%20CERTIFICATE_page-0001.jpg",
    },
    {
      id: 2,
      title: "ISO 14001 Certified",
      description: "Environmental Management System Certification",
      image:
        "https://laxmielectromech.com/certificates/ISO%20IEC%2061439%20-1-2020%20-%20LAXMI%20ELECTROMECH%20PRIVATE%20LIMITED_page-0001.jpg",
    },
    {
      id: 3,
      title: "OHSAS 18001 Certified",
      description: "Occupational Health and Safety Certification",
      image:
        "https://laxmielectromech.com/certificates/LAXMI%20ELECTROMECH%20EMS_page-0001.jpg",
    },
    {
      id: 4,
      title: "MSME Registered",
      description: "Ministry of Micro, Small & Medium Enterprises",
      image:
        "https://laxmielectromech.com/certificates/MSME%20CERTIFICATE_page-0001.jpg",
    },
  ];

  const onSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const goToSlide = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="relative py-10 overflow-hidden bg-gray-900">
      {/* Fixed Background */}
      <div className="absolute inset-0 opacity-90">
        <div className="absolute inset-0 bg-[url('https://www.cio.com/wp-content/uploads/2025/02/219809-0-63929900-1739856142-certificate_certification_by_svetazi_gettyimages-655331082_2400x1600-100788475-orig.jpg?quality=50&strip=all')] bg-fixed bg-cover bg-center opacity-20"></div>
      </div>

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
             Our  <span className="text-orange-600">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-3xl mb-6 font-medium text-sm mx-auto">
            Recognized by leading certification bodies for our commitment to
            quality and excellence.
          </p>
        </motion.div>

        {isMobile ? (
          <>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              speed={2000}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              onSlideChange={onSlideChange}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              loop
            >
              {certifications.map((certification) => (
                <SwiperSlide key={certification.id}>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div 
                      className="h-48 overflow-hidden cursor-pointer"
                      onClick={() => openImageModal(certification.image)}
                    >
                      <img
                        src={certification.image}
                        alt={certification.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {certification.title}
                      </h3>
                      <p className="text-gray-600">
                        {certification.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Pagination Dots */}
            <div className="flex justify-center mt-4 space-x-3">
              {certifications.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-orange-500 scale-110 w-4"
                      : "bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((certification) => (
              <div
                key={certification.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <div 
                  className="h-48 overflow-hidden cursor-pointer"
                  onClick={() => openImageModal(certification.image)}
                >
                  <img
                    src={certification.image}
                    alt={certification.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {certification.title}
                  </h3>
                  <p className="text-gray-600">{certification.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-500 flex items-center backdrop-blur-sm  justify-center p-4"
            onClick={closeImageModal}
          >
            <div className="relative max-w-6xl max-h-full">
              <button 
                className="absolute top-4 right-4 text-white text-3xl z-50 hover:text-orange-500"
                onClick={closeImageModal}
              >
                &times;
              </button>
              <img 
                src={selectedImage} 
                alt="Enlarged certification" 
                className="max-w-full max-h-[90vh] object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GalaxyPackTechCertifications;
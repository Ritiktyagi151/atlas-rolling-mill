import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "“Atlas Rolling Mill has been our trusted partner for over a decade. Their rolling mill stands and gear boxes have shown exceptional performance and durability in our steel plant operations.”",
      name: "Mr. Rajesh Sharma",
      company: "Steelkraft Industries, Maharashtra, India",
      rating: 5,
    },
    {
      quote:
        "“The quality of Atlas Rolling Mill's products is unmatched in the industry. Their technical support team is always available to assist with any operational challenges we face.”",
      name: "Naveen Patel",
      company: "Gujarat Steel Works, Gujarat, India",
      rating: 4.5,
    },
    {
      quote:
        "“We've installed multiple rolling mills from Atlas in our facilities across Africa. Their machines have significantly improved our production efficiency and output quality.”",
      name: "Kwame Ofori",
      company: "African Steel Mills, Ghana",
      rating: 5,
    },
    {
      quote:
        "“Atlas Rolling Mill's customized solutions for our special steel production needs have been outstanding. Their engineering team understands complex requirements perfectly.”",
      name: "Sandeep Verma",
      company: "Specialty Steels Pvt. Ltd., Punjab, India",
      rating: 4,
    },
    {
      quote:
        "“The after-sales service from Atlas Rolling Mill is exceptional. Their technicians are highly skilled and respond quickly to any service requests.”",
      name: "Ahmed Al-Mansoori",
      company: "Gulf Steel Manufacturing, UAE",
      rating: 5,
    },
    {
      quote:
        "“We've been using Atlas Rolling Mill equipment since 2005 and have never been disappointed. Their machines deliver consistent performance year after year.”",
      name: "Vikram Singh",
      company: "National Steel Corporation, New Delhi, India",
      rating: 4.5,
    },
  ];

  const swiperRef = useRef(null);

  // Star rating component
  const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center mb-3">
        {[...Array(fullStars)].map((_, i) => (
          <svg
            key={`full-${i}`}
            className="w-4 h-4 text-amber-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        
        {hasHalfStar && (
          <svg
            className="w-4 h-4 text-amber-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <defs>
              <linearGradient id="half-star" x1="0" x2="100%" y1="0" y2="0">
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="gray" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path 
              fill="url(#half-star)" 
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" 
            />
          </svg>
        )}
        
        {[...Array(emptyStars)].map((_, i) => (
          <svg
            key={`empty-${i}`}
            className="w-4 h-4 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        
        <span className="ml-2 text-xs text-gray-400">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <section className="relative w-full h-[650px] md:h-[700px] overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <video
          autoPlay
          muted
          loop
          className="opacity-90 w-full h-full object-cover"
          src="https://videocdn.cdnpk.net/videos/steel-mill-production-line-with-molten-metal-and-sparks.mp4"
        ></video>
        <div className="absolute inset-0 opacity-80 bg-[url('https://assets-global.website-files.com/5f4ec532…/64b2a6a0…_noise-texture-100x100-p-500.png')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="inline-block text-orange-400 font-semibold pt-3 text-sm uppercase tracking-widest mb-3">
            Client Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Steel Industry Leaders
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-transparent mx-auto"></div>
        </motion.div>

        <div className="relative h-[400px] md:h-[450px]">
          <Swiper
            ref={swiperRef}
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
              bulletClass: "custom-bullet w-2.5 h-2.5 bg-gray-400 rounded-full mx-1 transition-all duration-300",
              bulletActiveClass: "custom-bullet-active bg-gradient-to-r from-orange-500 to-amber-400 scale-125",
            }}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={1000}
            className="h-full pb-10"
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="h-[calc((100%-30px)/1)] sm:h-[calc((100%-30px)/2)] lg:h-[calc((100%-60px)/3)] xl:h-[calc((100%-90px)/4)] p-1.5">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="h-full flex items-center justify-center"
                >
                  <div className="h-full w-full">
                    <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 shadow-2xl overflow-hidden h-full flex flex-col">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-amber-400 to-transparent"></div>

                      <div className="relative z-10 flex-grow flex flex-col">
                        <div className="flex-grow flex flex-col justify-center">
                          {/* Add Star Rating Here */}
                          <StarRating rating={testimonial.rating} />
                          
                          <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-gray-200 text-sm md:text-base leading-relaxed mb-4 font-medium"
                          >
                            {testimonial.quote}
                          </motion.p>
                        </div>

                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.6 }}
                          className="mt-4 pt-4 border-t border-gray-700"
                        >
                          <div className="flex items-center">
                            <div className="flex-shrink-0 mr-3">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 flex items-center justify-center text-white font-bold">
                                {testimonial.name.charAt(0)}
                              </div>
                            </div>
                            <div>
                              <p className="text-sm md:text-base font-bold text-white">
                                {testimonial.name}
                              </p>
                              <p className="text-orange-300 text-xs uppercase tracking-wider mt-1">
                                {testimonial.company}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <div className="flex justify-center mt-2 space-x-4">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-orange-500 transition-all duration-300 flex items-center justify-center text-white shadow-lg hover:shadow-orange-500/30 group"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 group-hover:scale-110 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-orange-500 transition-all duration-300 flex items-center justify-center text-white shadow-lg hover:shadow-orange-500/30 group"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 group-hover:scale-110 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
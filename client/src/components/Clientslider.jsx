import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const ImageSlider = () => {
  // Array of sample images (replace with your actual images)
  const images = [
    {
      id: 1,
      src: "/images/clientlogo/logo1.jpg",
      alt: "Nature 1",
    },
    {
      id: 2,
      src: "/images/clientlogo/logo2.jpg",
      alt: "Nature 2",
    },
    {
      id: 3,
      src: "/images/clientlogo/logo3.jpg",
      alt: "Nature 3",
    },
    {
      id: 4,
      src: "/images/clientlogo/logo4.jpg",
      alt: "Nature 4",
    },
    {
      id: 5,
      src: "/images/clientlogo/logo5.jpg",
      alt: "Nature 5",
    },
    {
      id: 6,
      src: "/images/clientlogo/logo6.jpg",
      alt: "City 1",
    },
    {
      id: 7,
      src: "/images/clientlogo/logo7.jpg",
      alt: "City 2",
    },
    {
      id: 8,
      src: "/images/clientlogo/logo8.jpg",
      alt: "City 3",
    },
    {
      id: 9,
      src: "/images/clientlogo/logo9.jpg",
      alt: "Animal 1",
    },
    {
      id: 10,
      src: "/images/clientlogo/logo10.jpg",
      alt: "Animal 2",
    },
    {
      id: 11,
      src: "/images/clientlogo/logo11.jpg",
      alt: "Animal 2",
    },
    {
      id: 12,
      src: "/images/clientlogo/logo12.jpg",
      alt: "Animal 2",
    },
    {
      id: 13,
      src: "/images/clientlogo/logo13.jpg",
      alt: "Animal 2",
    },
    {
      id: 14,
      src: "/images/clientlogo/jsl-logo.jpg",
      alt: "logo",
    },
  ];

  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center  text-orange-600 decoration-2">
          <span className="text-black">Our</span> Clients
        </h2>
        <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="group relative  p-2 flex justify-center items-center bg-gray-400 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src={image.src}
                  alt={image.alt}
                  className=" h-25 w-70 object-fill transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 duration-300  p-2 flex items-end "></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageSlider;

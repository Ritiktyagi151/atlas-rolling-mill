import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Thumbs,
  FreeMode,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/autoplay";
import "swiper/css/free-mode";

const ProductSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // Product data with images and text
  const products = [
    {
      image:
        "images/ProductsImgaes/product-images/strip-rolling-mill-plants.jpg",
      title: "Strip Rolling",
      tagline: "Premium Comfort",
    },
    {
      image: "/images/ProductsImgaes/atlas.jpg",
      tagline: "City Ready",
    },
    {
      image: "images/ProductsImgaes/atlas2.jpg",
      tagline: "Timeless Design",
    },
    {
      image: "images/ProductsImgaes/atlas3.jpg",
      title: "Pinch Roll",
    },
    {
      image: "images/ProductsImgaes/atlas4.jpg",
      title: "Gear Box",
    },
    {
      image: "images/ProductsImgaes/hot-billet-shearing-machine.jpg",
      title: "Hot Billet Shearing Machine",
    },
    {
      image: "images/ProductsImgaes/product-images/atlas20.jpg",
    },
    {
      image: "images/ProductsImgaes/product-images/coil-laying-head.jpg",
      title: "Coil Laying Head ",
    },
    {
      image: "images/ProductsImgaes/product-images/bearing-housing.jpg",
      title: "Bearing Housing",
    },
    {
      image: "images/ProductsImgaes/product-images/Fly-wheel.jpg",
      title: "Fly Wheel",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 bg-white rounded-xl shadow-lg">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-black inline-block relative pb-2">
          Products Built <span className="text-orange-600">for You</span>
          <div className="w-30 h-1 mt-4 bg-orange-500 mx-auto mb-2"></div>
        </h2>
      </div>

      {/* Main Auto-Sliding Carousel */}
      <Swiper
        loop={true}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={800}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Autoplay, Navigation, Thumbs]}
        className="main-carousel rounded-lg mb-3 relative"
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 2,
          },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={`main-${index}`}>
            <div className="flex items-center justify-center h-96 rounded-lg relative overflow-hidden group">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-105"
              />
              {/* Text Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-xl font-bold text-white">
                  {product.title}
                </h3>
                <p className="text-orange-300 text-sm">{product.tagline}</p>
              </div>
              <div className="absolute bottom-4 left-4 text-white px-3 py-1 rounded-full text-sm bg-black/50">
                {index + 1}/{products.length}
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Arrows */}
        <div className="swiper-button-next !text-white !bg-black !bg-opacity-50 !w-12 !h-12 !rounded-full after:!text-xl"></div>
        <div className="swiper-button-prev !text-white !bg-black !bg-opacity-50 !w-12 !h-12 !rounded-full after:!text-xl"></div>
      </Swiper>

      {/* Thumbnail Navigation */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        freeMode={true}
        watchSlidesProgress={true}
        breakpoints={{
          1024: { slidesPerView: 5 },
          768: { slidesPerView: 4 },
          640: { slidesPerView: 3 },
          320: { slidesPerView: 2 },
        }}
        modules={[FreeMode, Thumbs]}
        className="thumbnail-carousel mt-2"
      >
        {products.map((product, index) => (
          <SwiperSlide key={`thumb-${index}`}>
            <div className="cursor-pointer border-2 border-transparent hover:border-blue-500 rounded-lg transition-all opacity-70 hover:opacity-100 overflow-hidden">
              <img
                src={product.image}
                alt={`Thumbnail ${product.title}`}
                className="w-full h-20 object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;

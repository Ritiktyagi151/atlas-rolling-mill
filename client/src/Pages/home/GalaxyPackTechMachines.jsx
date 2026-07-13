import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  CheckCircle,
  ArrowRight,
  Package,
  Zap,
  Settings,
  Link,
  Link2,
} from "lucide-react";

const GalaxyPackTechMachines = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState({
    pouch: 0,
    bag: 0,
  });

  // Placeholder images from Picsum
  const pouchImages = [
    "https://www.hci.cc/medical-bag-making-machine.jpg",
    "https://www.uniqueindiapaperteknix.com/assets/frontend/images/products/1710588744img1.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv7CIlHBGiXpHr3LAFjNsjYdjz8POm70XJEJZU8Oiql7ZPZ7Wew_kXN-TdBab8D7KJaM0&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv7CIlHBGiXpHr3LAFjNsjYdjz8POm70XJEJZU8Oiql7ZPZ7Wew_kXN-TdBab8D7KJaM0&usqp=CAU",
    "https://cpimg.tistatic.com/09102814/b/4/Combine-Pouch-Making-Machine.jpg",
    "https://lh3.googleusercontent.com/proxy/Np18K8a6Wy0JTbYZJwbe-ee0HcnPYBLnKCcWQ8CJaazXxW4LYs6lOuOSt35Qhei6T7hPEIRRt8ndVZ8VVpVeZKs",
  ];

  const bagImages = [
    "https://www.sahilgraphics.com/wp-content/uploads/2023/11/Non-Woven-Bag-Making-Machine.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEmFWcbAcQdiReEmaixJ5gIXWQX0Olbw7H4g&s",
    "https://www.osakaindia.com/uploaded-files/thumb-cache/member_145/thumb---biodegradable-bag-making-machine_5672.jpg",
    "https://img.directindustry.com/images_di/photo-mg/236706-16910031.jpg",
    "https://www.s-dai.com.tw/images/product/product_garment_bag_making_machine_with_hanger.jpg",
    "https://www.mamata.com/converting-machine/images/products/servo_wicketers/Vega_Vega_Plus_W800_W1000.jpg",
  ];

  const products = [
    {
      id: "pouch",
      title: "Pouch Making Machines",
      description:
        "High-speed automatic pouch making machines delivering precision and efficiency for various packaging needs.",
      images: pouchImages,
      features: [
        "Production capacity: 80-120 pouches/minute",
        "Multiple pouch types: Stand-up, flat, zipper",
        "PLC control system with touch screen",
        "Advanced sealing technology",
      ],
      stats: { speed: "120/min", types: "8+", efficiency: "99.5%" },
    },
    {
      id: "bag",
      title: "Bag Making Machines",
      description:
        "Advanced bag making machines producing high-quality bags with consistent performance and durability.",
      images: bagImages,
      features: [
        "Production capacity: 100-150 bags/minute",
        "Handles various materials: PP, PE, woven",
        "Automatic tension control system",
        "Energy-efficient operation",
      ],
      stats: { speed: "150/min", materials: "5+", efficiency: "98.8%" },
    },
  ];

  const [isPaused, setIsPaused] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isPaused, products.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const selectImage = (productId, index) => {
    setSelectedImageIndex((prev) => ({ ...prev, [productId]: index }));
  };

  // Get current product based on currentSlide
  const currentProduct = products[currentSlide];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-8 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 via-orange-800 to-gray-900 bg-clip-text text-transparent">
            Galaxy PackTech's Quality Machines
          </h2>
          <p className="text-[16px] text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Manufacturing excellence backed by strict quality control and
            reliable components, delivering superior performance across our
            entire machine lineup.
          </p>
        </div>

        {/* Main Slider Container */}
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 z-20">
            <div
              className="h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300 ease-out"
              style={{
                width: `${((currentSlide + 1) / products.length) * 100}%`,
              }}
            />
          </div>

          {/* Slider Content */}
          <div className="relative h-[500px] md:h-[400px]">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentSlide
                    ? "opacity-100 translate-x-0"
                    : index < currentSlide
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                  {/* Image Section */}
                  <div className="relative object-fill bg-gradient-to-br from-gray-100 to-gray-200 p-8 flex flex-col justify-center">
                    {/* Main Image */}
                    <div className="relative mb-6 group">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl z-10" />
                      <img
                        src={product.images[selectedImageIndex[product.id]]}
                        alt={`${product.title} ${
                          selectedImageIndex[product.id] + 1
                        }`}
                        className="w-full h-62 object-cover rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700 z-20">
                        {selectedImageIndex[product.id] + 1} /{" "}
                        {product.images.length}
                      </div>
                    </div>

                    {/* Thumbnail Gallery */}
                    <div className="flex space-x-3 justify-center">
                      {product.images.map((image, imgIndex) => (
                        <button
                          key={imgIndex}
                          onClick={() => selectImage(product.id, imgIndex)}
                          className={`relative w-16 h-12 rounded-lg overflow-hidden transition-all duration-300 ${
                            selectedImageIndex[product.id] === imgIndex
                              ? "ring-3 ring-orange-500 scale-110"
                              : "hover:scale-105 opacity-70 hover:opacity-100"
                          }`}
                        >
                          <img
                            src={image}
                            alt={`Thumbnail ${imgIndex + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 lg:py-2  flex flex-col justify-center bg-white ">
                    <div className="space-y-3">
                      {/* Title - Reduced size and line height */}
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
                        {product.title}
                      </h3>

                      {/* Description - Smaller text and tighter spacing */}
                      <p className="text-base text-gray-600 leading-snug">
                        {product.description}
                      </p>

                      {/* Stats - More compact layout */}
                      <div className="grid grid-cols-3 gap-1 py-4">
                        {Object.entries(product.stats).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-xl font-bold text-orange-600">
                              {value}
                            </div>
                            <div className="text-xs text-gray-500 capitalize">
                              {key}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Features - Smaller text and tighter spacing */}
                      <div className="space-y-2">
                        {product.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-start space-x-2 text-sm"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Action Buttons - Smaller buttons */}

                      <div className="flex flex-col sm:flex-row gap-3 pt-4">
                        <a href="/products">
                          <button className="group px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium rounded-lg text-sm hover:from-orange-600 hover:to-red-600 transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg">
                            <span>View Details</span>
                            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 left-6 -translate-y-1/2 z-20">
            <button
              onClick={prevSlide}
              className="group w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 flex items-center justify-center hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-orange-600" />
            </button>
          </div>

          <div className="absolute top-1/2 right-6 -translate-y-1/2 z-20">
            <button
              onClick={nextSlide}
              className="group w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 flex items-center justify-center hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-orange-600" />
            </button>
          </div>

          {/* Play/Pause Button */}
          <div className="absolute bottom-6 right-6 z-20">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="w-10 h-10 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/30 transition-all duration-300"
            >
              {isAutoPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4 ml-0.5" />
              )}
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-orange-500 scale-125"
                    : "bg-white/60 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalaxyPackTechMachines;

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const GlobalPresence = () => {
  const [hoveredCountry, setHoveredCountry] = useState(null);

  // Globe icons as SVG components
  const GlobeIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
  );

  // Country Flag SVG Components
  const FlagSVGs = {
    Nepal: ({ className = "w-12 h-8" }) => (
      <svg
        className={className}
        viewBox="0 0 90 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="0,0 60,15 0,30 20,30 20,45 60,45 0,60"
          fill="#DC143C"
        />
        <polygon
          points="0,0 50,12 0,24 15,24 15,36 50,36 0,48"
          fill="#003893"
        />
        <circle cx="25" cy="12" r="4" fill="#FFF" />
        <circle cx="25" cy="36" r="4" fill="#FFF" />
      </svg>
    ),
    Bhutan: ({ className = "w-12 h-8" }) => (
      <svg
        className={className}
        viewBox="0 0 90 60"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <polygon
            id="dragon"
            points="15,15 25,10 35,15 45,10 55,15 65,10 75,15 75,45 65,50 55,45 45,50 35,45 25,50 15,45"
            fill="#FFD700"
          />
        </defs>
        <rect width="90" height="30" fill="#FFD700" />
        <rect y="30" width="90" height="30" fill="#FF4500" />
        <use xlinkHref="#dragon" transform="translate(0,15)" />
      </svg>
    ),
    UAE: ({ className = "w-12 h-8" }) => (
      <svg
        className={className}
        viewBox="0 0 90 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="30" height="60" fill="#FF0000" />
        <rect x="30" width="60" height="20" fill="#00732F" />
        <rect x="30" y="20" width="60" height="20" fill="#FFFFFF" />
        <rect x="30" y="40" width="60" height="20" fill="#000000" />
      </svg>
    ),
    Bangladesh: ({ className = "w-12 h-8" }) => (
      <svg
        className={className}
        viewBox="0 0 90 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="90" height="60" fill="#006A4E" />
        <circle cx="40" cy="30" r="12" fill="#F42A41" />
      </svg>
    ),
    SaudiArabia: ({ className = "w-12 h-8" }) => (
      <svg
        className={className}
        viewBox="0 0 90 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="90" height="60" fill="#245C36" />
        <text
          x="45"
          y="35"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="14"
          fontWeight="bold"
        >
          لا إله إلا الله محمد رسول الله
        </text>
      </svg>
    ),
    Oman: ({ className = "w-12 h-8" }) => (
      <svg
        className={className}
        viewBox="0 0 90 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="90" height="60" fill="#DB161B" />
        <rect width="30" height="60" fill="#FFFFFF" />
        <rect x="30" width="60" height="20" fill="#FFFFFF" />
        <rect x="30" y="40" width="60" height="20" fill="#FFFFFF" />
        <polygon points="0,0 30,30 0,60" fill="#DB161B" />
      </svg>
    ),
    Qatar: ({ className = "w-12 h-8" }) => (
      <svg
        className={className}
        viewBox="0 0 90 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="90" height="60" fill="#8D1B3D" />
        <polygon points="0,0 40,0 0,60" fill="#FFFFFF" />
        <polygon points="0,0 30,0 0,45" fill="#8D1B3D" />
      </svg>
    ),
    Kuwait: ({ className = "w-12 h-8" }) => (
      <svg
        className={className}
        viewBox="0 0 90 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="90" height="20" fill="#00FF00" />
        <rect y="20" width="90" height="20" fill="#FFFFFF" />
        <rect y="40" width="90" height="20" fill="#FF0000" />
        <polygon points="0,0 30,20 30,40 0,60" fill="#000000" />
      </svg>
    ),
    Iraq: ({ className = "w-12 h-8" }) => (
      <svg
        className={className}
        viewBox="0 0 90 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="90" height="20" fill="#CE1126" />
        <rect y="20" width="90" height="20" fill="#FFFFFF" />
        <rect y="40" width="90" height="20" fill="#000000" />
        <text x="45" y="35" textAnchor="middle" fill="#000000" fontSize="12">
          الله أكبر
        </text>
      </svg>
    ),
    Egypt: ({ className = "w-12 h-8" }) => (
      <svg
        className={className}
        viewBox="0 0 90 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="90" height="20" fill="#CE1126" />
        <rect y="20" width="90" height="20" fill="#FFFFFF" />
        <rect y="40" width="90" height="20" fill="#000000" />
        <circle cx="45" cy="30" r="8" fill="#C09300" />
      </svg>
    ),
    Morocco: ({ className = "w-12 h-8" }) => (
      <svg
        className={className}
        viewBox="0 0 90 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="90" height="60" fill="#C1272D" />
        <path d="M45,30 L50,40 L45,50 L40,40 Z" fill="#006233" />
        <path d="M45,20 L50,25 L45,30 L40,25 Z" fill="#006233" />
      </svg>
    ),
    Kenya: ({ className = "w-12 h-8" }) => (
      <svg
        className={className}
        viewBox="0 0 90 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="90" height="12" fill="#000000" />
        <rect y="12" width="90" height="12" fill="#FFFFFF" />
        <rect y="24" width="90" height="12" fill="#BB0000" />
        <rect y="36" width="90" height="12" fill="#FFFFFF" />
        <rect y="48" width="90" height="12" fill="#006600" />
        <path d="M0,0 L45,30 L0,60" fill="#000000" />
        <path d="M0,12 L45,30 L0,48" fill="#FFFFFF" />
        <path d="M0,24 L45,30 L0,36" fill="#BB0000" />
      </svg>
    ),
    Nigeria: ({ className = "w-12 h-8" }) => (
      <svg
        className={className}
        viewBox="0 0 90 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="30" height="60" fill="#008751" />
        <rect x="30" width="30" height="60" fill="#FFFFFF" />
        <rect x="60" width="30" height="60" fill="#008751" />
      </svg>
    ),
    Ghana: ({ className = "w-12 h-8" }) => (
      <svg
        className={className}
        viewBox="0 0 90 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="90" height="20" fill="#CF0921" />
        <rect y="20" width="90" height="20" fill="#FCD20F" />
        <rect y="40" width="90" height="20" fill="#006B3D" />
        <polygon points="45,20 55,30 45,40 35,30" fill="#000000" />
      </svg>
    ),
    Sudan: ({ className = "w-12 h-8" }) => (
      <svg
        className={className}
        viewBox="0 0 90 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="90" height="20" fill="#D21034" />
        <rect y="20" width="90" height="20" fill="#FFFFFF" />
        <rect y="40" width="90" height="20" fill="#000000" />
        <polygon points="0,0 30,30 0,60" fill="#007229" />
      </svg>
    ),
    Tanzania: ({ className = "w-12 h-8" }) => (
      <svg
        className={className}
        viewBox="0 0 90 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="0,0 90,0 0,60" fill="#1EB53A" />
        <polygon points="90,0 0,60 90,60" fill="#00A3DD" />
        <polygon points="0,0 90,0 45,30" fill="#FCD116" />
        <polygon points="90,60 0,60 45,30" fill="#FCD116" />
      </svg>
    ),
    Uganda: ({ className = "w-12 h-8" }) => (
      <svg
        className={className}
        viewBox="0 0 90 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="90" height="12" fill="#000000" />
        <rect y="12" width="90" height="12" fill="#FCDD09" />
        <rect y="24" width="90" height="12" fill="#D90000" />
        <rect y="36" width="90" height="12" fill="#FCDD09" />
        <rect y="48" width="90" height="12" fill="#000000" />
        <circle cx="45" cy="30" r="8" fill="#FFFFFF" />
      </svg>
    ),
    Ethiopia: ({ className = "w-12 h-8" }) => (
      <svg
        className={className}
        viewBox="0 0 90 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="90" height="20" fill="#078930" />
        <rect y="20" width="90" height="20" fill="#FCDD09" />
        <rect y="40" width="90" height="20" fill="#DA121A" />
        <circle cx="45" cy="30" r="8" fill="#0F47AF" />
      </svg>
    ),
    Rwanda: ({ className = "w-12 h-8" }) => (
      <svg
        className={className}
        viewBox="0 0 90 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="90" height="36" fill="#03A758" />
        <rect y="36" width="90" height="12" fill="#FCDD09" />
        <rect y="48" width="90" height="12" fill="#20603D" />
        <path d="M0,0 L90,36 L0,36 Z" fill="#00A1DE" />
        <path d="M90,0 L0,36 L90,36 Z" fill="#FCDD09" />
      </svg>
    ),
    Romania: ({ className = "w-12 h-8" }) => (
      <svg
        className={className}
        viewBox="0 0 90 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="30" height="60" fill="#002B7F" />
        <rect x="30" width="30" height="60" fill="#FCD116" />
        <rect x="60" width="30" height="60" fill="#CE1126" />
      </svg>
    ),
    Armenia: ({ className = "w-12 h-8" }) => (
      <svg
        className={className}
        viewBox="0 0 90 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="90" height="20" fill="#D90012" />
        <rect y="20" width="90" height="20" fill="#0033A0" />
        <rect y="40" width="90" height="20" fill="#F2A800" />
      </svg>
    ),
  };

  const countries = [
    { name: "Nepal", flag: "🇳🇵" },
    { name: "Bhutan", flag: "🇧🇹" },
    { name: "UAE", flag: "🇦🇪" },
    { name: "Iraq", flag: "🇮🇶" },
    { name: "Sudan", flag: "🇸🇩" },
    { name: "Egypt", flag: "🇪🇬" },
    { name: "Morocco", flag: "🇲🇦" },
    { name: "Tanzania", flag: "🇹🇿" },
    { name: "Kenya", flag: "🇰🇪" },
    { name: "Uganda", flag: "🇺🇬" },
    { name: "Ethiopia", flag: "🇪🇹" },
    { name: "Ghana", flag: "🇬🇭" },
    { name: "Nigeria", flag: "🇳🇬" },
    { name: "Rwanda", flag: "🇷🇼" },
    { name: "Romania", flag: "🇷🇴" },
    { name: "Armenia", flag: "🇦🇲" },
    { name: "Bangladesh", flag: "🇧🇩" },
    { name: "SaudiArabia", flag: "🇸🇦" },
    { name: "Oman", flag: "🇴🇲" },
    { name: "Qatar", flag: "🇶🇦" },
    { name: "Kuwait", flag: "🇰🇼" },
  ];

  const FloatingElement = ({ delay, size, x, y }) => (
    <div
      className="absolute rounded-full bg-orange-200 opacity-10 animate-pulse"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: `${y}%`,
        left: `${x}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${3 + Math.random() * 2}s`,
      }}
    />
  );

  // Split countries into chunks of 8 for the slider
  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  const countryChunks = chunkArray(countries, 8);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <FloatingElement
            key={i}
            delay={Math.random() * 5}
            size={Math.random() * 80 + 30}
            x={Math.random() * 100}
            y={Math.random() * 100}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Global Presence Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6 gap-4">
            <GlobeIcon className="text-orange-500 w-12 h-12 animate-pulse" />
            <h3 className="text-4xl font-bold text-orange-800 bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
              Global Presence
            </h3>
            <GlobeIcon className="text-orange-500 w-12 h-12 animate-pulse" />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full"></div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-200">
            <div className="text-3xl font-bold text-orange-600 mb-2">
              {countries.length}+
            </div>
            <div className="text-gray-700 font-medium">Countries Served</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-200">
            <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
            <div className="text-gray-700 font-medium">Global Client</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-200">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-700 font-medium">Global Support</div>
          </div>
          {/* <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-200">
            <div className="text-3xl font-bold text-orange-600 mb-2">10M+</div>
            <div className="text-gray-700 font-medium">Products Delivered</div>
          </div> */}
        </div>

        {/* Countries Slider */}
        <div className="mb-16 px-4 space-y-8">
          {/* First Slider (Right to Left) */}
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              reverseDirection: false,
            }}
            speed={2000}
            loop={true}
            spaceBetween={20}
            slidesPerView={6}
            breakpoints={{
              320: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 6,
              },
            }}
            className="pb-4"
          >
            {countryChunks.flat().map((country, index) => {
              const FlagComponent = FlagSVGs[country.name];
              return (
                <SwiperSlide key={`first-${index}`}>
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-orange-200">
                    <div className="p-4 text-center">
                      <div className="mb-2 transform transition-transform duration-300 hover:scale-110">
                        {FlagComponent ? (
                          <FlagComponent className="w-10 h-8 mx-auto" />
                        ) : (
                          <span className="text-3xl">{country.flag}</span>
                        )}
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center py-2 font-medium text-sm">
                      {country.name}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Second Slider (Left to Right) */}
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            speed={2000}
            loop={true}
            spaceBetween={20}
            slidesPerView={6}
            breakpoints={{
              320: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 6,
              },
            }}
            className="pb-4"
          >
            {[...countryChunks.flat()].reverse().map((country, index) => {
              const FlagComponent = FlagSVGs[country.name];
              return (
                <SwiperSlide key={`second-${index}`}>
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-orange-200">
                    <div className="p-4 text-center">
                      <div className="mb-2 transform transition-transform duration-300 hover:scale-110">
                        {FlagComponent ? (
                          <FlagComponent className="w-10 h-8 mx-auto" />
                        ) : (
                          <span className="text-3xl">{country.flag}</span>
                        )}
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center py-2 font-medium text-sm">
                      {country.name}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* Three Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          {/* Left Block */}
          <div className="lg:col-span-1">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg h-full relative overflow-hidden border border-orange-200">
              <div className="absolute -top-4 -left-4 text-orange-400 opacity-10">
                <GlobeIcon className="w-32 h-32" />
              </div>
              <h4 className="text-xl font-bold text-orange-800 mb-6 relative z-10">
                Asian & Middle East
              </h4>
              <ul className="space-y-4 relative z-10">
                <li className="flex items-center group cursor-pointer">
                  <span className="mr-3 transform transition-transform group-hover:scale-125">
                    <FlagSVGs.SaudiArabia className="w-8 h-6" />
                  </span>
                  <span className="text-orange-800 font-medium group-hover:text-orange-600 transition-colors">
                    Saudi Arabia
                  </span>
                </li>
                <li className="flex items-center group cursor-pointer">
                  <span className="mr-3 transform transition-transform group-hover:scale-125">
                    <FlagSVGs.Oman className="w-8 h-6" />
                  </span>
                  <span className="text-orange-800 font-medium group-hover:text-orange-600 transition-colors">
                    Oman
                  </span>
                </li>
                <li className="flex items-center group cursor-pointer">
                  <span className="mr-3 transform transition-transform group-hover:scale-125">
                    <FlagSVGs.Qatar className="w-8 h-6" />
                  </span>
                  <span className="text-orange-800 font-medium group-hover:text-orange-600 transition-colors">
                    Qatar
                  </span>
                </li>
                <li className="flex items-center group cursor-pointer">
                  <span className="mr-3 transform transition-transform group-hover:scale-125">
                    <FlagSVGs.Kuwait className="w-8 h-6" />
                  </span>
                  <span className="text-orange-800 font-medium group-hover:text-orange-600 transition-colors">
                    Kuwait
                  </span>
                </li>
                <li className="flex items-center group cursor-pointer">
                  <span className="mr-3 transform transition-transform group-hover:scale-125">
                    <FlagSVGs.Nepal className="w-8 h-6" />
                  </span>
                  <span className="text-orange-800 font-medium group-hover:text-orange-600 transition-colors">
                    Nepal
                  </span>
                </li>
                <li className="flex items-center group cursor-pointer">
                  <span className="mr-3 transform transition-transform group-hover:scale-125">
                    <FlagSVGs.Bhutan className="w-8 h-6" />
                  </span>
                  <span className="text-orange-800 font-medium group-hover:text-orange-600 transition-colors">
                    Bhutan
                  </span>
                </li>
                <li className="flex items-center group cursor-pointer">
                  <span className="mr-3 transform transition-transform group-hover:scale-125">
                    <FlagSVGs.UAE className="w-8 h-6" />
                  </span>
                  <span className="text-orange-800 font-medium group-hover:text-orange-600 transition-colors">
                    UAE
                  </span>
                </li>
                <li className="flex items-center group cursor-pointer">
                  <span className="mr-3 transform transition-transform group-hover:scale-125">
                    <FlagSVGs.Bangladesh className="w-8 h-6" />
                  </span>
                  <span className="text-orange-800 font-medium group-hover:text-orange-600 transition-colors">
                    Bangladesh
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Middle Block - World Map */}
          <div className="lg:col-span-2">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-orange-200">
              <h4 className="text-xl font-bold text-orange-800 mb-6 text-center">
                Global Network
              </h4>

              <div className="relative rounded-lg p-8 min-h-80">
                {/* World Map Background Image */}
                <div
                  className="absolute inset-0 rounded-lg bg-gray-100 opacity-90"
                  style={{
                    backgroundImage:
                      "url('images/extra/global-map-images.avif')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Right Block */}
          <div className="lg:col-span-1">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg h-full relative overflow-hidden border border-orange-200">
              <div className="absolute -bottom-4 -right-4 text-orange-400 opacity-10">
                <GlobeIcon className="w-32 h-32" />
              </div>
              <h4 className="text-xl font-bold text-orange-800 mb-6 relative z-10">
                Africa & Europe
              </h4>
              <ul className="space-y-4 relative z-10">
                <li className="flex items-center justify-end group cursor-pointer">
                  <span className="text-orange-800 font-medium mr-3 group-hover:text-orange-600 transition-colors">
                    Egypt
                  </span>
                  <span className="transform transition-transform group-hover:scale-125">
                    <FlagSVGs.Egypt className="w-8 h-6" />
                  </span>
                </li>
                <li className="flex items-center justify-end group cursor-pointer">
                  <span className="text-orange-800 font-medium mr-3 group-hover:text-orange-600 transition-colors">
                    Kenya
                  </span>
                  <span className="transform transition-transform group-hover:scale-125">
                    <FlagSVGs.Kenya className="w-8 h-6" />
                  </span>
                </li>
                <li className="flex items-center justify-end group cursor-pointer">
                  <span className="text-orange-800 font-medium mr-3 group-hover:text-orange-600 transition-colors">
                    Nigeria
                  </span>
                  <span className="transform transition-transform group-hover:scale-125">
                    <FlagSVGs.Nigeria className="w-8 h-6" />
                  </span>
                </li>
                <li className="flex items-center justify-end group cursor-pointer">
                  <span className="text-orange-800 font-medium mr-3 group-hover:text-orange-600 transition-colors">
                    Morocco
                  </span>
                  <span className="transform transition-transform group-hover:scale-125">
                    <FlagSVGs.Morocco className="w-8 h-6" />
                  </span>
                </li>
                <li className="flex items-center justify-end group cursor-pointer">
                  <span className="text-orange-800 font-medium mr-3 group-hover:text-orange-600 transition-colors">
                    Ghana
                  </span>
                  <span className="transform transition-transform group-hover:scale-125">
                    <FlagSVGs.Ghana className="w-8 h-6" />
                  </span>
                </li>
                <li className="flex items-center justify-end group cursor-pointer">
                  <span className="text-orange-800 font-medium mr-3 group-hover:text-orange-600 transition-colors">
                    Sudan
                  </span>
                  <span className="transform transition-transform group-hover:scale-125">
                    <FlagSVGs.Sudan className="w-8 h-6" />
                  </span>
                </li>
                <li className="flex items-center justify-end group cursor-pointer">
                  <span className="text-orange-800 font-medium mr-3 group-hover:text-orange-600 transition-colors">
                    Tanzania
                  </span>
                  <span className="transform transition-transform group-hover:scale-125">
                    <FlagSVGs.Tanzania className="w-8 h-6" />
                  </span>
                </li>
                <li className="flex items-center justify-end group cursor-pointer">
                  <span className="text-orange-800 font-medium mr-3 group-hover:text-orange-600 transition-colors">
                    Romania
                  </span>
                  <span className="transform transition-transform group-hover:scale-125">
                    <FlagSVGs.Romania className="w-8 h-6" />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalPresence;

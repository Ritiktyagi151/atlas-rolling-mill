import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Users } from "lucide-react";

const ValuedClients = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const clients = [
    {
      id: 1,
      name: "TechCorp",
      image: "public/images/clientlogo/aiswaryam.webp",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      name: "GlobalDyne",
      image: "https://logo.clearbit.com/globaldyne.com",
      color: "from-green-500 to-green-600",
    },
    {
      id: 3,
      name: "Creative Co",
      image: "https://logo.clearbit.com/creativeco.com",
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 4,
      name: "FutureTech",
      image: "https://logo.clearbit.com/futuretech.com",
      color: "from-red-500 to-red-600",
    },
    {
      id: 5,
      name: "HealthPlus",
      image: "https://logo.clearbit.com/healthplus.com",
      color: "from-teal-500 to-teal-600",
    },
    {
      id: 6,
      name: "EduPro",
      image: "https://logo.clearbit.com/edupro.com",
      color: "from-pink-500 to-pink-600",
    },
    {
      id: 7,
      name: "FinanceX",
      image: "https://logo.clearbit.com/financex.com",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      id: 8,
      name: "StartupLab",
      image: "https://logo.clearbit.com/startuplab.com",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      id: 9,
      name: "MediaFlow",
      image: "https://logo.clearbit.com/mediaflow.com",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      id: 10,
      name: "RetailMax",
      image: "https://logo.clearbit.com/retailmax.com",
      color: "from-orange-500 to-orange-600",
    },
    {
      id: 11,
      name: "CloudSync",
      image: "https://logo.clearbit.com/cloudsync.com",
      color: "from-gray-500 to-gray-600",
    },
    {
      id: 12,
      name: "DataVault",
      image: "https://logo.clearbit.com/datavault.com",
      color: "from-emerald-500 to-emerald-600",
    },
  ];

  const clientsPerSlide = 6; // Changed from 8 to 6
  const totalSlides = Math.ceil(clients.length / clientsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const getVisibleClients = () => {
    const startIndex = currentSlide * clientsPerSlide;
    return clients.slice(startIndex, startIndex + clientsPerSlide);
  };

  return (
    <div className="bg-gradient-to-br from-white via-orange-50 to-white py-4 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full opacity-30 translate-x-48 -translate-y-48 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-200 rounded-full opacity-20 -translate-x-40 translate-y-40 animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center min-h-[500px]">
          {/* Left Side - Our Clients Text */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium animate-bounce">
              <Users className="w-4 h-4" />
              <span>Trusted Partnership</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl lg:text-4xl font-bold text-gray-800 leading-tight">
                Our <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Client</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                We're proud to work with industry-leading companies who trust us
                to deliver exceptional results and drive their success forward.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-6 max-w-md">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="text-3xl font-bold text-orange-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {clients.length}+
                </div>
                <div className="text-gray-600 font-medium">Happy Clients</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="text-3xl font-bold text-orange-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                  98%
                </div>
                <div className="text-gray-600 font-medium">
                  Satisfaction Rate
                </div>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-orange-400 fill-orange-400"
                  />
                ))}
              </div>
              <span className="text-gray-600 font-medium">
                5.0 Average Rating
              </span>
            </div>
          </div>

          {/* Right Side - Client Images */}
          <div
            className="relative animate-fade-in-right"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-orange-50 shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 group"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-orange-500" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-orange-50 shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 group"
            >
              <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-orange-500" />
            </button>

            {/* Client Images Grid */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-50"></div>

              <div className="relative z-10">
                <div className="grid grid-cols-3 gap-4 mb-6"> {/* Changed from grid-cols-4 to grid-cols-3 */}
                  {getVisibleClients().map((client, index) => (
                    <div
                      key={client.id}
                      className="aspect-square bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center group cursor-pointer animate-scale-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-full h-full p-4 flex items-center justify-center">
                        <img
                          src={client.image}
                          alt={client.name}
                          className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-300"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://via.placeholder.com/150?text=" + client.name;
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Company Names */}
                <div className="grid grid-cols-3 gap-4 text-center"> {/* Changed from grid-cols-4 to grid-cols-3 */}
                  {getVisibleClients().map((client, index) => (
                    <div
                      key={`name-${client.id}`}
                      className="text-xs font-medium text-gray-600 truncate animate-fade-in-up"
                      style={{ animationDelay: `${index * 100 + 200}ms` }}
                    >
                      {client.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: totalSlides }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === currentSlide
                      ? "bg-orange-500 w-6"
                      : "bg-orange-200 hover:bg-orange-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-left {
          animation: fade-in-left 1s ease-out;
        }

        .animate-fade-in-right {
          animation: fade-in-right 1s ease-out 0.3s both;
        }

        .animate-scale-in {
          animation: scale-in 0.6s ease-out forwards;
          opacity: 0;
        }
 
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 1s both;
        }
      `}</style>
    </div>
  );
};

export default ValuedClients;
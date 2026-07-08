import { useState } from "react";

const MachineGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Machine data separated into pouches and bags making machines
  const pouchesMachines = [
    {
      id: 1,
      name: "Automatic Pouch Making Machine",
      model: "PPM-300",
      specs: "30-50 pouches/min • 100-300mm width • PLC Control",
      featured: true,
      image:
        "https://img.freepik.com/free-photo/portrait-businesswoman-owner_23-2148828328.jpg?uid=R201800195&ga=GA1.1.1513718733.1745227870&semt=ais_hybrid&w=740",
    },
    {
      id: 2,
      name: "Stand-Up Pouch Machine",
      model: "SUP-450",
      specs: "45 pouches/min • 3-side sealing • Zipper attachment",
      image:
        "https://img.freepik.com/free-photo/automated-packaging-line-efficiency-production_91128-4281.jpg?uid=R201800195&ga=GA1.1.1513718733.1745227870&semt=ais_hybrid&w=740",
    },
    {
      id: 3,
      name: "Flat Pouch Making Machine",
      model: "FPM-250",
      specs: "25-40 pouches/min • 150-250mm width • Touchscreen",
      image:
        "https://img.freepik.com/free-photo/female-business-owner-working-portrait_23-2148828314.jpg?uid=R201800195&ga=GA1.1.1513718733.1745227870&semt=ais_hybrid&w=740",
    },
    {
      id: 4,
      name: "Pouch Sealing Machine",
      model: "PSM-200",
      specs: "20-30 pouches/min • Heat sealing • Compact",
      image:
        "https://img.freepik.com/free-photo/photos-sterile-production-area-with-stainless-steel-machine-production-sorting-pills-medicines_645730-366.jpg?uid=R201800195&ga=GA1.1.1513718733.1745227870&semt=ais_hybrid&w=740",
    },
  ];

  const bagsMachines = [
    {
      id: 5,
      name: "Automatic Bag Making Machine",
      model: "ABM-500",
      specs: "50-70 bags/min • Handle attachment • UV printing",
      featured: true,
      image:
        "https://img.freepik.com/free-photo/female-business-owner-working_23-2148828300.jpg?uid=R201800195&ga=GA1.1.1513718733.1745227870&semt=ais_hybrid&w=740",
    },
    {
      id: 6,
      name: "Woven Bag Machine",
      model: "WBM-600",
      specs: "PP/PE material • 600mm width • High-speed",
      image:
        "https://img.freepik.com/free-photo/plant-picture-clean-room-equipment-stainless-steel-machines_645730-386.jpg?uid=R201800195&ga=GA1.1.1513718733.1745227870&semt=ais_hybrid&w=740",
    },
    {
      id: 7,
      name: "Paper Bag Making Machine",
      model: "PBM-350",
      specs: "35 bags/min • Handle options • Eco-friendly",
      image:
        "https://img.freepik.com/free-photo/glassblower-examining-glassware_107420-74262.jpg?uid=R201800195&ga=GA1.1.1513718733.1745227870&semt=ais_hybrid&w=740",
    },
    {
      id: 8,
      name: "Non-Woven Bag Machine",
      model: "NWB-400",
      specs: "40 bags/min • Handle punching • Custom sizes",
      image:
        "https://img.freepik.com/premium-photo/sewing-personalized-tote-bags-with-patterns_1079150-100468.jpg?uid=R201800195&ga=GA1.1.1513718733.1745227870&semt=ais_hybrid&w=740",
    },
  ];

  // Image Modal Component
  const ImageModal = () => {
    if (!selectedImage) return null;

    return (
      <div className="fixed inset-0 z-200 flex items-center justify-center backdrop-blur-sm p-4">
        <div className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="p-6">
            <div className="mb-6">
              <img
                src={selectedImage.image}
                alt={selectedImage.name}
                className="w-full h-auto max-h-[60vh] object-contain rounded-lg"
              />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {selectedImage.name}
              </h3>
              <p className="text-orange-600 font-medium text-lg mb-2">
                {selectedImage.model}
              </p>
              <p className="text-gray-600">{selectedImage.specs}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-10 bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Packaging Machinery Gallery
          </h2>
          <p className="text-[18px] text-gray-600 mb-6">
            High-performance machines for all your packaging needs
          </p>
        </div>

        {/* Gallery Content - Split Screen Design */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Pouches Machines Section - Left Side */}
          <div className="lg:w-1/2">
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-orange-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Pouches Making Machines
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pouchesMachines.map((machine) => (
                  <div
                    key={machine.id}
                    className="relative group cursor-pointer bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
                    onClick={() => setSelectedImage(machine)}
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={machine.image}
                        alt={machine.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.parentElement.classList.add("bg-gray-200");
                          e.target.parentElement.classList.add("flex");
                          e.target.parentElement.classList.add("items-center");
                          e.target.parentElement.classList.add(
                            "justify-center"
                          );
                          e.target.parentElement.innerHTML =
                            '<span class="text-gray-500">Pouch Machine Image</span>';
                        }}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-gray-800 mb-1">
                        {machine.name}
                      </h3>
                      <p className="text-orange-600 font-medium text-sm mb-2">
                        {machine.model}
                      </p>
                      <p className="text-gray-600 text-xs">{machine.specs}</p>
                    </div>
                    {machine.featured && (
                      <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        FEATURED
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bags Machines Section - Right Side */}
          <div className="lg:w-1/2">
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Bags Making Machines
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {bagsMachines.map((machine) => (
                  <div
                    key={machine.id}
                    className="relative group cursor-pointer bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
                    onClick={() => setSelectedImage(machine)}
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={machine.image}
                        alt={machine.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.parentElement.classList.add("bg-gray-200");
                          e.target.parentElement.classList.add("flex");
                          e.target.parentElement.classList.add("items-center");
                          e.target.parentElement.classList.add(
                            "justify-center"
                          );
                          e.target.parentElement.innerHTML =
                            '<span class="text-gray-500">Bag Machine Image</span>';
                        }}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-gray-800 mb-1">
                        {machine.name}
                      </h3>
                      <p className="text-blue-600 font-medium text-sm mb-2">
                        {machine.model}
                      </p>
                      <p className="text-gray-600 text-xs">{machine.specs}</p>
                    </div>
                    {machine.featured && (
                      <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        FEATURED
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Image Modal */}
        <ImageModal />
      </div>
    </section>
  );
};

export default MachineGallery;

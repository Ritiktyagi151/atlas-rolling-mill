import { useState } from "react";

const Enquirybutton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed  bottom-16 z-50">
      <div className="relative">
        {isOpen && (
          <div className="absolute bottom-16 left- bg-white p-4 rounded-lg shadow-lg border border-orange-200 w-64">
            <h3 className="text-orange-600 font-bold mb-3">How can we help?</h3>
            <div className="space-y-2">
              <a
                href="mailto:info@galaxypacktech.com"
                className="block px-3 py-2 bg-orange-50 hover:bg-orange-100 rounded text-orange-700 transition-colors"
              >
                Send us an email
              </a>
              <a
                href="https://wa.me/9478000019"
                target="_blank"
                className="block px-3 py-2 bg-orange-50 hover:bg-orange-100 rounded text-orange-700 transition-colors"
              >
                Chat on WhatsApp
              </a>
              <a
                href="tel:+91 9478000019"
                className="block px-3 py-2 bg-orange-50 hover:bg-orange-100 rounded text-orange-700 transition-colors"
              >
                Call our team
              </a>
            </div>
          </div>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="animate-bounce bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
        >
          Enquiry
          <svg
            className="w-4 h-4 inline ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default Enquirybutton;

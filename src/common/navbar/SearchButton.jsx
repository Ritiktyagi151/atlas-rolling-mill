import React, { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";

const SearchButton = ({ mobile = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  const toggleSearch = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setSearchQuery("");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      inputRef.current?.focus();
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center ${mobile ? "w-full" : ""}`}
    >
      {/* Search input - different behavior for mobile */}
      {mobile ? (
      // Mobile search input (always visible when mobile prop is true)
        <div className="w-full px-4 mb-2">
          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-2.5 p-1 text-gray-500 hover:text-amber-600 transition-colors"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      ) : (
        // Desktop search input (slides in)
        <>
          <div
            className={`absolute right-10 bg-white rounded-lg shadow-sm shadow-amber-600 overflow-hidden transition-all duration-300 ease-out ${
              isOpen ? "w-46 opacity-100" : "w-0 opacity-0"
            }`}
          >
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Close button (visible when search is open) */}
          {isOpen && (
            <button
              onClick={toggleSearch}
              className="absolute right-10 mr-2 p-1 text-gray-500 hover:text-amber-600 transition-colors z-10"
              aria-label="Close search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </>
      )}

      {/* Search icon button (hidden in mobile mode) */}
      {!mobile && (
        <button
          onClick={toggleSearch}
          className={`p-2 rounded-full transition-colors duration-200 z-10 ${
            isOpen
              ? "bg-amber-100 text-amber-600"
              : "text-gray-600 hover:bg-gray-100"
          }`}
          aria-label={isOpen ? "Close search" : "Open search"}
        >
          <Search
            className={`w-5 h-5 transition-transform ${
              isOpen ? "scale-90" : "scale-100"
            }`}
          />
        </button>
      )}
    </div>
  );
};

export default SearchButton;

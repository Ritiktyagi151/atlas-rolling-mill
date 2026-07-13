import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black z-50">
      <span className="loader"></span>
    </div>
  );
};

export default Loader;

"use client";

import React from "react";

const Laptop = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full max-w-6xl mx-auto pb-20 select-none">
      {/* Laptop Screen */}
      <div
        className="
          relative bg-black rounded-2xl mx-auto border-[6px] border-gray-900
          shadow-2xl overflow-hidden w-full aspect-[16/10]
        "
      >
        {/* Camera Dot */}
        <div
          className="
            absolute top-2 left-1/2 -translate-x-1/2
            w-3 h-3 bg-gray-700 rounded-full
          "
        ></div>

        {/* Screen Content */}
        <div className="absolute inset-0 bg-white overflow-y-auto p-6">
          {children}
        </div>
      </div>

      {/* Laptop Base */}
      <div
        className="
          absolute left-1/2 -translate-x-1/2 bottom-0 
          w-[92%] h-8 bg-gradient-to-b from-gray-300 to-gray-400 
          rounded-b-3xl shadow-2xl
        "
      ></div>

      {/* Trackpad Line */}
      <div
        className="
          absolute bottom-2 left-1/2 -translate-x-1/2
          w-24 h-1 bg-gray-500 rounded-full opacity-40
        "
      ></div>
    </div>
  );
};

export default Laptop;

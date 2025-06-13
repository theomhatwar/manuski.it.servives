"use client";
import React, { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

const slides = [
  {
    image: "/green.jpg",
    overlay: (
      <div className="text-white w-full max-w-xs sm:max-w-sm md:max-w-md px-3 py-6 rounded-lg">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 leading-tight">
          WELCOME TO <span className="text-emerald-400">MANUSKI</span> WELFARE ASSOCIATIONS
        </h2>
        <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-4 text-emerald-300">
          TRANSFORM YOUR BUSINESS WITH TECHNOLOGY
        </h3>
        <p className="mb-6 text-sm sm:text-base leading-relaxed">
          We specialize in software development, cloud services and IT consulting to drive growth and efficiency.
        </p>
        <div className="space-y-3">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-2 rounded-lg text-sm flex items-center group">
            CONNECT NOW <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
       
        </div>
      </div>
    ),
  },
  {
    image: "/web.jpg",
    overlay: (
      <div className="text-white w-full max-w-xs sm:max-w-sm md:max-w-md px-3 py-6 rounded-lg">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
          WEB DEVELOPMENT <span className="text-emerald-400">SOLUTIONS</span>
        </h2>
        <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-4 text-emerald-300">
          Absolutely Responsive
        </h3>
        <p className="mb-6 text-sm sm:text-base leading-relaxed">
          Unlock your business potential with tailored IT solutions. From AI-powered tools to secure networking, our expertise ensures you stay ahead in a rapidly evolving digital landscape.
        </p>
        <button className="bg-white hover:bg-gray-100 text-black font-semibold px-5 py-2 rounded-lg text-sm flex items-center group">
          Visit Now <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    ),
  },
  {
    image: "https://png.pngtree.com/png-clipart/20240616/original/pngtree-digital-marketing-seo-strategy-concept-banner-design-vector-png-image_15341480.png",
    overlay: (
      <div className="text-white w-full max-w-xs sm:max-w-sm md:max-w-md px-3 py-6 rounded-lg">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
          DIGITAL MARKETING <span className="text-emerald-400">AGENCY</span>
        </h2>
        <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-4 text-emerald-300">
          POWERING DIGITAL TRANSFORMATION
        </h3>
        <p className="mb-6 text-sm sm:text-base leading-relaxed">
          Boost Your Online Presence with Expert Digital Marketing Solutions with Manuski Welfare
        </p>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-2 rounded-lg text-sm flex items-center group">
          Contact Us <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    ),
  },
];

const AutoSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[320px] sm:h-[400px] md:h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="absolute inset-0 flex items-center justify-start px-4 sm:px-6 md:px-12 z-20">
            {slide.overlay}
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 left-0 right-0 flex justify-center z-30 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full transition-all duration-300 ${
              index === current ? "bg-emerald-500 w-5" : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoSlider;

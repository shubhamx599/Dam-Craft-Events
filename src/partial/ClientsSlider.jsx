import React from "react";
import tvs from "../assets/tvs.png";
import maruti from "../assets/maruti.png";
import yamaha from "../assets/yamaha.png";
import urban from "../assets/urban.png";
import wakefit from "../assets/wakefit.png";

const logos = [tvs, maruti, yamaha, urban, wakefit];

const ClientsSlider = () => {
  // Duplicate array to create seamless effect
  const repeatedLogos = [...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden py-10 bg-white">
      <h2 className="text-2xl font-semibold uppercase text-center mb-8">
        Brands we've worked with
      </h2>

      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-16 h-full z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
      <div className="absolute top-0 right-0 w-16 h-full z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />

      <div className="slider-track flex w-fit animate-marquee">
        {repeatedLogos.map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt={`logo-${i}`}
            className="h-[50px] w-auto object-contain mx-8  transition duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default ClientsSlider;

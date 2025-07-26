import React, { useState } from "react";
import main from "../assets/1.mp4";
import corporate from "../assets/corporate.mp4";
import mall from "../assets/mall.mp4";
import img1 from "../assets/deepak.jpg";
import img2 from "../assets/ashish.jpg";

const media = [
  { type: "video", src: main },
  { type: "video", src: corporate },
  { type: "image", src: img1 },
  { type: "video", src: mall },
  { type: "image", src: img2 },
];

const EventSlider = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  const currentMedia = media[current];

  return (
    <div className="relative bg-black h-[80vh] max-md:h-[40vh] overflow-hidden">
      {currentMedia.type === "video" ? (
        <video
          className="h-full w-full object-cover"
          src={currentMedia.src}
          autoPlay
          loop
          muted
        ></video>
      ) : (
        <img
          className="h-full w-full object-cover"
          src={currentMedia.src}
          alt="slider"
        />
      )}

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute cursor-pointer top-1/2 left-5 text-black text-4xl -translate-y-1/2 z-10"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute cursor-pointer top-1/2 right-5 text-black text-4xl -translate-y-1/2 z-10"
      >
        ›
      </button>
    </div>
  );
};

export default EventSlider;

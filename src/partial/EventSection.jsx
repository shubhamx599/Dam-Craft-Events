import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

// Video imports
import main from "../assets/1.mp4";
import corporate from "../assets/corporate.mp4";
import mall from "../assets/mall.mp4";
import market from "../assets/market.mp4";
import advertisement from "../assets/bike.mp4";

const EventSection = () => {
  const cursorRef = useRef(null);
  const navigate = useNavigate();

  const videos = {
    corporate,
    mall,
    market,
    advertisement,
    product: advertisement,
  };

  // Smooth, throttled custom cursor movement
  useEffect(() => {
    const cursor = cursorRef.current;
    let timeout;

    const moveCursor = (e) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3,
          ease: "power3.out",
        });
      }, 10);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const handleMouseEnter = () => {
    gsap.to(cursorRef.current, {
      scale: 3,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cursorRef.current, {
      scale: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleNavigate = (type) => {
    navigate(`/service/${type}`);
  };

  // Renders one video section
  const renderOverview = (id, label, heading, type, videoSize = "medium") => (
    <div className="overview flex flex-col gap-5 w-full">
      <p>{id}</p>
      <div
        className="relative w-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleNavigate(type)}
      >
        <video
          ref={(el) => {
            if (el) {
              el.onmouseenter = () => el.play();
              el.onmouseleave = () => el.pause();
            }
          }}
          className={`object-cover cursor-pointer rounded-2xl transition-all duration-300 ease-in-out ${
            videoSize === "large"
              ? "h-[650px] w-[600px]"
              : videoSize === "full"
              ? "w-full h-[72vh]"
              : "h-[400px] w-[800px]"
          } max-md:w-full max-md:h-[400px]`}
          muted
          playsInline
          preload="metadata"
          src={videos[type] || main}
        />
      </div>
      <div className="flex gap-2 items-center">
        <div className="bg-black h-[12px] w-[12px] rounded-full"></div>
        <p className="uppercase small">{label}</p>
      </div>
      <h1 className="medium uppercase leading-none">{heading}</h1>
    </div>
  );

  return (
    <div className="mt-[2rem] relative">
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 w-[10px] h-[10px] rounded-full z-[100] bg-black"
        style={{ transform: "translate(-50%, -50%) scale(0)" }}
      />

      <h1 className="mmedium font-semibold uppercase">Event moments</h1>

      {/* First row */}
      <div className="mt-[4rem] flex max-md:flex-col gap-20 w-full justify-between">
        <div className="w-[60%] max-md:w-full">
          {renderOverview(
            "01",
            "corporate event",
            "Turning corporate visions into unforgettable realities.",
            "corporate"
          )}
        </div>
        <div className="w-[40%] mt-[10rem] max-md:mt-[2rem] max-md:w-full">
          {renderOverview(
            "02",
            "mall activation",
            "Turning Crowds into Customers.",
            "mall",
            "large"
          )}
        </div>
      </div>

      {/* Product Advertisement */}
      <div className="mt-[4rem] w-full">
        {renderOverview(
          "03",
          "Product Advertisement",
          "Where Movement Meets Marketing",
          "product",
          "full"
        )}
      </div>

      {/* Last row */}
      <div className="mt-[4rem] flex max-md:flex-col gap-20 w-full justify-between">
        <div className="w-[60%] max-md:w-full">
          {renderOverview(
            "04",
            "market activation",
            "Where Movement Meets Marketing",
            "market"
          )}
        </div>
        <div className="w-[40%] mt-[10rem] max-md:mt-[2rem] max-md:w-full">
          {renderOverview(
            "05",
            "advertisement",
            "Smart Advertising. Real Results.",
            "advertisement",
            "large"
          )}
        </div>
      </div>
    </div>
  );
};

export default EventSection;

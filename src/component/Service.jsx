import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import deepak from "../assets/deepak.jpg";

const Service = () => {
  const servicedata = [
    {
      num: "01",
      title: "corporate event",
      image: deepak,
    },
    {
      num: "02",
      title: "Advertising",
      image: deepak,
    },
    {
      num: "03",
      title: "Mall events",
      image: deepak,
    },
    {
      num: "04",
      title: "market events",
      image: deepak,
    },
    {
      num: "05",
      title: "Road show",
      image: deepak,
    },
    {
      num: "06",
      title: "Creative design",
      image: deepak,
    },
    {
      num: "07",
      title: "customer meeet",
      image: deepak,
    },
    {
      num: "07",
      title: "customer meeet",
      image: deepak,
    },
  ];

  const imageRefs = useRef([]);

  useEffect(() => {
    imageRefs.current = imageRefs.current.slice(0, servicedata.length);
  }, [servicedata.length]);

  const handleMouseEnter = (index) => {
    gsap.set(imageRefs.current[index], {
      transformOrigin: "center center", // make sure scale comes from center
    });

    gsap.to(imageRefs.current[index], {
      scale: 1,
      opacity: 1,

      ease: "power2.out",
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(imageRefs.current[index], {
      scale: 0,
      opacity: 0,
      ease: "power2.inOut",
    });
  };


  return (
    <div className="flex flex-col gap-20">
      <div className="mlarge font-extrabold flex gap-20 flex-col mt-[10rem] max-md:mt-[2rem] justify-between h-[55vh] max-md:h-fit items-center tracking-tight uppercase">
        <div>
          <h1 className="leading-none text-center">Explore our service</h1>
          <p className="small font-normal lowercase max-md:hidden tracking-wide text-end">
            Helping brands break through and grow stronger.
          </p>
        </div>

        <div
          className="small max-md:hidden px-2 max-md:py-3 max-md:px-1 max-md:mt-[2rem] py-4 cursor-pointer bg-gray-300 rounded-full hover:bg-gray-200 transition"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <i
            className="ri-arrow-down-line"
            style={{
              animation: "dropMove 2s ease-in-out infinite",
              fontSize: "15px",
              color: "#000",
            }}
          ></i>
        </div>
      </div>

      <div className="flex justify-between gap-40 max-md:gap-5 max-md:flex-col">
        <div>
          <div className="flex gap-2 items-center h-fit">
            <div className="bg-black h-[12px] w-[12px] rounded-full"></div>
            <p className="uppercase small font-semibold">our service</p>
          </div>
        </div>

        <h1 className="normal w-[60%] max-md:w-full max-md:text-start text-end leading-none">
          What We Deliver Best
        </h1>
      </div>

      <div className="flex gap-5 justify-evenly flex-wrap">
        {servicedata.map((data, i) => (
          <div
            key={i}
            className="w-[300px] h-[300px] max-sm:h-[200px] max-sm:w-full [perspective:1000px]"
          >
            <div className="relative w-full h-full transition-transform duration-700 transform-style-3d hover:rotate-y-180">
              {/* Front Side */}
              <div className="absolute inset-0 bg-gray-300 rounded-2xl backface-hidden z-10 flex flex-col justify-between">
                <p className="text-gray-700  p-4">{data.num}</p>
                <p className="uppercase p-4">{data.title}</p>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden rotate-y-180 backface-hidden">
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
};

export default Service;

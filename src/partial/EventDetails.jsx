import React from "react";
import { useParams } from "react-router-dom";
import mainVideo from "../assets/1.mp4";
import corporate from "../assets/corporate.mp4";
import mall from "../assets/1.mp4";
import market from "../assets/market.mp4";
import advertisement from "../assets/bike.mp4";
import corp from "../assets/corp.mp4"

const contentMap = {
  corporate: {
    title: "Corporate Event",
    description: "Turning corporate visions into unforgettable realities.",
    video: corporate,
    corp:corp,
  },
  mall: {
    title: "Mall Activation",
    description: "Turning crowds into customers.",
    video: mall,
  },
  market: {
    title: "Market Activation",
    description: "Where movement meets marketing.",
    video: market,
  },
  advertisement: {
    title: "Advertisement",
    description: "Smart advertising. Real results.",
    video: advertisement,
  },

  product: {
    title: "Product Advertisement",
    description: "Where movement meets marketing.",
    video: advertisement,
  },
};

const EventDetails = () => {
  const { type } = useParams();
  const data = contentMap[type];

  if (!data) {
    return <div className="p-10">Event not found</div>;
  }

  return (
    <div>
      <div className="hero w-full h-[90vh] mt-[5rem]">
        <h1 className="mmedium font-semibold uppercase">{data.title}</h1>
        <div className="relative w-full h-full">
          <video
            className="h-full absolute w-full object-cover object-top"
            src={data.video || mainVideo}
            autoPlay
            loop
            muted
          ></video>

        </div>
      </div>

      <div className="part w-full min-h-screen mt-[10rem] flex flex-col gap-[5rem] overflow-hidden">
        {/* Section 1 */}
        <div className="view2 w-full flex justify-between gap-10 max-md:flex-col">
          <div className="w-[50%] max-md:w-full">
            <div className="w-full h-[86vh]">
              <img
                className="object-center object-cover h-full w-full"
                src="https://images.unsplash.com/photo-1625539867671-af969da3a214"
                alt=""
              />
            </div>
            <h1 className="uppercase font-semibold text-lg tracking-tight">vogue/shot</h1>
          </div>
          <div className="w-[50%] max-md:w-full">
            <img
              className="w-full object-top object-cover h-[68vh]"
              src="https://images.unsplash.com/photo-1628336358317-0582bfa7519d"
              alt=""
            />
            <div className="flex gap-10 mt-4">
              <h1 className="font-semibold w-[50%] leading-7 text-sm">
                {data.description}
              </h1>
              <h1 className="w-fit text-[1rem]">
                Every event we craft is designed to make an impression — not just on the day it happens, but long after. From strategy to storytelling, our goal is to bring brands to life in the most immersive and impactful way.
              </h1>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="view3  w-full h-[90vh] flex gap-10 max-md:flex-col overflow-hidden">
          <div className="flex flex-col w-[40%] max-md:w-full items-center justify-between">
            <i className="ri-arrow-right-line text-[5rem] mt-[8rem] max-md:mt-0"></i>
            <h1 className="font-semibold leading-7 text-sm">
              Designed for Engagement. Delivered with Precision.
            </h1>
          </div>
          <img
            className="w-[60%]  max-md:w-full h-full object-center object-cover"
            src="https://images.unsplash.com/photo-1445384763658-0400939829cd"
          
          />
        </div>
        <div className="">


          <img
            className="w-full h-[90vh] object-cover"
            src="https://images.unsplash.com/photo-1445384763658-0400939829cd"
            alt=""
          />
        </div>

        {/* Section 3 */}
        <div className="view5 min-h-screen w-full flex gap-10 max-md:flex-col max-md:gap-4">
          <img
            className="w-[50%] max-md:w-full h-[90vh] object-cover max-md:h-[50vh]"
            src="https://images.unsplash.com/photo-1629003796219-50be87eaf428"
            alt=""
          />

          <div className="w-[50%]  max-md:w-full h-[90vh] flex flex-col gap-8 max-md:gap-2">
            <h1 className="uppercase font-bold text-lg tracking-tight">Captivating Moments</h1>
            <h1 className="font-semibold w-[50%] leading-7 text-sm">
              Creating moments that stay with your brand.
            </h1>
            <p>
              We believe that great events don’t just happen — they’re built. With detail-oriented execution and creative direction, we ensure that every frame, every interaction, and every moment delivers value.
            </p>
            <div className="flex gap-5 max-md:flex-col  w-full  overflow-hidden">
              <img
                className="object-center object-cover max-md:h-[50%] max-md:w-full w-[60%]"
                src="https://images.unsplash.com/photo-1625539867671-af969da3a214"
                alt=""
              />
              <img
                className="object-center object-cover  max-md:h-[50%] max-md:w-full h-full w-[40%]"
                src="https://images.unsplash.com/photo-1628336358317-0582bfa7519d"
                alt=""
              />
            </div>
          </div>
        </div>

        <img
          className="w-full h-[90vh] object-cover"
          src="https://images.unsplash.com/photo-1667498234868-dfb09fdd5c3b"
          alt=""
        />

        {/* Section 4 */}
        <div className="view2 w-full flex justify-between gap-5 max-md:flex-col">
          <div className="w-[50%] max-md:w-full">
            <div className="w-full h-[86vh]">
              <img
                className="object-center object-cover h-full w-full"
                src="https://images.unsplash.com/photo-1566156922438-63b1e95e6bf9"
                alt=""
              />
            </div>
          </div>
          <div className="w-[50%] max-md:w-full">
            <img
              className="w-full object-top object-cover h-[68vh]"
              src="https://plus.unsplash.com/premium_photo-1727943456112-aa26c3a721f2"
              alt=""
            />
            <div className="flex gap-10 mt-4">
              <h1 className="font-semibold w-[50%] leading-7 text-sm">
                Turning Ideas into Real-world Impact
              </h1>
              <h1 className="w-fit text-[1rem]">

                With bold visuals, engaging formats, and a user-first approach, our campaigns turn passive viewers into active participants. It’s not just advertising — it’s brand building.
              </h1>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default EventDetails;
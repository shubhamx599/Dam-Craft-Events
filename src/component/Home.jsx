import React from "react";
import main from "../assets/1.mp4";
import EventSection from "../partial/EventSection";
// import tvs from "../assets/tvs.png";
// import maruti from "../assets/maruti.png";
// import yamaha from "../assets/yamaha.png";
// import urban from "../assets/urban.png";
// import wakefit from "../assets/wakefit.png";
import EventSlider from "../partial/EventSlider";
import Gallery from "../partial/Gallery";
import ClientsSlider from "../partial/ClientsSlider";

// import SnakeTextVideo from "../partial/SnakeTextVideo";
const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      {/* <div className="mlarge font-extrabold flex mt-[10rem] max-md:mt-[2rem]  justify-center items-center tracking-tight uppercase ">
        <h1 className="leading-none text-center">
          step into the world <br /> of dam craft <br /> events
        </h1>
      </div> */}

      <div>
        <EventSlider/>
      </div>



      <div className="   flex justify-end">
        <div className="flex  w-[75%] max-md:w-full ">
          <h2 className="medium  font-semibold text-end max-md:text-start">
            At <span className="text-green-600"> DAM Craft Events,</span> we provide end-to-end event solutions designed
            to deliver value, creativity, and flawless execution. our passionate
            team has quickly earned a trusted name in the market known for
            turning every event into a memorable and profitable experience.
          </h2>
        </div>
      </div>

      <EventSection />
      {/* <div className="mt-[5rem] max-md:mt-[1rem]">
        <h1 className="mmedium font-semibold uppercase">brand we've worked with</h1>

        <div className="flex gap-10 max-md:flex-col max-md:gap-4   ">
          <div>

            <div className="flex flex-col gap-8 mt-10">
              <img className="h-[40px] w-fit filter grayscale" src={tvs} alt="tvs" />
              <p>
                We work with TVS to promote their bikes through creative roadshows, mall activations, and brand experiences that boost visibility, engage customers, and drive strong on-ground impact across target markets.
              </p>
            </div>
            <div className="flex flex-col gap-8 mt-10">
              <img className="h-[40px] w-fit filter grayscale" src={maruti} alt="tvs" />
              <p>
                We work with Maruti to craft engaging brand experiences that highlight their vehicles, enhance customer interaction, and boost brand trust through strategic activations, visual storytelling, and market-focused promotional campaigns.
              </p>
            </div>
            <div className="flex flex-col gap-8 mt-10">
              <img className="h-[40px] w-fit filter grayscale" src={yamaha} alt="tvs" />
              <p>
                We partner with Yamaha to create high-impact brand activations that showcase their bikes, connect with audiences emotionally, and strengthen market presence through innovative, on-ground engagement and compelling visual storytelling.
              </p>
            </div>
          </div>

        
          <div>

            <div className="flex flex-col gap-8 mt-10">
              <img className="h-[40px] w-fit filter grayscale" src={urban} alt="tvs" />
              <p>
                We team up with Urban Ladder to deliver stylish, experience-driven brand activations that showcase modern living, engage customers meaningfully, and elevate the brand’s presence through creative, design-focused promotional strategies.
              </p>
            </div>
            <div className="flex flex-col gap-8 mt-10">
              <img className="h-[40px] w-fit filter grayscale" src={wakefit} alt="tvs" />
              <p>
                We collaborate with Wakefit to amplify brand presence through innovative activations, interactive promotions, and creative storytelling that connect deeply with audiences and highlight the comfort, quality, and lifestyle Wakefit represents.
              </p>
            </div>

          </div>
        </div>
      </div> */}
      <Gallery/>
      <ClientsSlider/>
    </div>
  );
};

export default Home;

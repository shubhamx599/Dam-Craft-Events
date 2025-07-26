import React from 'react'
import deepak from "../assets/deepak.jpg"
import mukesh from "../assets/mukesh.jpg"
import ashish from "../assets/ashish.jpg"

const About = () => {

  const teamData = [{
    img: deepak,
    name: "Deepak Sharma",
    title: "Founder"
  },
  {
    img: mukesh,
    name: "Mukesh Kumar",
    title: "Founder"
  },
  {
    img: ashish,
    name: "Ashish Jain",
    title: "Founder"
  },]


  return (
    <div className='flex flex-col gap-20'>
      <div className="mlarge font-extrabold flex flex-col mt-[10rem] max-md:mt-[2rem] justify-between h-[55vh] max-md:h-fit items-center tracking-tight uppercase">
        <h1 className="leading-none text-center">
          we plan magic you enjoy <br /> the moment
        </h1>
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

      <div className='flex justify-between gap-40 max-md:gap-5 max-md:flex-col'>
        <div>
          <div className='flex gap-2 items-center   h-fit'>

            <div className="bg-black h-[12px] w-[12px] rounded-full"></div>
            <p className="uppercase small font-semibold">who we are</p>
          </div>
        </div>

        <h1 className='normal  w-[60%] max-md:w-full max-md:text-start text-end leading-none'>We are explorers at heart, always searching for creative ways to make a meaningful impact and solve problems.</h1>
      </div>

      <div>
        <div className='flex gap-2 items-center   h-fit'>
          <div className="bg-black h-[12px] w-[12px] rounded-full"></div>
          <p className="uppercase small font-semibold"> the team</p>
        </div>

        <div className='mt-[2rem] flex justify-between max-md:flex-col gap-5'>

          {
            teamData.map((data, i) => (
              <div key={i} className='w-[30%] max-md:w-full flex flex-col  '>
                <img src={data.img} className='w-full object-cover h-[70vh] max-md:object-top max-md:h-[40vh]' alt="" />
                <p className=" medium font-semibold">{data.name}</p>
                <p className=" medium font-semibold text-zinc-600 leading-none">{data.title}</p>
              </div>
            ))
          }
        </div>

      </div>



      <div className=' min-h-[80vh] gap-8 flex flex-col justify-between'>
        <div className='flex justify-between  max-md:gap-5 max-md:flex-col '>

          <div className='flex gap-2 items-center   h-fit'>
            <div className="bg-black h-[12px] w-[12px] rounded-full"></div>
            <p className="uppercase small font-semibold">our approach</p>
          </div>

          <h1 className='normal  w-[60%] max-md:w-full max-md:text-start text-end leading-none'>First step to solving a problem is recognizing there is one.</h1>
        </div>

        <div className='flex justify-between gap-2 max-md:flex-col'>
          <div className=' flex border-2 border-white rounded-xl w-[18%] max-md:w-full bg-[#eeeeee] p-4 flex-col justify-between max-md:gap-20 h-[45vh] max-md:h-[30vh] '>
            <p className='uppercase small font-semibold'>Elevating Event Exploration</p>
            <p>Tailored for discerning audiences, every moment feels unique and unforgettable.</p>
          </div>

          <div className=' flex border-2 border-white rounded-xl w-[18%] max-md:w-full bg-[#eeeeee]  h-[45vh]  overflow-hidden '>
            <img src={deepak} className='w-full h-full object-cover' alt="" />
          </div>



          <div className=' flex border-2 border-white rounded-xl w-[18%] max-md:w-full bg-[#eeeeee] p-4 flex-col justify-between max-md:gap-20 h-[45vh] max-md:h-[30vh] '>
            <p className='uppercase small font-semibold'>Building a high quality community</p>
            <p>Each one crafted to deliver unforgettable experience for guest.</p>
          </div>
          <div className=' flex border-2 border-white rounded-xl w-[18%] max-md:w-full bg-[#eeeeee] p-4 flex-col justify-between max-md:gap-20 h-[45vh] max-md:h-[30vh] '>
            <p className='uppercase small font-semibold'>Creating authentic experience</p>
            <p>Blending exclusivity and accessibility, we redefine socializing with fresh experiences.</p>
          </div>

          <div className=' flex border-2 border-white rounded-xl w-[18%] max-md:w-full bg-[#eeeeee]  h-[45vh] overflow-hidden '>
            <img src={deepak} className='w-full h-full object-cover' alt="" />
          </div>



        </div>


      </div>

      <div className=' flex flex-col gap-5 '>
        <div className='flex justify-between gap-40 max-md:gap-5  max-md:flex-col'>
          <div>
            <div className='flex gap-2 items-center   h-fit'>

              <div className="bg-black h-[12px] w-[12px] rounded-full"></div>
              <p className="uppercase small font-semibold">what we do</p>
            </div>
          </div>
          <h1 className='normal  w-[60%] max-md:w-full max-md:text-start text-end leading-none'>
            Whether you're looking for exclusive events, premium access, or simply want to join a selective community,<span className=' font-semibold'> Dam Craft events </span> deliver an experience that transcends the ordinary.</h1>
        </div>

        <div className='relative flex justify-center items-center'>


          <div className='w-full h-[80vh] max-md:h-[50vh] relative mt-[1rem]'>
            <img src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='h-full w-full  object-cover' alt="" />


          </div>
          <h1 className='absolute mmedium text-white w-[50%] max-md:w-[80%] text-center font-semibold leading-none'>Need someone who can organize an event for you? <br />
            <span className='small font-normal'>you've just found us</span>
          </h1>
        </div>

      </div>

      




      </div>

      )
}

      export default About
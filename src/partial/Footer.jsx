import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="mt-[5rem] max-md:mt-[1rem]">
                <div className="flex justify-between gap-5 ">
                    <h1 className="medium">We would love to hear from you. <br /> Let's work — together.</h1>
                    <div className="flex flex-col gap-5 ">
                        <div className="">
                            <p className="small text-zinc-400 uppercase">Business enquiries</p>
                            <p className="small ">damcraftevents@gmail.com</p>
                            <p className="small ">+918527846574</p>
                        </div>
                        <div className="">
                            <p className="small text-zinc-400 uppercase">town</p>
                            <p className="small ">Building B-22, Jhilmil Industrial Area, Delhi-110092.</p>
                        </div>

                    </div>
                </div>

                <hr className="mt-[6rem] max-md:mt-[2rem]" />

                <div className="uppercase items-center mt-[1rem] text-sm max-md:text-xs flex justify-between">
                    <p>
                        damcraftevents &copy; {new Date().getFullYear()}
                    </p>
                    <div className="flex gap-20 max-md:gap-5  items-center">
                        <a href="">instagram</a>
                        <a href="">facebook</a>
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            className="small px-3 py-2 cursor-pointer bg-gray-300 rounded-full hover:bg-gray-200 transition"
                        >
                            <i className="ri-arrow-up-line"></i>
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
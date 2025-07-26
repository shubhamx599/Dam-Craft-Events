import React, { useState } from 'react';

const interests = [
  'Corporate Event', 'Market Activation', 'Advertising', 'Mall Activation',
  'Manager Meet', 'other',
];



const Contact = () => {
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState('');

  const toggleInterest = (item) => {
    setSelectedInterests(prev =>
      prev.includes(item)
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // ✅ Prevents page reload
    // Handle form submission logic here
    console.log('Form submitted!');
  };


  return (
    <div className="mt-[2rem] text-black font-sans">
      {/* Header */}
      <div className="flex justify-between items-start gap-10 max-md:flex-col">
        <div>
          <div className="flex items-center gap-2">
            <div className="bg-black h-3 w-3 rounded-full"></div>
            <p className="uppercase text-sm font-semibold">We're explorers</p>
          </div>
        </div>
        <h1 className="normal font-light leading-tight text-end max-md:text-start">
          Ready to take next step with us?
        </h1>
      </div>

      {/* Contact Form Section */}
      <div className="mt-14 flex gap-10 max-md:flex-col  justify-between ">
        {/* Left Side Text */}
        <div className="w-1/3 max-md:w-full">
          <div className="flex items-center gap-2">
            <div className="bg-black h-3 w-3 rounded-full"></div>
            <p className="uppercase text-sm font-semibold text-zinc-700">Contact Us</p>
          </div>
          <h2 className="mt-4 normal font-light leading-none">
            We believe in the power of digital, and we love collaborating with brands that feel the same. Let's connect.
          </h2>
        </div>

        {/* Right Side Form */}
        <form onSubmit={handleSubmit} className="w-[50%] max-md:w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          <input className="border-b py-2 border-zinc-500 outline-none placeholder-gray-400" placeholder="Name" type="text" />
          <input className="border-b py-2 border-zinc-500 outline-none placeholder-gray-400" placeholder="Company" type="text" />
          <input className="border-b py-2 border-zinc-500 outline-none placeholder-gray-400" placeholder="Your Email" type="email" />
          <input className="border-b py-2 border-zinc-500 outline-none placeholder-gray-400" placeholder="Your Phone" type="tel" />

          {/* Interests */}
          <div className="col-span-2 mt-4">
            <p className="mb-2 font-medium">I’m interested in...</p>
            <div className="flex flex-wrap gap-3">
              {interests.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`px-6 py-1 cursor-pointer border rounded-full transition ${
                    selectedInterests.includes(item) ? 'bg-black text-white' : 'text-black'
                  }`}
                  onClick={() => toggleInterest(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

         

          {/* Message */}
          <textarea
            rows={4}
            className="col-span-2 border-b py-2 outline-none placeholder-gray-400 mt-6"
            placeholder="Tell us about your query..."
          ></textarea>

          {/* Submit Button (Optional) */}
          <div className="col-span-2 mt-6">
            <button
              type="submit"
              className="bg-black text-white py-1 cursor-pointer px-8 rounded-full hover:bg-zinc-800 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

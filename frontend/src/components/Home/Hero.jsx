import React from "react";
import ImageHero from "../../assets/appimg.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate=useNavigate();
  return (
    <section className="flex flex-col-reverse md:flex-row w-full overflow-hidden bg-white">
      {/* Left Content */}
      <div className="w-full md:w-1/3 flex flex-col items-center md:items-start justify-center p-6 md:p-10 text-center md:text-left space-y-4 ">
        <h2 className="text-2xl md:text-3xl font-bold leading-snug">
          The Best way to get <br />
          Wherever you're going
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          Book a Ride now
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4 mt-4 w-full md:w-auto">
          <button className="bg-[#0F9D8E] text-white rounded-md px-5 py-2 hover:bg-[#0c7e71] transition" onClick={()=>navigate("/Rides")}>
            Search a Ride
          </button>
          <button className="border border-[#0F9D8E] text-[#0F9D8E] rounded-md px-5 py-2 hover:bg-[#0F9D8E] hover:text-white transition" onClick={navigate("/PublishRide")} >
            Publish a Ride
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-2/3 flex items-center justify-center">
        <img 
          src={ImageHero} 
          alt="Carpool illustration" 
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;

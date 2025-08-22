import React from "react";
import { Link } from "react-router-dom";
import { CirclePlus, Search } from "lucide-react";
import Logo from "../assets/ridemate.svg";

const Header = () => {
  return (
    <header className="bg-white shadow-lg border-b border-gray-200 py-2">
      <div className="flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link to='/'>
        <img src={Logo} alt="Ridemate Logo" className="w-28 md:w-32" />
</Link>
        {/* Navigation Links */}
        <nav className="hidden md:flex w-1/3 justify-between text-sm font-medium">
          <Link
            to="/Rides"
            className="flex items-center gap-1 text-[#0F9D8E] hover:text-black transition-colors duration-300"
          >
            <Search className="w-4 h-4" />
            Search a Ride
          </Link>

          <Link
            to="/PublishRide"
            className="flex items-center gap-1 text-[#0F9D8E] hover:text-black transition-colors duration-300"
          >
            Publish a Ride
            <CirclePlus className="w-4 h-4" />
          </Link>
        </nav>

        {/* Logout Button */}
        <button className="bg-[#0F9D8E] text-white px-4 py-2 rounded-lg text-sm md:text-base hover:bg-[#0c7e71] transition-colors">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;

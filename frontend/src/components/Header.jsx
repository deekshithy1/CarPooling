import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PlusCircle, Search } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/PublishRide', label: 'Publish a Ride', icon: <PlusCircle className="w-4 ml-1" aria-label="plus" /> },
  { to: '/SearchRide', label: 'Search for Rides', icon: <Search className="w-4 ml-1" aria-label="search" /> },
];

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center justify-between py-4 px-6 ">
        <div className="text-xl font-bold">RideMate</div>

        <nav className="flex space-x-6">
          {navLinks.map(({ to, label, icon }) => (
            <Link
              key={to}
              to={to}
              className={`flex items-center  font-light border-b-2 ${
                location.pathname === to ? 'border-black' : 'border-transparent'
              } hover:border-blue-400 hover:bg-gray-200 hover:rounded-2xl transition-all`}
            >
              {label} {icon}
            </Link>
          ))}
        </nav>

        <Link to="/Login">
          <button className="bg-red-400 text-white px-5 py-2 rounded-2xl hover:bg-red-500 transition-colors">
            Login
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;

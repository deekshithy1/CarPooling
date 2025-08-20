import React, { useState } from 'react';
import { Calendar, CircleDotDashed, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useRideStore } from '../store/useRideStore';

const SearchRide = () => {
    const navigate=useNavigate();
    const {getAvailableRides}=useRideStore();
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    DateOfJourney: '',

  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Search Ride:', formData);
    await getAvailableRides(formData);
    navigate("/Rides")
    // Add search logic here
   
  };


  const inputClasses = 'border p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-400';

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-start">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-lg p-6 rounded-xl shadow-md flex flex-col gap-4"
      >
        <h2 className="text-2xl font-semibold mb-4">Search for a Ride</h2>

        {/* From */}
        <div className="flex items-center gap-2">
          <CircleDotDashed className="w-5 text-gray-600" />
          <input
            type="text"
            name="from"
            placeholder="Leaving From"
            value={formData.from}
            onChange={handleChange}
            className={inputClasses}
            required
          />
        </div>

        {/* To */}
        <div className="flex items-center gap-2">
          <CircleDotDashed className="w-5 text-gray-600" />
          <input
            type="text"
            name="to"
            placeholder="Going To"
            value={formData.to}
            onChange={handleChange}
            className={inputClasses}
            required
          />
        </div>

        {/* Date */}
        <div className="flex items-center gap-2">
          <Calendar className="w-5 text-gray-600" />
          <input
            type="date"
            name="DateOfJourney"
            value={formData.DateOfJourney}
            onChange={handleChange}
            className={inputClasses}
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-green-400 text-white font-medium py-2 rounded-md hover:bg-green-500 transition-colors mt-2"
        >
          Search Ride
        </button>
      </form>
    </div>
  );
};

export default SearchRide;

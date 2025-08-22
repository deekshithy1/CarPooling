import React from "react";

const PublishRide = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-gray-50">
      <div className="border border-gray-300 bg-white shadow-md rounded-2xl w-full max-w-md p-6">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Publish a Ride
        </h1>

        <form className="space-y-4">
          {/* Source */}
          <div className="flex flex-col">
            <label htmlFor="from" className="text-sm font-medium text-gray-700">
              Source
            </label>
            <input
              type="text"
              name="from"
              id="from"
              placeholder="e.g. Hyderabad"
              className="border border-gray-3qqqq00 rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-[#0F9D8E] focus:outline-none"
            />
          </div>

          {/* Destination */}
          <div className="flex flex-col">
            <label htmlFor="to" className="text-sm font-medium text-gray-700">
              Destination
            </label>
            <input
              type="text"
              name="to"
              id="to"
              placeholder="e.g. Chennai"
              className="border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-[#0F9D8E] focus:outline-none"
            />
          </div>

          {/* Date */}
          <div className="flex flex-col">
            <label
              htmlFor="dateOfJourney"
              className="text-sm font-medium text-gray-700"
            >
              Date of Journey
            </label>
            <input
              type="date"
              name="dateOfJourney"
              id="dateOfJourney"
              className="border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-[#0F9D8E] focus:outline-none"
            />
          </div>

          {/* Fare */}
          <div className="flex flex-col">
            <label htmlFor="fare" className="text-sm font-medium text-gray-700">
              Fare
            </label>
            <input
              type="number"
              name="fare"
              id="fare"
              placeholder="e.g. 500"
              className="border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-[#0F9D8E] focus:outline-none no-spin"
            />
          </div>

          {/* Seats */}
          <div className="flex flex-col">
            <label
              htmlFor="seatsAvailable"
              className="text-sm font-medium text-gray-700"
            >
              Seats Available
            </label>
            <input
              type="number"
              name="seatsAvailable"
              id="seatsAvailable"
              placeholder="e.g. 3"
              className="border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-[#0F9D8E] focus:outline-none no-spin"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#0F9D8E] text-white rounded-lg py-2 px-4 mt-2 hover:bg-[#0c8275] transition duration-200"
          >
            Publish Ride
          </button>
        </form>
      </div>
    </div>
  );
};

export default PublishRide;

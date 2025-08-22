import { Dot } from 'lucide-react';
import React, { useState } from 'react';
import BookRide from './BookRide'; // ✅ component
import { useRideStore } from '../../store/useRideStore';

const AvailableRides = ({ rides }) => {
  const [selectedRide, setSelectedRide] = useState(null);
  const { bookRide } = useRideStore(); // ✅ rename action

  return (
    <div className="w-full flex flex-col items-center pt-4 gap-4">
      {rides && rides.length > 0 ? (
        rides.map((ride) => (
          <div
            key={ride._id}
            className="bg-white px-6 py-5 rounded-xl shadow-md flex flex-col gap-2 relative w-3/4"
          >
            <div className="border-l-4 border-gray-400 h-8 mx-4 absolute top-10 left-4.5"></div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold flex items-center">
                <Dot /> {ride.from}
              </h3>
              <span className="text-gray-500">{ride.Time}</span>
            </div>
            <h3 className="text-lg font-semibold flex items-center">
              <Dot /> {ride.to}
            </h3>
            <div className="flex justify-between">
              <p className="text-gray-600">Fare: ₹{ride.fare}</p>
              <p className="text-gray-600">Seats Available: {ride.seatsAvailable}</p>
            </div>
            <p className="text-gray-500 text-sm">Offered By: {ride.offeredBy}</p>
            <p className="text-gray-500 text-sm">
              Date: {new Date(ride.DateOfJourney).toLocaleDateString()}
            </p>
            <button
              onClick={() => setSelectedRide(ride)} // ✅ open modal
              className="mt-4 bg-[#0F9D8E] text-white py-2 rounded-xl hover:bg-blue-600 transition-colors"
            >
              Book
            </button>
          </div>
        ))
      ) : (
        <p>No rides available</p>
      )}

      {/* ✅ Modal */}
      <BookRide
        booking={selectedRide}
        onCancel={() => setSelectedRide(null)}
        onConfirm={async (ride, passengers) => {
          console.log('Booking ride:', ride, 'Passengers:', passengers);
          await bookRide(ride._id, passengers); // ✅ call action
          setSelectedRide(null); // close modal
        }}
      />
    </div>
  );
};

export default AvailableRides;

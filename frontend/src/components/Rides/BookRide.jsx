import { User } from "lucide-react";
import React, { useState } from "react";

const BookRide = ({ booking, onCancel, onConfirm }) => {
  const [passengers, setPassengers] = useState(1);

  if (!booking) return null; // ✅ only show if ride selected

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg text-center w-96">
        <h2 className="text-xl font-bold mb-4">Confirm Booking</h2>
        <p className="mb-2">Are you sure you want to book this ride?</p>
        <p className="text-gray-600 text-sm mb-3">
          {booking.from} → {booking.to} <br />
          Date: {new Date(booking.DateOfJourney).toLocaleDateString()} <br />
          Fare: ₹{booking.fare} <br />
          Seats Available: {booking.seatsAvailable}
        </p>

        {/* Passengers Input */}
        <div className="flex items-center gap-2 justify-center">
          <User />
          <span>Passengers:</span>
          <input
            type="number"
            min={1}
            max={booking.seatsAvailable}
            value={passengers}
            onChange={(e) => setPassengers(Number(e.target.value))}
            className="w-20 border rounded-md px-2 py-1 text-center"
          />
        </div>

        {/* Actions */}
        <div className="flex justify-around mt-6">
          <button
            onClick={onCancel} // ✅ closes modal
            className="bg-gray-300 px-4 py-2 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={() => onConfirm(booking, passengers)} // ✅ passes data back
            className="bg-[#0F9D8E] text-white px-4 py-2 rounded-lg"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookRide;

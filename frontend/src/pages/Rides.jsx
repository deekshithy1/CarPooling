import { Dot, User } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useRideStore } from '../store/useRideStore';

const Rides = () => {
    const {availableRides,getAvailableRides,loadFromLocal,bookRide}=useRideStore();
    const [view,setview]=useState("rides");
    const [selectedride,setselectedride]=useState([]);
  useEffect(() => {
    getAvailableRides(); // it will use localStorage if no args
  }, []);

const handleBook=async(ride)=>{

   setselectedride(ride);
   setview("BookingView");
}
const handleBookRIde=async(rideDetails)=>{
  const res=   await bookRide(rideDetails);
     
}

  if(!availableRides)return<div>No Rides On this Day</div>
  return (
    <div className="p-6 bg-gray-100 min-h-screen grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      {view==="rides"&& availableRides.map((ride) => (
        <div
          key={ride._id}
          className="bg-white p-6 rounded-xl shadow-md flex flex-col gap-2 relative"
        >
              <div className="border-l-4 border-gray-400 h-8 mx-4 absolute top-11 left-4.5"></div>

          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold flex items-center"><Dot/> {ride.from}</h3>
            <span className="text-gray-500">{ride.Time}</span>
          </div>
          <h3 className="text-lg font-semibold flex items-center"> <Dot/> {ride.to}</h3>
          <p className="text-gray-600">Fare: ₹{ride.fare}</p>
          <p className="text-gray-600">Seats Available: {ride.seatsAvailable}</p>
          <p className="text-gray-500 text-sm">Offered By: {ride.offeredBy}</p>
          <p className="text-gray-500 text-sm">
            Date: {new Date(ride.DateOfJourney).toLocaleDateString()}
          </p>
          <button className="mt-4 bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition-colors" onClick={()=>{handleBook(ride)}} >
            Book
          </button>

        </div>
      ))}

      {
        view==="BookingView" &&(
            <div className='relative bg-white p-6 rounded-xl shadow-md flex flex-col gap-2 h-fit'>
                    <div className="border-l-4 border-gray-400 h-8 mx-4 absolute top-11 left-4.5"></div>

<div className="flex justify-between items-center mb-2">
  <h3 className="text-lg font-semibold flex items-center"><Dot/> {selectedride.from}</h3>
  <span className="text-gray-500">{selectedride.Time}</span>
</div>
<h3 className="text-lg font-semibold flex items-center"> <Dot/> {selectedride.to}</h3>
<p className="text-gray-600">Fare: ₹{selectedride.fare}</p>
<p className="text-gray-600">Seats Available: {selectedride.seatsAvailable}</p>
<p className="text-gray-500 text-sm">Offered By: {selectedride.offeredBy}</p>
<div className='flex border border-gray-200 w-fit rounded-2xl p-2' >
    <User/>
<input type="number" placeholder='' className='w-10'  name='passengers' defaultValue={1} />Passengers
</div>
<p className="text-gray-500 text-sm">
  Date: {new Date(selectedride.DateOfJourney).toLocaleDateString()}
</p>
<button className="mt-4 bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition-colors" onClick={()=>handleBookRIde(selectedride)} >
            Book
          </button>
            </div>
        )
      }
    </div>
  );
};

export default Rides;

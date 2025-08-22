import React, { useEffect, useState } from "react";
import SearchRides from "../components/Rides/SearchRidesForm";
import { useRideStore } from "../store/useRideStore";
import AvailableRides from "../components/Rides/AvailableRides";
import { ArrowBigLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Rides = () => {
  const { availableRides, getAvailableRides, loading,clearRideStore } = useRideStore();

  // Initialize view based on whether search exists in localStorage
  const [view, setView] = useState(() =>
    localStorage.getItem("rideSearch") ? "rides" : "search"
  );
  const navigate=useNavigate();


  const handleBack=()=>{
    
    setView("search");
  clearRideStore();
  navigate("/");
  
  }

  const handleSearch = async (data) => {
    await getAvailableRides(data); // saves search in localStorage
    setView("rides");
  };

  // Fetch rides only once on mount if we already have a search saved
  useEffect(() => {
    if (view === "rides") {
      getAvailableRides(); // no params → will use saved search
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // ✅ empty array → runs only once

  return (
    <div>
        <button className="bg-red-500 text-white p-2  rounded-2xl px-3 flex" onClick={handleBack} ><ArrowBigLeft/> Back</button>
      {/* {view === "search" && <SearchRides onSearch={handleSearch} />}
       
      {view === "rides" &&
        (loading ? (
          <p>Loading rides...</p>
        ) : (
          <AvailableRides rides={availableRides}  />   
        ))} */}
      <SearchRides onSearch={handleSearch} view={view} />
      <AvailableRides rides={availableRides}   />   
    </div>
  );
};

export default Rides;

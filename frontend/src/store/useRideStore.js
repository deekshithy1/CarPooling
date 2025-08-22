import { create } from "zustand";
import axiosInstance from "../api/Api";

export const useRideStore = create((set, get) => ({
  availableRides: [],
  loading: false,
  suggestions:[],
  getAvailableRides: async (data) => {
    let searchData = data;

    // If no new data passed, try from localStorage
    if (!searchData) {
      const saved = localStorage.getItem("rideSearch");
      if (saved) searchData = JSON.parse(saved);
    }
     
    // If still nothing, just return
    if (!searchData) return;

    // Save the latest search for persistence
    localStorage.setItem("rideSearch", JSON.stringify(searchData));

    set({ loading: true }); // start loading

    try {
      const res = await axiosInstance.get("/Ride/getRideBySearch", {
        params: searchData, // ✅ use searchData
      });

      set({ availableRides: res.data, loading: false });
    } catch (err) {
      console.log(err);
      set({ loading: false });
    }
  },
  bookRide:async(RideId,passengers)=>{

   console.log(RideId,passengers)
    try{
        const res=axiosInstance.post("/Ride/BookRide",{RideId,passengers});
        
    }
    catch(err){
        console.log(err);
    }

  },
  clearRideStore:()=>{
    set({ availableRides: [], loading: false });
    localStorage.removeItem("rideSearch");
  },
  fetchLocation:async(input)=>{
    if(!input || input.length < 3) return [];
      console.log(input)
     try{
        const res=await axiosInstance.get("/maps/get-suggestions",{
            params:{input}
        });

        // return res.data.suggestions;
        set({ suggestions: res.data.predictions });
     }
     catch(err){
        console.log(err);
     };

  }
}));

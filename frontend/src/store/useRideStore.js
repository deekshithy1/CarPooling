import { create } from "zustand";
import axiosInstance from "../api/Api.js";

export const useRideStore = create((set, get) => ({
  availableRides: [],
  loading: false,

  getAvailableRides: async (data) => {
    // If no data passed, try from localStorage
    let searchData = data;
    if (!searchData) {
      const saved = localStorage.getItem("rideSearch");
      if (saved) searchData = JSON.parse(saved);
    }

    if (!searchData) return; // nothing to search

    // Save latest search to localStorage
    localStorage.setItem("rideSearch", JSON.stringify(searchData));

    set({ loading: true });
    try {
      const res = await axiosInstance.get("/Ride/getRideBySearch", {
        params: searchData,
      });
      set({ availableRides: res.data });
    } catch (err) {
      console.error(err);
    } finally {
      set({ loading: false });
    }
  },
  bookRide:async(data)=>{
       try{
        const res=await axiosInstance.post("/Ride/BookRide",data)
       }catch(err){
        console.log(err)
       }
  }
}));

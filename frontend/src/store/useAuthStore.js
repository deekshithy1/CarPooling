import { create } from "zustand";
import axiosInstance from "../api/Api";


export const useAuthStore=create((set,get)=>({
    user:null,
    token:null,
    error:null,
    login:async(data)=>{
        try{
             const res=await axiosInstance.post("/auth/login",data);
             set({token:res.data.token,user:res.data.user});
             localStorage.setItem("token",token);
        }
        catch(err){
            set({ error: err.response?.data?.message || "Login failed" });
        }
    },

    logout:async()=>{
        localStorage.removeItem("token");
        set({user:null,token:null});
    }
}))
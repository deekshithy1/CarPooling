import { create } from "zustand";
import axiosInstance from "../api/Api";

const useAuthStore = create((set, get) => ({
  user: null,
  token: localStorage.getItem("token") || null,

  login: async (data) => {
    try {
      const res = await axiosInstance.post("/auth/login", data);
      localStorage.setItem("token", res.data.token); // ✅ persist
      set({ user: res.data.user, token: res.data.token });
    } catch (err) {
      console.error("Login failed:", err);
    }
  },

  logout: () => {
    localStorage.removeItem("token"); // ✅ simple clear
    set({ token: null, user: null });
  },

  getUser: async () => {
    const token = get().token || localStorage.getItem("token");
    if (!token) return;

    try {
      const res = await axiosInstance.get("/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      set({ user: res.data }); // ✅ update user
    } catch (err) {
      console.error("Fetching user failed:", err);
      set({ user: null, token: null });
      localStorage.removeItem("token");
    }
  },
}));

export default useAuthStore;

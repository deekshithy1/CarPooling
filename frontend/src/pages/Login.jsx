import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuthStore();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload
    console.log(formData)
    await login(formData);
    navigate("/");
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 border border-gray-300 p-6 rounded-2xl shadow-md"
      >
        <div className="relative">
          <label
            htmlFor="email"
            className="absolute -top-2 left-2 bg-white px-1 font-semibold text-xs"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-lg w-64"
          />
        </div>

        <div className="relative">
          <label
            htmlFor="password"
            className="absolute -top-2 left-2 bg-white px-1 font-semibold text-xs"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-lg w-64"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

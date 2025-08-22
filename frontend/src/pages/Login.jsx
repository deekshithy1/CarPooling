import React, { useState } from 'react';
import axiosInstance from '../api/Api';
import { useNavigate } from 'react-router-dom';
import logo from  "../assets/ridemate.svg"
import useAuthStore from '../store/useAuthStore';
const Login = () => {
 const [formData,setFormData]=useState({email:"",password:""});
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const {login}=useAuthStore();
  const handleSubmit = async (e) => {
    e.preventDefault();
    
   await   login(formData);
   navigate("/");
  };


  return (
    <div className="flex min-h-screen items-center justify-center  px-6 py-12 ">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <img
            src={logo}
            alt="Logo"
            className="mx-auto  w-auto h-20"
          />
          <h2 className="mt-6 text-2xl font-bold text-white">Sign in to your account</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6  p-6 rounded-lg shadow-lg border border-gray-300">
          {error && <p className="text-red-400 text-sm">{error}</p>}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-500">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="mt-2 block w-full rounded-md px-3 py-2  border  border-gray-300 placeholder-gray-400 focus:outline-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-500">
              Password
            </label>
            <input
              id="password"
              type="password"
              name='password'
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="mt-2 block w-full rounded-md  px-3 py-2  placeholder-gray-400 focus:outline-indigo-500 border border-gray-300"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#0F9D8E] rounded-md text-white font-semibold hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Sign In
          </button>
        </form>

      </div>
    </div>
  );
};

export default Login;

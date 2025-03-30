import React, { useState } from "react";
import logo from "./logo.png";
import signupBg from "./SignupPage.jpg";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const nevigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    console.log(e.target.name);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form Data Submitted", formData);
    setFormData({
      name: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    })
  };

  return (
    <div
      className="flex h-screen w-screen items-center justify-center relative bg-cover bg-center"
      style={{ backgroundImage: `url(${signupBg})` }}
    >
      <button
        onClick={() => nevigate("/")}
        className="text-white absolute top-0 bg-blue-600 m-4 p-3 rounded-xl right-0"
      >
        Already have an account? Log In
      </button>

      <div className="h-auto w-[90%] max-w-md absolute rounded-xl backdrop-blur-lg bg-white/10 shadow-lg shadow-black p-6 flex flex-col items-center">
        <img
          className="w-20 h-20 mb-4 rounded-full shadow-md"
          src={logo}
          alt="Logo"
        />
        <h2 className="text-white text-2xl font-semibold mb-4">
          Create Your Account
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center w-full gap-4"
        >
          <input
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-300"
            type="text"
            name="name"
            value={formData.name}
            placeholder="Enter Your Name"
            onChange={handleChange}
            required
          />
          <input
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-300"
            type="tel"
            name="phone"
            value={formData.phone}
            placeholder="Enter Your Phone Number"
            onChange={handleChange}
            required
          />
          <input
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-300"
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter Your Email"
            onChange={handleChange}
            required
          />
          <input
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-300"
            type="password"
            name="password"
            value={formData.password}
            placeholder="Enter Your Password"
            onChange={handleChange}
            required
          />
          <input
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-300"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Your Password"
            onChange={handleChange}
            required
          />
          <button className="w-full mt-3 py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-400 transition duration-200">
            Sign Up
          </button>
        </form>
        <div className="flex justify-between w-full mt-4 text-blue-300 text-sm font-medium">
          <a onClick={()=>nevigate("/forget")} className="hover:text-blue-400 cursor-pointer">Forgot Password?</a>
          <a onClick={()=>nevigate("/help")} className="hover:text-blue-400 cursor-pointer">Need Help?</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;

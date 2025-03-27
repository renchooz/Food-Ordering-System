import React, { useState } from "react";
import logo from "./logo.png";
import login from "./LoginPage.jpeg";

const Login = () => {
  const [UserData, setUserData] = useState({
    name:"",
    email:"",
    password:""

})
let SubmitHandler =(e)=>{
  setUserData({
    name
  })
  
e.preventDefault(e)
}

  return (
    <div className="flex h-screen w-screen items-center justify-center relative bg-cover bg-center" style={{ backgroundImage: `url(${login})` }}>
      <div className="h-auto w-[90%] max-w-md absolute rounded-xl backdrop-blur-lg bg-white/10 shadow-lg shadow-black p-6 flex flex-col items-center">
        <img className="w-20 h-20 mb-4 rounded-full shadow-md" src={logo} alt="Logo" />
        <h2 className="text-white text-2xl font-semibold mb-4">Welcome Back</h2>
        <form onSubmit={(e)=>{SubmitHandler(e)}} className="flex flex-col items-center w-full gap-4">
          <input
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-300"
            type="text"
            value={UserData.name}
            name="name"
            placeholder="Enter Your Name"
          />
          <input
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-300"
            type="email"
            value={UserData.email}
            name="email"
            placeholder="Enter Your Email"
          />
          <input
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-300"
            type="password"
            value={UserData.password}
            name="password"
            placeholder="Enter Your Password"
          />
          <button className="w-full mt-3 py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-400 transition duration-200">Submit</button>
        </form>
        <div className="flex justify-between w-full mt-4 text-blue-300 text-sm font-medium">
          <a className="hover:text-blue-400 cursor-pointer">Forgot Password?</a>
          <a className="hover:text-blue-400 cursor-pointer">Need Help?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
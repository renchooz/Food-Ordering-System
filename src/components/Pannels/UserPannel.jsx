import React from 'react';
import image from './imgs/banner.jpeg';
import logo from "./imgs/logo.png";
import veg from "./imgs/veg.png"
import Nonveg from "./imgs/non-veg.png"
import chinese from "./imgs/noodle.png"
import DietFood from "./imgs/dietfood.webp"
import FastFood from "./imgs/fastfood.webp"
import { useNavigate } from 'react-router-dom';

const UserPannel = () => {
  let nevigate = useNavigate()
  return (
    <><div className='w-[100%] h-[100%] overflow-hidden'>
    <div className='w-screen h-screen relative bg-gray-800'>
      <img className='absolute w-full h-full object-cover object-center brightness-75' src={image} alt="Background" />
      
     
      <div className='absolute top-0 left-0 w-full h-20 flex justify-between items-center p-5 bg-gradient-to-b from-black/70 to-transparent'>
        <img className='h-14 rounded-full shadow-lg' src={logo} alt="Logo" />
        
        <div className='flex items-center gap-4 w-[50%] justify-center'>
          <input 
            className='w-[60%] py-2 px-4 rounded-xl shadow-md bg-white text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500' 
            type="text" 
            placeholder='Search your favorite meals...'
          />
          <button className='px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl shadow-md transition-all duration-300'>Search</button>
        </div>
        
        <button onClick={()=>nevigate("/")} className='px-4 py-2 bg-white text-red-600 font-semibold rounded-full shadow-md hover:bg-gray-100 transition-all duration-300'>Login / Signup</button>
      </div>
      
      
      <div className='absolute bottom-40 left-10 w-[55%] text-white font-bold text-[4vw] leading-tight'>
        <h1>
          From your favorite <span className='text-red-600'>restaurants</span> to your table
          <br /> fast, fresh, and hassle-free!
        </h1>
      </div>
    
    </div>
    <div className="w-screen h-[25vw] shadow-2xl flex bg-gradient-to-r from-red-900 to-red-700 backdrop-blur-lg p-5 justify-center items-center">
  <div className="w-[78%] h-full rounded-3xl bg-[#F5F3CD] border-2 border-gray-800 shadow-xl p-6">
    <h1 className="font-extrabold text-center text-[3.5vw] text-red-600 drop-shadow-md tracking-wide">
      What's In Your Mind?
    </h1>
    <div className="flex items-center justify-center gap-8 mt-4">
      {[
        { img: veg, label: "Veg" },
        { img: Nonveg, label: "Non-Veg" },
        { img: chinese, label: "Chinese" },
        { img: FastFood, label: "Fast Food" },
        { img: DietFood, label: "Diet Food" }
      ].map(({ img, label }, index) => (
        <div key={index} className="w-[18%] transition-transform transform hover:scale-110">
          <img className="w-[80%] m-auto mix-blend-darken rounded-full border-2 border-gray-700" src={img} alt={label} />
          <h3 className="text-center text-xl font-semibold mt-2 text-gray-800">{label}</h3>
        </div>
      ))}
    </div>
  </div>
</div>

    </div>
    </>
  );
};

export default UserPannel;
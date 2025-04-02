import React from 'react';
import DietFood from './imgs/dietfood.webp';

const FoodBoxes = () => {
  return (
    <div className='h-auto w-full mt-5 bg-gradient-to-r flex justify-center items-center p-5'>
      <div className='p-5 w-[80%] h-full flex flex-wrap gap-6'>
        <div className='w-[22vw] m-auto h-[50vh] bg-white flex flex-col items-center justify-center rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-yellow-100'>
          <img className='h-40 w-40 object-cover rounded-full border-4 border-yellow-500' src={DietFood} alt='Food' />
          <h1 className='mt-4 text-2xl font-extrabold text-gray-800'>Try Combos</h1>
          <div className='mt-3 w-full px-5 text-left'>
            <h3 className='text-sm font-semibold text-gray-600'>⭐ Rating: 4.5/5</h3>
            <h3 className='text-sm font-semibold text-gray-600'>📍 Location: Downtown</h3>
          </div>
          <button className='mt-4 px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition-all duration-300'>Order Now</button>
        </div>
        <div className='w-[22vw] m-auto h-[50vh] bg-white flex flex-col items-center justify-center rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-yellow-100'>
          <img className='h-40 w-40 object-cover rounded-full border-4 border-yellow-500' src={DietFood} alt='Food' />
          <h1 className='mt-4 text-2xl font-extrabold text-gray-800'>Try Combos</h1>
          <div className='mt-3 w-full px-5 text-left'>
            <h3 className='text-sm font-semibold text-gray-600'>⭐ Rating: 4.5/5</h3>
            <h3 className='text-sm font-semibold text-gray-600'>📍 Location: Downtown</h3>
          </div>
          <button className='mt-4 px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition-all duration-300'>Order Now</button>
        </div>
        <div className='w-[22vw] m-auto h-[50vh] bg-white flex flex-col items-center justify-center rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-yellow-100'>
          <img className='h-40 w-40 object-cover rounded-full border-4 border-yellow-500' src={DietFood} alt='Food' />
          <h1 className='mt-4 text-2xl font-extrabold text-gray-800'>Try Combos</h1>
          <div className='mt-3 w-full px-5 text-left'>
            <h3 className='text-sm font-semibold text-gray-600'>⭐ Rating: 4.5/5</h3>
            <h3 className='text-sm font-semibold text-gray-600'>📍 Location: Downtown</h3>
          </div>
          <button className='mt-4 px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition-all duration-300'>Order Now</button>
        </div>
        <div className='w-[22vw] m-auto h-[50vh] bg-white flex flex-col items-center justify-center rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-yellow-100'>
          <img className='h-40 w-40 object-cover rounded-full border-4 border-yellow-500' src={DietFood} alt='Food' />
          <h1 className='mt-4 text-2xl font-extrabold text-gray-800'>Try Combos</h1>
          <div className='mt-3 w-full px-5 text-left'>
            <h3 className='text-sm font-semibold text-gray-600'>⭐ Rating: 4.5/5</h3>
            <h3 className='text-sm font-semibold text-gray-600'>📍 Location: Downtown</h3>
          </div>
          <button className='mt-4 px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition-all duration-300'>Order Now</button>
        </div>
        <div className='w-[22vw] m-auto h-[50vh] bg-white flex flex-col items-center justify-center rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-yellow-100'>
          <img className='h-40 w-40 object-cover rounded-full border-4 border-yellow-500' src={DietFood} alt='Food' />
          <h1 className='mt-4 text-2xl font-extrabold text-gray-800'>Try Combos</h1>
          <div className='mt-3 w-full px-5 text-left'>
            <h3 className='text-sm font-semibold text-gray-600'>⭐ Rating: 4.5/5</h3>
            <h3 className='text-sm font-semibold text-gray-600'>📍 Location: Downtown</h3>
          </div>
          <button className='mt-4 px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition-all duration-300'>Order Now</button>
        </div>
        <div className='w-[22vw] m-auto h-[50vh] bg-white flex flex-col items-center justify-center rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-yellow-100'>
          <img className='h-40 w-40 object-cover rounded-full border-4 border-yellow-500' src={DietFood} alt='Food' />
          <h1 className='mt-4 text-2xl font-extrabold text-gray-800'>Try Combos</h1>
          <div className='mt-3 w-full px-5 text-left'>
            <h3 className='text-sm font-semibold text-gray-600'>⭐ Rating: 4.5/5</h3>
            <h3 className='text-sm font-semibold text-gray-600'>📍 Location: Downtown</h3>
          </div>
          <button className='mt-4 px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition-all duration-300'>Order Now</button>
        </div>
       
      
       
      </div>
    </div>
  );
};

export default FoodBoxes;
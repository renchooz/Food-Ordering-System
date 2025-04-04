import React from 'react';
import DietFood from './imgs/dietfood.webp';

const FoodBoxes = ({foodItems}) => {
  return (
    <>
      <div className='h-auto w-full  flex flex-col items-center p-10'>
        <h1 className='text-4xl font-extrabold text-red mb-8'>Our Special Dishes</h1>
        
        {/* Best Sellers Section */}
        <section className='w-[80%] mb-10'>
          <h2 className='text-2xl font-bold text-gray-800 mb-5'>🔥 Best Sellers</h2>
          <div className='flex flex-wrap gap-6 justify-center'>
            {[...Array(3)].map((_, i) => (
              <FoodCard key={i} />
            ))}
          </div>
        </section>

        {/* New Arrivals Section */}
        <section className='w-[80%] mb-10'>
          <h2 className='text-2xl font-bold text-gray-800 mb-5'>🆕 New Arrivals</h2>
          <div className='flex flex-wrap gap-6 justify-center'>
            {[...Array(3)].map((_, i) => (
              <FoodCard key={i} />
            ))}
          </div>
        </section>

        {/* Popular Combos Section */}
        <section className='w-[80%]'>
          <h2 className='text-2xl font-bold text-gray-800 mb-5'>🥗 Popular Combos</h2>
          <div className='flex flex-wrap gap-6 justify-center'>
            {[...Array(3)].map((_, i) => (
              <FoodCard key={i} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

const FoodCard = () => {
  return (
    <div className='w-[22vw] h-[50vh] bg-white flex flex-col items-center justify-center rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-yellow-100'>
      <img className='h-40 w-40 object-cover rounded-full border-4 border-yellow-500' src={DietFood} alt='Food' />
      <h1 className='mt-4 text-2xl font-extrabold text-gray-800'>Try Combos</h1>
      <div className='mt-3 w-full px-5 text-left'>
        <h3 className='text-sm font-semibold text-gray-600'>⭐ Rating: 4.5/5</h3>
        <h3 className='text-sm font-semibold text-gray-600'>📍 Location: Downtown</h3>
      </div>
      <button className='mt-4 px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition-all duration-300'>Order Now</button>
    </div>
  );
};

export default FoodBoxes;
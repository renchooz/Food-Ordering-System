import React, { useState } from 'react';
import FoodBoxes from './FoodBoxes';

const ResturantPannel = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [newFood, setNewFood] = useState({ name: '', price: '', availability: 'Available', description: '', category: '' });

  const handleChange = (e) => {
    setNewFood({ ...newFood, [e.target.name]: e.target.value });
  };

  const addFoodItem = () => {
    console.log(newFood)
    if (newFood.name && newFood.price) {
      setFoodItems([...foodItems, newFood]);
      setNewFood({ name: '', price: '', availability: 'Available', description: '', category: '' });
      
    }
    
  };

  return (
    <div className='min-h-screen bg-gray-100 p-6'>
      <h1 className='text-3xl font-bold text-center mb-6'>Restaurant Dashboard</h1>
      <div className='max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md'>
        <h2 className='text-xl font-semibold mb-4'>Add New Food Item</h2>
        <div className='grid grid-cols-2 gap-4'>
          <input type='text' name='name' placeholder='Food Name' value={newFood.name} onChange={handleChange} className='border p-2 rounded' />
          <input type='number' name='price' placeholder='Food Price' value={newFood.price} onChange={handleChange} className='border p-2 rounded' />
          <select name='availability' value={newFood.availability} onChange={handleChange} className='border p-2 rounded'>
            <option value='Available'>Available</option>
            <option value='Unavailable'>Unavailable</option>
          </select>
          <input type='text' name='category' placeholder='Category' value={newFood.category} onChange={handleChange} className='border p-2 rounded' />
          <textarea name='description' placeholder='Description' value={newFood.description} onChange={handleChange} className='border p-2 rounded col-span-2'></textarea>
        </div>
        <button onClick={addFoodItem} className='mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>Add Food</button>
      </div>
      
      <div className='max-w-4xl mx-auto mt-6'>
        <h2 className='text-xl font-semibold mb-4'>Food Items</h2>
        <div className='grid gap-4'>
          {foodItems.map((food, index) => (
            <div key={index} className='p-4 bg-white rounded-lg shadow-md flex justify-between items-center'>
              <div>
                <h3 className='text-lg font-bold'>{food.name} ({food.category})</h3>
                <p className='text-gray-600'>₹{food.price}</p>
                <p className={`text-sm font-semibold ${food.availability === 'Available' ? 'text-green-600' : 'text-red-600'}`}>{food.availability}</p>
                <p className='text-gray-500'>{food.description}</p>
              </div>
            </div>
          ))}
        </div>
        <FoodBoxes foodItems={foodItems}/>
      </div>
      
    </div>
  );
};

export default ResturantPannel;

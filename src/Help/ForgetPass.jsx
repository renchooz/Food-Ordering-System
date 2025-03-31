import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer/Footer';


const ForgetPass = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ phone: '', otp: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
      
      
    };

    return (
       <>  <div className='relative flex justify-center items-center h-screen w-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black'>
            <div className='h-auto w-[90%] max-w-md absolute rounded-xl backdrop-blur-lg bg-gray-800/60 shadow-lg shadow-black p-8 flex flex-col items-center gap-8'>
                <h1 className='text-2xl font-bold text-white tracking-wide'>Forgot Password</h1>
                <form onSubmit={handleSubmit} className='flex flex-col items-center gap-6 w-full'>
                    <input
                        className='w-full border-gray-600 border p-4 rounded-lg bg-gray-700 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-500 text-lg'
                        type='text'
                        name='phone'
                        placeholder='Enter Mobile Number'
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className='w-full border-gray-600 border p-4 rounded-lg bg-gray-700 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-500 text-lg'
                        type='text'
                        name='otp'
                        placeholder='Enter OTP'
                        value={formData.otp}
                        onChange={handleChange}
                        required
                    />
                    <button type='submit' className='w-full py-3 rounded-lg bg-green-600 text-white text-lg font-semibold hover:bg-green-500 transition'>
                        Submit
                    </button>
                </form>
            </div>
           
        </div>
         </>
    );
};

export default ForgetPass;
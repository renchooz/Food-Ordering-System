import React from 'react';

const NeedHelp = () => {
  return (
    <div className='w-screen h-screen relative bg-gray-100 flex flex-col items-center'>
      <div className='h-auto min-h-40 w-full flex justify-center items-center'>
        <h1 className='text-[6vw] font-bold'>How Can I <span className='text-red-700'>Help</span> You</h1>
      </div>
      <div className='w-full h-[80%] p-10 flex justify-center'>
        <div className='flex flex-wrap gap-10 items-center '>
          <div className='p-5 h-56  border border-black rounded-2xl flex flex-col justify-between bg-white shadow-lg'>
            <h1 className='text-2xl mb-2 text-center font-semibold'>Frequently Asked Questions</h1>
            <ul className='list-disc pl-5 text-gray-700'>
              <li>How to place an order?</li>
              <li>How can I track my order?</li>
              <li>What payment methods are accepted?</li>
              <li>Can I modify or cancel my order?</li>
              
            </ul>
          </div>
          <div className='p-5 h-56  border border-black rounded-2xl flex flex-col justify-between bg-white shadow-lg'>
            <h1 className='text-2xl mb-2 text-center font-semibold'>Contact Support</h1>
            <ul className='list-disc pl-5 text-gray-700'>
              <li>Customer support email</li>
              <li>Live chat option (if available)</li>
              <li>Social media links for support</li>
              <li>Steps to report a missing/wrong item</li>
              <li>Refund & cancellation policy</li>
            </ul>
          </div>
          <div className='p-5 h-56  border border-black rounded-2xl flex flex-col justify-between bg-white shadow-lg'>
            <h1 className='text-2xl mb-2 text-center font-semibold'> Order Issues & Refunds</h1>
            <ul className='list-disc pl-5 text-gray-700'>
              <li>Steps to report a missing/wrong item</li>
              <li>Refund & cancellation policy</li>
              <li>How long does it take to get a refund?</li>
         
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedHelp;
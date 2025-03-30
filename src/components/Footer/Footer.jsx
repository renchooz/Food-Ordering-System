import React from 'react'

const Footer = () => {
    return (
      <footer className='w-full bg-gray-900 text-white py-10 px-6'>
        <div className='max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          <div>
            <h2 className='text-lg font-semibold mb-3'>Frequently Asked Questions (FAQ)</h2>
            <ul className='text-gray-400 space-y-2'>
              <li>How to place an order?</li>
              <li>How can I track my order?</li>
              <li>What payment methods are accepted?</li>
              <li>Can I modify or cancel my order?</li>
              <li>What should I do if my order is delayed or incorrect?</li>
            </ul>
          </div>
          <div>
            <h2 className='text-lg font-semibold mb-3'>Contact Support</h2>
            <ul className='text-gray-400 space-y-2'>
              <li>Customer support email</li>
              <li>Phone number (if applicable)</li>
              <li>Live chat option (if available)</li>
              <li>Social media links for support</li>
            </ul>
          </div>
          <div>
            <h2 className='text-lg font-semibold mb-3'>Order Issues & Refunds</h2>
            <ul className='text-gray-400 space-y-2'>
              <li>Steps to report a missing/wrong item</li>
              <li>Refund & cancellation policy</li>
              <li>How long does it take to get a refund?</li>
            </ul>
          </div>
          <div>
            <h2 className='text-lg font-semibold mb-3'>Account & Login Help</h2>
            <ul className='text-gray-400 space-y-2'>
              <li>How to reset your password</li>
              <li>How to change account details (email, phone number, address)</li>
              <li>How to delete your account</li>
            </ul>
          </div>
          <div>
            <h2 className='text-lg font-semibold mb-3'>Delivery & Pickup Information</h2>
            <ul className='text-gray-400 space-y-2'>
              <li>Estimated delivery times</li>
              <li>Areas covered for delivery</li>
              <li>How to schedule a pickup order</li>
            </ul>
          </div>
          <div>
            <h2 className='text-lg font-semibold mb-3'>Accessibility Support</h2>
            <ul className='text-gray-400 space-y-2'>
              <li>Features that help users with disabilities</li>
              <li>Screen reader-friendly navigation</li>
              <li>How to enable accessibility settings</li>
            </ul>
          </div>
          <div>
            <h2 className='text-lg font-semibold mb-3'>Special Requests & Custom Orders</h2>
            <ul className='text-gray-400 space-y-2'>
              <li>How to add special instructions to an order</li>
              <li>Dietary preferences & allergy information</li>
            </ul>
          </div>
        </div>
      </footer>
    );
  };

export default Footer
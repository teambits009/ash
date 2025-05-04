import React, { useState } from 'react';

const DonationForm = () => {
  const [amount, setAmount] = useState('');

  const handleDonate = () => {
    if (amount && !isNaN(amount) && amount > 0) {
      window.open(
        `https://www.paypal.com/donate?hosted_button_id=XXXXXXXXXXXXX&amount=${amount}`,
        '_blank',
        'noopener,noreferrer'
      );
    } else {
      alert('Please enter a valid amount.');
    }
  };

  return (
    <section id="donate" className="py-24 bg-white">
      <div className="container mx-auto flex flex-col items-center text-center px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Make a Donation</h2>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount ($)"
          className="border p-2 rounded mb-4"
        />
        <button
          onClick={handleDonate}
          className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300"
        >
          Donate Now
        </button>
      </div>
    </section>
  );
};
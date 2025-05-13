// src/utils/donation.js
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const sendDonation = async (amount, source) => {
  const response = await axios.post(`${BASE_URL}/api/payments/create-payment-intent/`, {
    amount: parseInt(amount),
    source,
    timestamp: new Date().toISOString(),
  });
  return response.data;
};

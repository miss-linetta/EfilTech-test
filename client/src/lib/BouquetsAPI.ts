import axios from 'axios';

import { API_BASE_URL } from '@/lib/instance';

export const getAllBouquets = async () => {
  try {
    return await axios.get(`${API_BASE_URL}/bouquets`, {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    throw new Error('Something went wrong. Please try again later.');
  }
};

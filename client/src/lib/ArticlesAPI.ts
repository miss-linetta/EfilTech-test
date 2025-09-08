import axios from 'axios';

import { API_BASE_URL } from '@/lib/instance';

export const getAllArticles = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/flowers`, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response;
  } catch (error) {
    throw new Error('Something went wrong. Please try again later.');
  }
};

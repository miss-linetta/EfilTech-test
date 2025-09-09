import axios from 'axios';

export const getAllBouquets = async () => {
  try {
    return await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/bouquets`, {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    throw new Error('Something went wrong. Please try again later.');
  }
};

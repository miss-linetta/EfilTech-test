import axios from 'axios';

export const getAllArticles = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/flowers`, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response;
  } catch (error) {
    throw new Error('Something went wrong. Please try again later.');
  }
};

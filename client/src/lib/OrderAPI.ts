import axios from 'axios';
import { OrderData } from '@/lib/types';

export const createOrder = async (orderData: OrderData) => {
  if (typeof window !== 'undefined') {
    console.log('Sending data:', orderData);
  }
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/orders`,
      orderData,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );

    if (typeof window !== 'undefined') {
      localStorage.removeItem('coupon_code');
    }

    return response.data;
  } catch (error: any) {
    if (typeof window !== 'undefined') {
      console.error('Error creating order:', error.response?.data || error.message);
    }
    return false;
  }
};

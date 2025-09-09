import axios, { AxiosResponse } from 'axios';

import { OrderData } from '@/lib/types';
import { OrderDetails } from '@/components/pages/order-details-page/types';

export const createOrder = async (orderData: OrderData) => {
  if (typeof window !== 'undefined') {
    console.log('Sending data:', orderData);
  }
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/orders`, orderData, {
      headers: { 'Content-Type': 'application/json' },
    });

    if (typeof window !== 'undefined') {
      localStorage.removeItem('coupon_code');
    }

    return response.data;
  } catch (error) {
    if (typeof window !== 'undefined') {
      console.error('Error creating order:', error);
    }
    return false;
  }
};

export const getOrderDetails = async (id: number): Promise<OrderDetails> => {
  const response: AxiosResponse<OrderDetails> = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/orders/details/${id}`,
  );
  return response.data;
};

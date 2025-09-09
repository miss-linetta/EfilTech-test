import axios, { AxiosResponse } from 'axios';

import { API_BASE_URL } from '@/lib/instance';
import { OrderDetails } from '@/components/pages/order-details-page/OrderDetailsPage';

export interface OrderItem {
  flower_id: number;
  quantity: number;
  price: number;
}

export interface OrderData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  delivery_instructions?: string;
  shipping_method: string;
  data_protection_accepted: boolean;
  newsletter_subscription: boolean;
  gift_message?: string;
  total_price: number;
  coupon_code?: string;
  items: OrderItem[];
}

export const createOrder = async (orderData: OrderData) => {
  if (typeof window !== 'undefined') {
    console.log('Sending data:', orderData);
  }
  try {
    const response = await axios.post(`${API_BASE_URL}/orders`, orderData, {
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
    `${API_BASE_URL}/orders/details/${id}`,
  );
  return response.data;
};

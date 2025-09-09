import axios, { AxiosError } from 'axios';

import { CouponValidationResult } from '@/lib/types';

const validateCoupon = async (
  coupon_code: string,
  cartTotal: number,
): Promise<CouponValidationResult> => {
  try {
    const response = await axios.post<CouponValidationResult>(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/coupons/validate`,
      { coupon_code, cartTotal },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    return response.data;
  } catch (err) {
    const error = err as AxiosError;

    if (error.response) {
      const contentType = error.response.headers['content-type'];

      if (contentType?.includes('application/json')) {
        const errorData = error.response.data as { error?: string };
        throw new Error(errorData.error || 'Failed to validate coupon');
      } else if (contentType?.includes('text/plain')) {
        throw new Error((error.response.data as string) || 'Failed to validate coupon');
      }
    } else if (error.request) {
      throw new Error('No response received from server');
    } else {
      throw new Error(error.message || 'An unknown error occurred');
    }

    throw new Error('Coupon validation failed');
  }
};

export default { validateCoupon };

export interface CouponValidationResult {
  newCartTotal: number;
  message: string;
}

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

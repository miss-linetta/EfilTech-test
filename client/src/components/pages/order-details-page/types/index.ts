export interface OrderItemDetails {
  flower_id: number;
  name: string;
  quantity: number;
  price: number;
}

export interface OrderDetails {
  id: number;
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
  coupon_id?: number | null;
  created_at: string;
  items: OrderItemDetails[];
}

export interface Flower {
  id: number;
  name: string;
  price: number;
  stock: number;
  shop_id: number;
  image_url: string | null;
}

export interface Bouquet {
  id: number;
  name: string;
  price: number;
  stock: number;
  shop_id: number;
  image_url: string | null;
}

export interface OrderItem {
  flower_id: number;
  quantity: number;
  price: number;
}

export interface OrderData {
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
  created_at: any;
  items: OrderItem[];
}

export interface ReqOrderData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  delivery_instructions: string;
  gift_message?: string;
  shippingMethod: 'DPD' | 'DHL' | 'DHL Express';
  dataProtectionAccepted: boolean;
  newsletter_subscription: boolean;
  totalPrice: number;
  coupon_code?: string;
}

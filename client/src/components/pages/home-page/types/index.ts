export interface Article {
  id: number;
  name: string;
  price: number | string;
  description?: string;
  image_url: string;
  stock?: number;
  shopName?: string;
}

export interface Bouquet {
  id: number;
  name: string;
  price: number;
  stock: number;
  shop_id: number;
  image_url?: string | null;
}

export interface Article {
  id: number;
  name: string;
  price: number | string;
  description?: string;
  imageUrl?: string;
  stock?: number;
  shopName?: string;
  type: 'flower' | 'bouquet';
}

export interface Bouquet {
  id: number;
  name: string;
  price: number;
  stock: number;
  shop_id: number;
  image_url?: string | null;
}

export interface Flower {
  id: number;
  name: string;
  price: number;
  stock: number;
  shop_id: number;
  image_url?: string | null;
}

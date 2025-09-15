export interface CartArticle {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image_url?: string;
  stock?: number;
  original_price?: number;
}

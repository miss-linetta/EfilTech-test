export interface CartArticle {
  article_id: number;
  name: string;
  price: number;
  quantity: number;
  image_url?: string;
  stock?: number;
  original_price?: number;
}

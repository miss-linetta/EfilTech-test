import { CartArticle } from '@/components/pages/shopping-cart-page/types';

export interface CartItemProps {
  item: CartArticle;
  onUpdateQuantity: (item: CartArticle) => void;
  onDelete: () => void;
}

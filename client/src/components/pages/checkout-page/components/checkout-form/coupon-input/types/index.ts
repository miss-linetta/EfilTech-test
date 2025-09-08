export type FeedbackType = '' | 'success' | 'error';

export interface CouponInputProps {
  cartTotal: number;
  onUpdateCartTotal: (newTotal: number) => void;
}

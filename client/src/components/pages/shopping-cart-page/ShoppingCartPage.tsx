import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

import * as styles from './ShoppingCartPage.styles';

import CartItem from '@/components/pages/shopping-cart-page/components/CartItem';
import CustomButton from '@/components/common/custom-button/CustomButton';
import { CartArticle } from '@/components/pages/shopping-cart-page/types';

const CART_KEY = 'cart';

const parsePrice = (v: unknown): number => {
  if (typeof v === 'number') return v;
  if (typeof v === 'string') {
    const cleaned = v.replace(',', '.').replace(/[^\d.-]/g, '');
    const n = parseFloat(cleaned);
    return isNaN(n) ? 0 : n;
  }
  return 0;
};

const parseQuantity = (v: unknown): number => {
  const n = typeof v === 'number' ? v : parseInt(String(v || '0'), 10);
  return isNaN(n) ? 0 : Math.max(0, n);
};

const normalizeCart = (items: CartArticle[]): CartArticle[] =>
  items.map((it) => ({
    ...it,
    price: parsePrice(it.price),
    quantity: parseQuantity(it.quantity),
  }));

const ShoppingCartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartArticle[]>([]);
  const [totalCost, setTotalCost] = useState<number>(0);

  useEffect(() => {
    const storedCart = localStorage.getItem(CART_KEY);
    if (storedCart) {
      const data: CartArticle[] = JSON.parse(storedCart);
      const normalized = normalizeCart(data);
      setCartItems(normalized);

      const total = normalized.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      );
      setTotalCost(total);

      localStorage.setItem(CART_KEY, JSON.stringify(normalized));
    }
  }, []);

  const updateLocalCart = (updatedItems: CartArticle[]) => {
    const normalized = normalizeCart(updatedItems);
    setCartItems(normalized);

    const total = normalized.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    setTotalCost(total);

    localStorage.setItem(CART_KEY, JSON.stringify(normalized));
  };

  const handleUpdateQuantity = (article: CartArticle) => {
    const updatedCartItems = cartItems
      .map((item) =>
        item.id === article.id
          ? { ...item, quantity: article.quantity }
          : item,
      )
      .filter((item) => item.quantity > 0);

    updateLocalCart(updatedCartItems);
  };

  const handleDelete = (article: CartArticle) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.id !== article.id,
    );
    updateLocalCart(updatedCartItems);
  };

  return (
    <Box>
      <Box sx={styles.container}>
        <Typography variant="h1" gutterBottom>
          Shopping Cart
        </Typography>

        {cartItems.length === 0 ? (
          <Typography variant="h6" color="textSecondary">
            Your cart is empty.
          </Typography>
        ) : (
          <Box sx={styles.itemsList}>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={handleUpdateQuantity}
                onDelete={() => handleDelete(item)}
              />
            ))}
          </Box>
        )}

        {cartItems.length > 0 && (
          <Box sx={styles.totalContainer}>
            <Typography variant="h3">
              Total: {totalCost.toFixed(2)} EUR
            </Typography>
            <CustomButton
              title="Proceed to Checkout"
              onClick={() => (window.location.href = '/checkout')}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ShoppingCartPage;

import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

import * as styles from './ShoppingCartPage.styles';

import CartItem from '@/components/pages/shopping-cart-page/components/CartItem';
import CustomButton from '@/components/common/custom-button/CustomButton';
import { CartArticle } from '@/components/pages/shopping-cart-page/types';

const CART_KEY = 'cart';

const ShoppingCartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartArticle[]>([]);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const storedCart = localStorage.getItem(CART_KEY);
    if (storedCart) {
      const data: CartArticle[] = JSON.parse(storedCart);
      setCartItems(data);
      const total = data.reduce((sum, item) => sum + item.price * item.quantity, 0);
      setTotalCost(total);
    }
  }, []);

  const updateLocalCart = (updatedItems: CartArticle[]) => {
    localStorage.setItem(CART_KEY, JSON.stringify(updatedItems));
    setCartItems(updatedItems);
    const total = updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalCost(total);
  };

  const handleUpdateQuantity = (article: CartArticle) => {
    const updatedCartItems = cartItems
      .map((item) =>
        item.article_id === article.article_id ? { ...item, quantity: article.quantity } : item,
      )
      .filter((item) => item.quantity > 0);

    updateLocalCart(updatedCartItems);
  };

  const handleDelete = (article: CartArticle) => {
    const updatedCartItems = cartItems.filter((item) => item.article_id !== article.article_id);
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
                key={item.article_id}
                item={item}
                onUpdateQuantity={handleUpdateQuantity}
                onDelete={() => handleDelete(item)}
              />
            ))}
          </Box>
        )}

        {cartItems.length > 0 && (
          <Box sx={styles.totalContainer}>
            <Typography variant="h3">Total: {totalCost} EUR</Typography>
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

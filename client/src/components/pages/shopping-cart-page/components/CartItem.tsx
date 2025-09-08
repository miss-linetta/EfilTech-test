import React, { useState } from 'react';
import { Box, Card, CardContent, IconButton, TextField, Typography } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import * as styles from './CartItem.styles';

import CustomButton from '@/components/common/custom-button/CustomButton';
import { CartArticle } from '@/components/pages/shopping-cart-page/types';

interface CartItemProps {
  item: CartArticle;
  onUpdateQuantity: (item: CartArticle) => void;
  onDelete: (item: CartArticle) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onUpdateQuantity, onDelete }) => {
  const [quantity, setQuantity] = useState<number>(item.quantity || 1);

  const canIncrease = quantity < (item.stock || Infinity);

  const itemPrice = item.price || 0;
  const originalPrice = item.original_price || itemPrice;

  const discountPercentage = quantity === 8 ? 8 : quantity === 16 ? 16 : 0;
  const discountAmount = originalPrice * (discountPercentage / 100);
  const discountedPrice = discountPercentage ? originalPrice - discountAmount : itemPrice;

  const handleIncrease = () => {
    if (canIncrease) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onUpdateQuantity({ ...item, quantity: newQuantity });
      window.dispatchEvent(new CustomEvent('cartUpdate'));
    }
  };

  const handleDecrease = () => {
    const newQuantity = Math.max(0, quantity - 1);
    setQuantity(newQuantity);
    onUpdateQuantity({ ...item, quantity: newQuantity });
    window.dispatchEvent(new CustomEvent('cartUpdate'));
  };

  const handleQuantityChange = (value: number) => {
    const newQuantity = Math.max(1, value);
    setQuantity(newQuantity);
    onUpdateQuantity({ ...item, quantity: newQuantity });
    window.dispatchEvent(new CustomEvent('cartUpdate'));
  };

  return (
    <Card>
      <CardContent sx={styles.cardStyles}>
        <Typography variant="h5" sx={styles.nameTextStyles}>
          {item.name}
        </Typography>

        <Box>
          {discountPercentage > 0 ? (
            <>
              <Typography variant="body1" sx={styles.priceTextStyles}>
                Original Price: <s>{originalPrice.toFixed(2)} EUR</s>
              </Typography>
              <Typography variant="body1" sx={styles.priceTextStyles}>
                Discounted Price: {discountedPrice.toFixed(2)} EUR
              </Typography>
              <Typography variant="body2" color="success.main">
                {discountPercentage}% Discount Applied
              </Typography>
            </>
          ) : (
            <Typography variant="body1" sx={styles.priceTextStyles}>
              Price: {itemPrice} EUR
            </Typography>
          )}
        </Box>

        <Box sx={styles.quantityContainer}>
          <IconButton onClick={handleDecrease}>
            <RemoveIcon />
          </IconButton>
          <TextField
            value={quantity}
            onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
            sx={styles.smallSquareInput}
            variant="outlined"
            inputProps={{ min: 1 }}
          />
          <IconButton onClick={handleIncrease} disabled={!canIncrease}>
            <AddIcon />
          </IconButton>
        </Box>

        <Box sx={styles.buttonContainer}>
          <CustomButton
            size="small"
            onClick={() => {
              onDelete(item);
              window.dispatchEvent(new CustomEvent('cartUpdate'));
            }}
            title="Delete"
            sx={styles.button}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default CartItem;

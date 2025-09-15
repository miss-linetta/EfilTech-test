import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import * as styles from './CartItem.styles';

import CustomButton from '@/components/common/custom-button/CustomButton';
import { CartItemProps } from '@/components/pages/shopping-cart-page/components/types';

const CartItem: React.FC<CartItemProps> = ({ item, onUpdateQuantity, onDelete }) => {
  const [quantity, setQuantity] = useState<number>(item.quantity || 1);

  const itemPrice = item.price || 0;
  const subtotal = itemPrice * quantity;

  const canIncrease = quantity < (item.stock || Infinity);

  const handleIncrease = () => {
    if (canIncrease) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onUpdateQuantity({ ...item, quantity: newQuantity });
    }
  };

  const handleDecrease = () => {
    const newQuantity = Math.max(0, quantity - 1);
    setQuantity(newQuantity);
    onUpdateQuantity({ ...item, quantity: newQuantity });
  };

  const handleQuantityChange = (value: number) => {
    const newQuantity = Math.max(0, value);
    setQuantity(newQuantity);
    onUpdateQuantity({ ...item, quantity: newQuantity });
  };

  return (
    <Card>
      <CardContent sx={styles.cardStyles}>
        <Typography variant="h5" sx={styles.nameTextStyles}>
          {item.name}
        </Typography>

        <Box>
          <Typography variant="body1" sx={styles.priceTextStyles}>
            Price: {itemPrice.toFixed(2)} EUR
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Subtotal: {subtotal.toFixed(2)} EUR
          </Typography>
        </Box>

        <Box sx={styles.quantityContainer}>
          <IconButton onClick={handleDecrease}>
            <RemoveIcon />
          </IconButton>
          <TextField
            type="number"
            value={quantity}
            onChange={(e) =>
              handleQuantityChange(parseInt(e.target.value || '0', 10))
            }
            sx={styles.smallSquareInput}
            variant="outlined"
            inputProps={{ min: 0 }}
          />
          <IconButton onClick={handleIncrease} disabled={!canIncrease}>
            <AddIcon />
          </IconButton>
        </Box>

        <Box sx={styles.buttonContainer}>
          <CustomButton
            size="small"
            onClick={onDelete}
            title="Delete"
            sx={styles.button}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default CartItem;

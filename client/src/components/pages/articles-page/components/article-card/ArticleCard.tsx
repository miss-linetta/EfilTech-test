import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  IconButton,
  TextField,
  Button,
  Snackbar,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import * as styles from './ArticleCard.styles';

import CustomButton from '@/components/common/custom-button/CustomButton';
import {
  ArticleCardProps,
  CartArticle,
} from '@/components/pages/articles-page/components/article-card/types';

const ArticleCard: React.FC<ArticleCardProps> = ({ item }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(Math.max(1, quantity - 1));
  const handleClear = () => setQuantity(1);

  const onAddToCart = () => {
    const cartData: CartArticle[] = JSON.parse(localStorage.getItem('cart') || '[]');

    const existingIndex = cartData.findIndex((cartItem) => cartItem.id === item.id);

    if (existingIndex >= 0) {
      cartData[existingIndex].quantity += quantity;
    } else {
      cartData.push({ ...item, quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cartData));

    setOpenSnackbar(true);
    window.dispatchEvent(new CustomEvent('cartUpdate'));
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Card sx={styles.cardStyles}>
      <CardMedia
        component="img"
        height="250"
        image={item.imageUrl}
        alt={item.name}
        sx={styles.mediaStyles}
      />
      <CardContent>
        <Typography variant="h5" sx={styles.nameTextStyles}>
          {item.name}
        </Typography>
        <Typography variant="h6" sx={styles.priceTextStyles}>
          {item.price} EUR
        </Typography>

        <Box sx={styles.quantityContainer}>
          <IconButton onClick={handleDecrease}>
            <RemoveIcon />
          </IconButton>
          <TextField
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            sx={styles.smallSquareInput}
            variant="outlined"
            inputProps={{ min: 1 }}
          />
          <IconButton onClick={handleIncrease}>
            <AddIcon />
          </IconButton>
          <Button onClick={handleClear} sx={styles.clearButton}>
            Reset
          </Button>
        </Box>

        <Box sx={styles.buttonContainer}>
          <CustomButton
            size="small"
            onClick={onAddToCart}
            title={`Add ${quantity} to Cart`}
            sx={styles.button}
          />
        </Box>
      </CardContent>

      <Snackbar
        open={openSnackbar}
        onClose={handleCloseSnackbar}
        message={`Added ${quantity} of ${item.name} to cart!`}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={2000}
      />
    </Card>
  );
};

export default ArticleCard;

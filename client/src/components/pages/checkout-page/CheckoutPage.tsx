import React from 'react';
import { Box, Typography } from '@mui/material';

import * as styles from './CheckoutPage.styles';

import CheckoutForm from '@/components/pages/checkout-page/components/checkout-form/CheckoutForm';

const CheckoutPage: React.FC = () => {
  return (
    <Box sx={styles.container}>
      <Typography variant="h1" gutterBottom>
        Checkout
      </Typography>
      <CheckoutForm />
    </Box>
  );
};

export default CheckoutPage;

import React from 'react';
import { Box, Typography } from '@mui/material';

import * as styles from './TermsOfServicePage.styles';

const TermsOfServicePage = () => {
  return (
    <Box sx={styles.pageContainer}>
      <Typography variant="h1" sx={styles.pageTitle}>
        Terms of Service
      </Typography>
      <Typography variant="body1" sx={styles.policyText}>
        These Terms of Service outline the rules for using Bloom & Grace’s website and services. By
        placing an order with us, you agree to follow these terms.
      </Typography>
      <Typography variant="body1" sx={styles.policyText}>
        We strive to ensure all product descriptions, prices, and availability are accurate, but we
        reserve the right to update or correct information at any time. Orders may be canceled if
        flowers are unavailable, with a full refund provided.
      </Typography>
      <Typography variant="body1" sx={styles.policyText}>
        You agree to provide accurate and complete information when placing an order. We are not
        responsible for delays or failed deliveries caused by incorrect or incomplete details.
      </Typography>
      <Typography variant="body1" sx={styles.policyText}>
        All payments must be made at the time of purchase. We accept refunds and exchanges only in
        line with our Return Policy.
      </Typography>
      <Typography variant="body1" sx={styles.policyText}>
        Bloom & Grace reserves the right to refuse service, terminate accounts, or cancel orders at
        our discretion if we believe these terms are violated.
      </Typography>
    </Box>
  );
};

export default TermsOfServicePage;

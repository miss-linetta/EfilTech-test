import React from 'react';
import { Box, Typography } from '@mui/material';

import * as styles from './PrivacyPolicyPage.styles';

const PrivacyPolicyPage = () => {
  return (
    <Box sx={styles.pageContainer}>
      <Typography variant="h1" sx={styles.pageTitle}>
        Privacy Policy
      </Typography>
      <Typography variant="body1" sx={styles.policyText}>
        This Privacy Policy explains how Bloom & Grace collects, uses, and protects your personal
        information when you shop with us. We are committed to keeping your data safe and secure.
      </Typography>
      <Typography variant="body1" sx={styles.policyText}>
        When placing an order, we may collect information such as your name, address, phone number,
        email, and payment details. This information is used only to process your orders, provide
        customer support, and improve our services.
      </Typography>
      <Typography variant="body1" sx={styles.policyText}>
        We take appropriate security measures to protect your data from unauthorized access,
        alteration, disclosure, or destruction. Your personal information will never be sold or
        shared with third parties, except where required by law or when necessary to complete your
        order (e.g., delivery services).
      </Typography>
      <Typography variant="body1" sx={styles.policyText}>
        By using our website, you agree to this policy. Bloom & Grace may update this policy from
        time to time, so please check this page regularly to stay informed.
      </Typography>
    </Box>
  );
};

export default PrivacyPolicyPage;

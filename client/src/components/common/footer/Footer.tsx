import React from 'react';
import { Box, Typography } from '@mui/material';

import * as styles from './Footer.styles';

const Footer: React.FC = () => {
  return (
    <Box sx={styles.footerContainer}>
      <Box sx={styles.logoContainer}>
        <Typography variant="h6" sx={styles.logo}>
          CRISP
        </Typography>
      </Box>

      <Box sx={styles.footerContent}>
        <Typography variant="h6">CRISP</Typography>
        <Typography variant="body2">© 2025 CRISP. All rights reserved.</Typography>
        <Box sx={styles.footerLinks}>
          <Typography component="a" href="/privacy-policy">
            Privacy Policy
          </Typography>
          <Typography component="a" href="/terms-of-service">
            Terms of Service
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

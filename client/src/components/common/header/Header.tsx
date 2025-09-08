import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import * as styles from './Header.styles';

const Header: React.FC = () => {
  return (
    <Box sx={styles.headerContainer}>
      <Box sx={styles.logoContainer}>
        <Link href="/" underline="none" sx={{ color: '#fff' }}>
          <Typography variant="h6" sx={styles.logo}>
            CRISP
          </Typography>
        </Link>
      </Box>

      <Box sx={styles.navLinksContainer}>
        <Link href="/" underline="none" sx={styles.navLink}>
          Home
        </Link>
        <Link href="/articles" underline="none" sx={styles.navLink}>
          Shop
        </Link>
        <Link href="/about" underline="none" sx={styles.navLink}>
          About Us
        </Link>
      </Box>

      <Box sx={styles.accountCartContainer}>
        <Box sx={styles.cartContainer}>
          <Link href="/shopping-cart" underline="none">
            <ShoppingCartIcon />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;

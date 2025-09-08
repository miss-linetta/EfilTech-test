import React from 'react';
import { Box, Typography } from '@mui/material';

import * as styles from './AboutPage.styles';

const AboutPage = () => {
  return (
    <Box sx={styles.pageContainer}>
      <Typography variant="h1" sx={styles.pageTitle}>
        About Us
      </Typography>
      <Typography variant="body1" sx={styles.aboutUsText}>
        At Bloom & Grace, we believe flowers have the power to brighten any moment and create
        lasting memories. Our passion lies in curating beautiful, fresh, and unique floral
        arrangements that bring joy to every occasion.
      </Typography>
      <Typography variant="body1" sx={styles.aboutUsText}>
        Whether you're celebrating a birthday, wedding, anniversary, or simply want to surprise
        someone special, we are here to help you express your emotions with elegance and style. Each
        bouquet is crafted with love, care, and attention to detail to ensure the highest quality
        and freshness.
      </Typography>
      <Typography variant="body1" sx={styles.aboutUsText}>
        Our mission is to make gifting flowers easy, delightful, and memorable. From classic roses
        to seasonal blooms and custom-designed arrangements, we offer a wide selection tailored to
        your needs. With reliable delivery and exceptional customer service, we ensure your gift
        arrives on time and in perfect condition.
      </Typography>
      <Typography variant="body1" sx={styles.aboutUsText}>
        At Bloom & Grace, we are more than just a flower shop – we are your trusted partner in
        celebrating life’s most cherished moments with beauty and grace.
      </Typography>
    </Box>
  );
};

export default AboutPage;

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Box } from '@mui/material';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import * as styles from './Carousel.styles';

import { CarouselItem } from '@/components/pages/home-page/components/carousel/types';

const CarouselComponent: React.FC = () => {
  const carouselItems: CarouselItem[] = [
    {
      title: 'First Item',
      imageUrl: 'https://wallpaper.forfun.com/fetch/c0/c0030d0fafbbb763a77f499307eeeb10.jpeg',
    },
    {
      title: 'Second Item',
      imageUrl: 'https://dingo.com.ua/source/flowers/436.jpg',
    },
    {
      title: 'Third Item',
      imageUrl:
        'https://img.wallpapic.com.ua/i0018-435-919/medium/kviti-pelyustka-tyulpan-chervoni-shpalery.jpg',
    },
  ];

  return (
    <Box sx={styles.container}>
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} emulateTouch swipeable>
        {carouselItems.map((item, index) => (
          <Box key={index} sx={styles.carouselItem}>
            <img
              src={item.imageUrl}
              alt={item.title}
              style={styles.carouselImage as React.CSSProperties}
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default CarouselComponent;

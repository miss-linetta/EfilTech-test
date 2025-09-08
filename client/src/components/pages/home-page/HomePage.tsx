import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';

import Carousel from '@/components/pages/home-page/components/carousel/Carousel';
import ArticleCard from '@/components/pages/articles-page/components/article-card/ArticleCard';
import CustomButton from '@/components/common/custom-button/CustomButton';
import * as styles from '@/components/pages/home-page/HomePage.styles';
import { Article, Bouquet } from '@/components/pages/home-page/types';
import { getAllBouquets } from '@/lib/BouquetsAPI';

const HomePage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);

        const bouquetsRes = await getAllBouquets();

        const bouquets: Article[] = bouquetsRes.data.map((b: Bouquet & { shop_name: string }) => ({
          id: b.id,
          name: b.name,
          price: b.price,
          imageUrl: b.image_url || undefined,
          stock: b.stock,
          shopName: b.shop_name,
          type: 'bouquet',
        }));

        setArticles(bouquets.slice(0, 3));
        setLoading(false);
      } catch (error: any) {
        console.error('Error fetching articles:', error.message);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const handleShowMore = () => {
    router.push('/articles');
  };

  return (
    <Box>
      <Box sx={styles.container}>
        <Box sx={styles.mainContainer}>
          <Box sx={styles.textContainer}>
            <Typography variant="h1">Say It with Flowers</Typography>
            <Typography variant="h2">
              Order elegant bouquets with delivery for any occasion
            </Typography>
          </Box>
          <Box sx={styles.carouselContainer}>
            <Carousel />
          </Box>
        </Box>

        <Box id="about-us" sx={styles.aboutUsContainer}>
          <Box sx={styles.aboutUsTextContainer}>
            <Typography variant="body1">
              Whether you're celebrating a birthday, wedding, anniversary, or simply want to
              surprise someone special, we are here to help you express your emotions with elegance
              and style. Each bouquet is crafted with love, care, and attention to detail to ensure
              the highest quality and freshness.
            </Typography>
            <Typography variant="body1">
              Our mission is to make gifting flowers easy, delightful, and memorable. From classic
              roses to seasonal blooms and custom-designed arrangements, we offer a wide selection
              tailored to your needs. With reliable delivery and exceptional customer service, we
              ensure your gift arrives on time and in perfect condition.
            </Typography>
          </Box>
          <Box sx={styles.aboutUsTitleContainer}>
            <Typography variant="h2">About Us</Typography>
          </Box>
        </Box>

        <Box sx={styles.articlesContainers}>
          <Typography variant="h2">Our Top Sales</Typography>
          <Box sx={styles.itemsContainers}>
            <Box>
              {loading ? (
                <Typography>Loading...</Typography>
              ) : (
                articles.map((article) => <ArticleCard key={article.id} item={article} />)
              )}
            </Box>
            <Box sx={styles.buttonContainers}>
              <CustomButton title="Show More" onClick={handleShowMore} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;

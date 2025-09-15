import React, { useEffect, useMemo, useState } from 'react';
import { Box, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

import * as styles from './ArticlesPage.styles';

import ArticleCard from '@/components/pages/articles-page/components/article-card/ArticleCard';
import SortOptions from '@/components/common/sorting/SortOptions';
import { Article, Bouquet, Flower } from '@/components/pages/articles-page/types';
import { getAllBouquets } from '@/lib/BouquetsAPI';
import { getAllArticles } from '@/lib/ArticlesAPI';

const ArticlesPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [sortOption, setSortOption] = useState<'priceAsc' | 'priceDesc' | 'nameAsc' | 'nameDesc'>(
    'priceAsc',
  );
  const [loading, setLoading] = useState<boolean>(true);

  const [shopFilter, setShopFilter] = useState<string | 'all'>('all');
  const [typeFilter, setTypeFilter] = useState<'all' | 'flower' | 'bouquet'>('all');

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);

        const [flowersRes, bouquetsRes] = await Promise.all([getAllArticles(), getAllBouquets()]);

        const flowers: Article[] = flowersRes.data.map((f: Flower & { shop_name: string }) => ({
          id: f.id,
          name: f.name,
          price: f.price,
          imageUrl: f.image_url || undefined,
          stock: f.stock,
          shopName: f.shop_name,
          type: 'flower',
        }));

        const bouquets: Article[] = bouquetsRes.data.map((b: Bouquet & { shop_name: string }) => ({
          id: b.id,
          name: b.name,
          price: b.price,
          imageUrl: b.image_url || undefined,
          stock: b.stock,
          shopName: b.shop_name,
          type: 'bouquet',
        }));

        setArticles([...flowers, ...bouquets]);
        setLoading(false);
      } catch (error: any) {
        console.error('Error fetching articles:', error.message);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const safeParsePrice = (price: number | string | undefined) =>
    price ? parseFloat(String(price)) : 0;

  const shopNames = useMemo(() => {
    const names = Array.from(new Set(articles.map((a) => a.shopName).filter(Boolean)));
    return names;
  }, [articles]);

  const filteredAndSortedItems = useMemo(() => {
    if (!articles || articles.length === 0) return [];

    let filtered = [...articles];

    if (shopFilter !== 'all') {
      filtered = filtered.filter(
        (item) => (item.shopName ?? '').toLowerCase() === shopFilter.toLowerCase(),
      );
    }

    if (typeFilter !== 'all') {
      filtered = filtered.filter((item) => item.type === typeFilter);
    }

    return filtered.sort((a, b) => {
      switch (sortOption) {
        case 'priceAsc':
          return safeParsePrice(a.price) - safeParsePrice(b.price);
        case 'priceDesc':
          return safeParsePrice(b.price) - safeParsePrice(a.price);
        case 'nameAsc':
          return a.name.localeCompare(b.name);
        case 'nameDesc':
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });
  }, [articles, sortOption, shopFilter, typeFilter]);

  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredAndSortedItems.slice(startIndex, endIndex);
  }, [filteredAndSortedItems, currentPage]);

  return (
    <Box>
      <Box sx={styles.pageContainer}>
        <Typography variant="h1">Shop</Typography>
        <Box sx={styles.mainContainer}>
          {loading ? (
            <Box>Loading...</Box>
          ) : (
            <Box sx={styles.articlesContainer}>
              <Box sx={styles.filtersContainer}>
                <FormControl size="small" sx={styles.selectControl}>
                  <Typography sx={styles.label}>Shop:</Typography>
                  <Select
                    labelId="shop-filter-label"
                    value={shopFilter}
                    onChange={(e) => setShopFilter(e.target.value)}
                    sx={styles.select}
                  >
                    <MenuItem value="all">All</MenuItem>
                    {shopNames.map((name) => (
                      <MenuItem key={name} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl size="small" sx={styles.selectControl}>
                  <Typography sx={styles.label}>Type:</Typography>
                  <Select
                    labelId="type-filter-label"
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value as 'all' | 'flower' | 'bouquet')}
                    sx={styles.select}
                  >
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="flower">Flowers</MenuItem>
                    <MenuItem value="bouquet">Bouquets</MenuItem>
                  </Select>
                </FormControl>

                <SortOptions
                  sortOption={sortOption}
                  setSortOption={setSortOption}
                  pageType="articles"
                />
              </Box>

              <Box sx={styles.articlesList}>
                {paginatedItems.map((item) => (
                  <ArticleCard key={`${item.type}-${item.id}`} item={item} />
                ))}
              </Box>
            </Box>
          )}
        </Box>
        <Box sx={styles.paginationContainer}>
          {Array.from(
            { length: Math.ceil(filteredAndSortedItems.length / itemsPerPage) },
            (_, i) => (
              <Box
                key={i}
                sx={styles.paginationItem(currentPage === i + 1)}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </Box>
            ),
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ArticlesPage;

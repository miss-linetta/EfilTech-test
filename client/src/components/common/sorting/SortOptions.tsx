import React from 'react';
import { Box, MenuItem, Select, Typography, SelectChangeEvent } from '@mui/material';

import * as styles from './SortOptions.styles';

import { PageType, SortOption, SortOptionsProps } from '@/components/common/sorting/types';

const sortOptionsMap: Record<PageType, SortOption[]> = {
  articles: [
    { value: 'priceAsc', label: 'Price (Low to High)' },
    { value: 'priceDesc', label: 'Price (High to Low)' },
    { value: 'nameAsc', label: 'Name (A to Z)' },
    { value: 'nameDesc', label: 'Name (Z to A)' },
  ],
  orders: [
    { value: 'date_desc', label: 'Date (Newest First)' },
    { value: 'date_asc', label: 'Date (Oldest First)' },
    { value: 'amount_desc', label: 'Total Amount (High to Low)' },
    { value: 'amount_asc', label: 'Total Amount (Low to High)' },
  ],
};

const SortOptions: React.FC<SortOptionsProps> = ({ sortOption, setSortOption, pageType }) => {
  const options = sortOptionsMap[pageType] || [];

  const handleChange = (event: SelectChangeEvent<unknown>, _child: React.ReactNode) => {
    setSortOption(event.target.value as string);
  };

  return (
    <Box sx={styles.container}>
      <Typography sx={styles.label}>Sort by:</Typography>
      <Select value={sortOption} onChange={handleChange} sx={styles.select}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default SortOptions;

import React from 'react';

export interface SortOption<T extends string = string> {
  value: T;
  label: string;
}

export interface SortOptionsProps<T extends string = string> {
  sortOption: T;
  setSortOption: React.Dispatch<React.SetStateAction<T>>;
  pageType: 'articles' | 'orders';
}

export type PageType = 'articles' | 'orders';

export interface SortOption {
  value: string;
  label: string;
}

export interface SortOptionsProps {
  sortOption: string;
  setSortOption: (value: string) => void;
  pageType: PageType;
}

export type PageType = 'articles' | 'orders';

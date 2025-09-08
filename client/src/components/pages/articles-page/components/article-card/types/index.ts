import { Article } from '@/components/pages/articles-page/types';

export interface CartArticle extends Article {
  quantity: number;
}

export interface ArticleCardProps {
  item: Article;
}

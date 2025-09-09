import { Bouquet } from './types';
import pool from '../db';

export const getAllBouquets = async (): Promise<Bouquet[]> => {
  const result = await pool.query<Bouquet>(
    `SELECT b.id, b.name, b.price, b.stock, b.shop_id, b.image_url, s.name AS shop_name
        FROM bouquets b
        JOIN flower_shops s ON b.shop_id = s.id`,
  );
  return result.rows;
};

import {Flower} from "./types";
import pool from "../db";

export const getAllFlowers = async (): Promise<Flower[]> => {
    const result = await pool.query<Flower>(
        `SELECT f.id, f.name, f.price, f.stock, f.shop_id, f.image_url, s.name AS shop_name
     FROM flowers f
     JOIN flower_shops s ON f.shop_id = s.id`
    );
    return result.rows;
};
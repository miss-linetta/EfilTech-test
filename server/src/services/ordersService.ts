import pool from '../db';
import { OrderData } from './types';

export const createOrder = async (order: OrderData) => {
  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    const orderQuery = `
      INSERT INTO orders (
        first_name,
        last_name,
        email,
        phone,
        delivery_instructions,
        shipping_method,
        data_protection_accepted,
        newsletter_subscription,
        gift_message,
        total_price,
        coupon_id
      ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)
      RETURNING id;
    `;

    const orderValues = [
      order.first_name,
      order.last_name,
      order.email,
      order.phone,
      order.delivery_instructions || null,
      order.shipping_method,
      order.data_protection_accepted,
      order.newsletter_subscription,
      order.gift_message || null,
      order.total_price,
      order.coupon_id || null,
    ];

    const { rows } = await client.query(orderQuery, orderValues);
    const orderId = rows[0].id;

    const insertItemQuery = `
      INSERT INTO order_items (order_id, flower_id, quantity, price)
      VALUES ($1, $2, $3, $4);
    `;

    for (const item of order.items) {
      await client.query(insertItemQuery, [orderId, item.flower_id, item.quantity, item.price]);
    }

    await client.query('COMMIT');
    return { orderId };
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Error creating order:', error);
    throw error;
  } finally {
    client.release();
  }
};

import pool from "../db";
import { OrderData } from "./types";

export const getOrderById = async (orderId: number): Promise<OrderData | null> => {
    try {
        const orderRes = await pool.query(
            `SELECT id, first_name, last_name, email, phone, delivery_instructions, shipping_method, 
              data_protection_accepted, newsletter_subscription, gift_message, total_price, coupon_id, created_at
       FROM orders
       WHERE id = $1`,
            [orderId]
        );

        if (orderRes.rows.length === 0) return null;

        const order = orderRes.rows[0];

        const itemsRes = await pool.query(
            `SELECT flower_id, quantity, price
       FROM order_items
       WHERE order_id = $1`,
            [orderId]
        );

        const orderData: OrderData = {
            id: order.id,
            first_name: order.first_name,
            last_name: order.last_name,
            email: order.email,
            phone: order.phone,
            delivery_instructions: order.delivery_instructions,
            shipping_method: order.shipping_method,
            data_protection_accepted: order.data_protection_accepted,
            newsletter_subscription: order.newsletter_subscription,
            gift_message: order.gift_message,
            total_price: Number(order.total_price),
            coupon_id: order.coupon_id,
            created_at: order.created_at,
            items: itemsRes.rows.map((item: any) => ({
                flower_id: item.flower_id,
                quantity: item.quantity,
                price: Number(item.price),
            })),
        };

        return orderData;
    } catch (error) {
        console.error("Error fetching order by id:", error);
        throw error;
    }
};

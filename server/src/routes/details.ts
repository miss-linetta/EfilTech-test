import express from "express";
import {getOrderById} from "../services/orderDetailsService";

const router = express.Router();

router.get("/:id", async (req, res) => {
    const orderId = Number(req.params.id);

    if (isNaN(orderId)) {
        return res.status(400).json({ error: "Invalid order id" });
    }

    try {
        const order = await getOrderById(orderId);

        if (!order) {
            return res.status(404).json({ error: "Order not found" });
        }

        res.json(order);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch order" });
    }
});

export default router;
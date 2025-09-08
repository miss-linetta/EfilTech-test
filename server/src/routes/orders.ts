// src/routes/orders.ts
import express from "express";
import { OrderData } from "../services/types"; // <-- імпорт правильного типу
import { createOrder } from "../services/ordersService";

const router = express.Router();

router.post("/", async (req, res) => {
    const order: OrderData = req.body;

    try {
        const newOrder = await createOrder(order);
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ error: "Failed to create order" });
    }
});


export default router;

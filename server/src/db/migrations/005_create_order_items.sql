CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INT REFERENCES orders(id) ON DELETE CASCADE,
    flower_id INT REFERENCES flowers(id),
    quantity INT NOT NULL,
    price NUMERIC(10,2) NOT NULL
);

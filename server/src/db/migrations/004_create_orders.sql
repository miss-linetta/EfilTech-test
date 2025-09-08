CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    order_uid UUID DEFAULT gen_random_uuid(),
    customer_name VARCHAR(100) NOT NULL,
    customer_email VARCHAR(100),
    delivery_address TEXT NOT NULL,
    total_price NUMERIC(10,2) NOT NULL,
    coupon_id INT REFERENCES coupons(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

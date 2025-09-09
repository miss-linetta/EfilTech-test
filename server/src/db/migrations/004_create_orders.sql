CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    delivery_instructions TEXT,
    shipping_method VARCHAR(50) NOT NULL,
    data_protection_accepted BOOLEAN NOT NULL DEFAULT FALSE,
    newsletter_subscription BOOLEAN NOT NULL DEFAULT FALSE,
    gift_message TEXT,
    total_price NUMERIC(10,2) NOT NULL,
    coupon_id INT REFERENCES coupons(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
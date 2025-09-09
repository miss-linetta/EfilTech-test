CREATE TABLE flowers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price NUMERIC(10,2) NOT NULL,
    shop_id INT REFERENCES flower_shops(id) ON DELETE CASCADE,
    stock INT DEFAULT 0,
    image_url VARCHAR(255) NOT NULL
);

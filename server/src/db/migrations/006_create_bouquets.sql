CREATE TABLE bouquets (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    shop_id INT NOT NULL,
    stock INT NOT NULL,
    image_url VARCHAR(255) NOT NULL
);
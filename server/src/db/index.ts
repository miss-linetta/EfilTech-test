import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'flowershop_db',
  password: 'success',
  port: 5432,
});

export default pool;

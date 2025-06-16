const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

const connectDB = async () => {
  try {
    await pool.connect();
    console.log('PostgreSQL connected');
  } catch (err) {
    console.error('Database connection error:', err.stack);
    process.exit(1);
  }
};

module.exports = { pool, connectDB };
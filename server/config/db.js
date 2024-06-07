import { Pool } from "pg";

// Dynamically import and configure dotenv
async function loadEnv() {
  const dotenv = await import("dotenv");
  dotenv.config();
}

// Call the function to load environment variables
await loadEnv();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

pool.on("connect", () => {
  console.log("Connected to the database");
});

export default {
  query: (text, params) => pool.query(text, params),
};

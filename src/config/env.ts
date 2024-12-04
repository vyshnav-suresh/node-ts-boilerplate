import dotenv from "dotenv";

dotenv.config();

export const ENV = {
  PORT: process.env.PORT || 3000,
  DB_TYPE: process.env.DB_TYPE || "mongodb",
  // MongoDB
  MONGO_URI: process.env.MONGO_URI,
  // SQL Databases
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS,
  DB_HOST: process.env.DB_HOST,
};

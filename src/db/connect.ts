import { ENV } from "../config/env";
import { logger } from "../middlewares/logger";
import { connectToMongoDB } from "./mongoose";
import { connectToSQL } from "./sequelize";

export const connectToDatabase = async () => {
  switch (ENV.DB_TYPE) {
    case "mongodb":
      await connectToMongoDB(ENV.MONGO_URI || "");
      break;
    case "postgresql":
    case "mysql":
    case "sqlite":
      await connectToSQL();
      break;
    default:
      console.error("Unsupported DB_TYPE. Please check your .env file.");
      process.exit(1);
  }
};

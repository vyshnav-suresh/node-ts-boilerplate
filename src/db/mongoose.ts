import mongoose from "mongoose";
import { logger } from "../middlewares/logger";

export const connectToMongoDB = async (uri: string) => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error: any) {
    console.error(`MongoDB connection failed: ${error.message}`);
    process.exit(1);
  }
};

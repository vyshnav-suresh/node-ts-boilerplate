import { Sequelize } from "sequelize";
import { ENV } from "../config/env";
import { logger } from "../middlewares/logger";

export const connectToSQL = async () => {
  const sequelize = new Sequelize(ENV.DB_NAME!, ENV.DB_USER!, ENV.DB_PASS!, {
    host: ENV.DB_HOST || "localhost",
    dialect: ENV.DB_TYPE as "mysql" | "postgres" | "sqlite",
  });

  try {
    await sequelize.authenticate();
    console.log(`Connected to ${ENV.DB_TYPE}`);
  } catch (error: any) {
    console.error(`${ENV.DB_TYPE} connection failed: ${error.message}`);
    process.exit(1);
  }
};

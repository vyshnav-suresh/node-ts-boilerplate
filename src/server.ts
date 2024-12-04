import app from "./app";
import { ENV } from "./config/env";
import { connectToDatabase } from "./db/connect";
import { logger } from "./middlewares/logger";

const startServer = async () => {
  await connectToDatabase();

  app.listen(ENV.PORT, () => {
    console.log(`Server is running on http://localhost:${ENV.PORT}`);
  });
};

startServer();

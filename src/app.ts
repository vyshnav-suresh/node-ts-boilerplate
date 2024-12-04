import express from "express";
import router from "./routes";
import { errorHandler } from "./middlewares/errorHandler";
import { logger } from "./middlewares/logger";

const app = express();

// Middleware
app.use(express.json());
app.use(logger);
// Routes
app.use("/api", router);

// Error Handler
app.use(errorHandler);

export default app;

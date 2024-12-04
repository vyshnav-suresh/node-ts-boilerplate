import { Request, Response, NextFunction } from "express";

export const logger = (req: Request, res: Response, next: NextFunction) => {
  const startTime = Date.now();

  // Format the timestamp to IST
  const getISTTimestamp = () => {
    const options: Intl.DateTimeFormatOptions = {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return new Date().toLocaleString("en-IN", options);
  };

  // Log the request details
  console.log(`[${getISTTimestamp()}] ${req.method} ${req.originalUrl}`);

  // Listen for the response to finish to log its details
  res.on("finish", () => {
    const duration = Date.now() - startTime;
    console.log(
      `[${getISTTimestamp()}] ${req.method} ${req.originalUrl} - ${
        res.statusCode
      } (${duration}ms)`
    );
  });

  next();
};

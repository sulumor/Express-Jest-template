import winston from "winston";
import { transportCombinedConsole, transportCombinedFile, transportErrorFile } from "./transports.logger.js";

const transports = [];

if (process.env.NODE_ENV === "production") transports.push(transportCombinedFile, transportErrorFile);
else transports.push(transportCombinedConsole);

const logger = winston.createLogger({
  transports,
});
export default logger;

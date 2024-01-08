import winston from "winston";
import "winston-daily-rotate-file";

const {
  combine, printf, json, colorize, timestamp: now, label: category,
} = winston.format;

const consoleFormat = printf(({
  level, message, label, timestamp,
}) => `${timestamp} [${label}] ${level}: ${message}`);

export const transportCombinedFile = new winston.transports.DailyRotateFile({
  level: "http",
  filename: "./logs/combined.log",
  datePattern: "YYYY-MM-DD-HH",
  zippedArchive: true,
  maxFiles: "14d",
  format: combine(
    now(),
    json(),
  ),
});

export const transportErrorFile = new winston.transports.DailyRotateFile({
  level: "error",
  filename: "./logs/error.log",
  datePattern: "YYYY-MM-DD-HH",
  zippedArchive: true,
  maxFiles: "14d",
  format: combine(
    now(),
    json(),
  ),
});

export const transportCombinedConsole = new winston.transports.Console({
  level: "http",
  format: combine(
    category({ label: "all" }),
    now(),
    colorize(),
    consoleFormat,
  ),
});

import rateLimit from "express-rate-limit";

const Limiter = {
  base: rateLimit({
    windowMs: 60 * 1000, // 1 minute
    limit: 100, // 100 requêtes par minute par IP
  }),
  accountLogin: rateLimit({
    windowMs: 60 * 1000,
    limit: 5,
    message: "You have exceeded the 5 account login attempts per minute limit !",
  }),
};

export default Limiter;

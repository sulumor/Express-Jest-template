import jwt from "jsonwebtoken";
import ApiError from "../errors/api.error.js";

export default function authenticateToken(req, _, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) next(new ApiError("Null token", { httpStatus: 401 }));
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) next(new ApiError(err.message, { httpStatus: 403 }));
    req.user = user;
    next();
  });
}

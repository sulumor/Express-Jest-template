import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import ApiError from "../errors/api.error.js";
import CoreDatamapper from "../datamapper/core.datamapper.js";
import createJWT from "../helpers/jwt.function.js";

export default class AuthController {
  static async login({ body }, res, next) {
    const errorMessage = "Authentification failed";
    const errorInfos = { httpStatus: 401 };

    const [user] = await CoreDatamapper.findByParams({ where: { email: body.email } });
    if (!user) return next(new ApiError(errorMessage, errorInfos));

    const isPasswordCorrect = await bcrypt.compare(body.password, user.password);
    if (!isPasswordCorrect) return next(new ApiError(errorMessage, errorInfos));

    const token = createJWT(user);
    res.cookie("refresh_token", token.refreshToken, { httpOnly: true });

    return res.status(200).json(token);
  }

  // eslint-disable-next-line consistent-return
  static refreshToken({ cookies }, res, next) {
    const refreshToken = cookies.refresh_token;
    if (!refreshToken) return next(new ApiError("Null refresh token", { httpStatus: 401 }));
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) next(new ApiError(err.message, { httpStatus: 403 }));
      const token = createJWT(user);
      // { httpOnly: true, sameSite: "none", secure: true }
      res.cookie("refresh_token", token.refreshToken, { httpOnly: true });

      return res.status(200).json(token);
    });
  }

  static deleteToken(_, res) {
    res.clearCookie("refresh_token");
    return res.status(200).json({ message: "refresh token deleted" });
  }
}

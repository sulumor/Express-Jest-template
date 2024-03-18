import { Router } from "express";
import AuthController from "../../controllers/auth.controller.js";
import controllerWrapper from "../../helpers/controller.wrapper.js";
import validateMiddleware from "../../middlewares/validation.middleware.js";
import postSchema from "../../schemas/authentification/post.schema.js";
import Limiter from "../../helpers/rateLimiter.config.js";

const authRouter = Router();

/**
 * POST /login
 * @summary Login to the api
 * @tags Authentification
 * @param { LoginBody } request.body.required - Login info
 * @return  { Tokens } 200 - Success response - application/json
 * @return { ApiJsonError } 401 - Authentification failed response - application/json
 * @return { ApiJsonError } 500 - Internal Server Error response - application/json
 */
authRouter.post(
  "/login",
  Limiter.accountLogin,
  validateMiddleware("body", postSchema),
  controllerWrapper(AuthController.login.bind(AuthController)),
);

authRouter.route("/refresh_token")
/**
 * GET /refresh_token
 * @summary To have a new access token
 * @tags Authentification
 * @return  { Tokens } 200 - Success response - application/json
 * @return { ApiJsonError } 401 - Unathorized response - application/json
 * @return { ApiJsonError } 403 - Forbidden response - application/json
 * @return { ApiJsonError } 500 - Internal Server Error response - application/json
 */
  .get(controllerWrapper(AuthController.refreshToken.bind(AuthController)))

  /**
 * DELETE /refresh_token
 * @summary To delete the refresh token
 * @tags Authentification
 * @return { Message } 200 - Success response - application/json
 * @return { ApiJsonError } 500 - Internal Server Error response - application/json
 */
  .delete(controllerWrapper(AuthController.deleteToken.bind(AuthController)));

export default authRouter;

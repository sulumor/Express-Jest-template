import { Router } from "express";
import controllerWrapper from "../../helpers/controller.wrapper.js";
import ApiError from "../../errors/api.error.js";
import CoreController from "../../controllers/core.controller.js";

// * Ligne suivante a décommenter si utilisation de Joi validate('sourceProperty', schema)
// import validateMiddleware from "../middlewares/validation.middleware.js";

const apiRouter = Router();

/**
 * GET /
 * @summary ...
 * @return { Error } 500 - Internal Server Error response
 */
apiRouter.get("/", controllerWrapper(CoreController.getAll.bind(CoreController)));

apiRouter.use((_, __, next) => next(new ApiError("Ressource not found", { httpStatus: 404 })));

export default apiRouter;

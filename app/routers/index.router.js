import { Router } from "express";
import controllerWrapper from "../helpers/controller.wrapper.js";
import ApiError from "../errors/api.error.js";
import CoreController from "../controllers/core.controller.js";

// * Ligne suivante a décommenter si utilisation de Joi validate('dataProp', schema)
// import validateMiddleware from "../validations/validate.middleware.js";

const router = Router();

/**
 * GET /
 * @summary ...
 * @return { Error } 500 - Internal Server Error response
 */
router.get("/", controllerWrapper(CoreController.getAll.bind(CoreController)));

router.use((_, __, next) => next(new ApiError("Ressource not found", { httpStatus: 404 })));

export default router;

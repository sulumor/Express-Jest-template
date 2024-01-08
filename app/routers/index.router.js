import { Router } from "express";
import mainController from "../controllers/index.controller.js";
import controllerWrapper from "../helpers/controller.wrapper.js";

// * Ligne suivante a décommenter si utilisation de Joi validate('dataProp', schema)
// import validateMiddleware from "../validations/validate.middleware.js";

const router = Router();

/**
 * GET /
 * @summary ...
 * @return { Error } 500 - Internal Server Error response
 */
router.get("/", controllerWrapper(mainController.get));

router.use(mainController.notFound);

export default router;

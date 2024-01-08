import { Router } from "express";
import mainController from "../controllers/index.controller.js";
import controllerWrapper from "../helpers/controler.wrapper.js";

const router = Router();

/**
 * GET /
 * @summary ...
 * @return { Error } 500 - Internal Server Error response
 */
router.get("/", controllerWrapper(mainController.get));

router.use(mainController.notFound);

export default router;

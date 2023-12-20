import { Router } from "express";
import mainController from "../controllers/index.controller.js";

const router = Router();

router.get("/", mainController.get);

export default router;

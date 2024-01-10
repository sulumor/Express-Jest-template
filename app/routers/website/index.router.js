import express from "express";
import WebsiteError from "../../errors/website.error.js";
import controllerWrapper from "../../helpers/controller.wrapper.js";
import controller from "../../controllers/website.controller.js";

const websiteRouter = express.Router();

websiteRouter.route("/").get(controllerWrapper(controller.homePage));

websiteRouter.use((_, __, next) => {
  next(new WebsiteError("Page note Found", { httpStatus: 404 }));
});

export default websiteRouter;

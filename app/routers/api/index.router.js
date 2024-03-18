import { Router } from "express";
import controllerWrapper from "../../helpers/controller.wrapper.js";
import ApiError from "../../errors/api.error.js";
import CoreController from "../../controllers/core.controller.js";

// * Ligne suivante a décommenter si utilisation de Joi validate('sourceProperty', schema)
// import validateMiddleware from "../middlewares/validation.middleware.js";
// Mw a ajouter dans les routes avec la validations des données entrantes

const apiRouter = Router();

apiRouter.route("/:id(\\d+)")
/**
 * GET /api/{id}
 * @summary Get a ... from its id
 * @tags ...
 * @param { number } id.path.required - ... id
 * @return {} 200 - Success response - application/json
 * @return { ApiJsonError } 400 - Bad request response - application/json
 * @return { ApiJsonError } 404 - Not found response - application/json
 * @return { ApiJsonError } 500 - Internal Server Error response - application/json
*/
  .get(controllerWrapper(CoreController.getByPk.bind(CoreController)))

/**
 * PATCH /api/{id}
 * @summary Update a ...
 * @tags ...
 * @param { number } id.path.required - ... id
 * @param {} request.body.reauired - ... info
 * @return {} 200 - Success response - application/json
 * @return { ApiJsonError } 400 - Bad request response - application/json
 * @return { ApiJsonError } 404 - Not found response - application/json
 * @return { ApiJsonError } 500 - Internal Server Error response - application/json
*/
  .patch(controllerWrapper(CoreController.update.bind(CoreController)))

/**
 * DELETE /api/{id}
 * @summary Delete a ...
 * @tags ...
 * @param { number } id.path.required - ... id
 * @return { object } 204 - Success response
 * @return { ApiJsonError } 400 - Bad request response - application/json
 * @return { ApiJsonError } 404 - Not found response - application/json
 * @return { ApiJsonError } 500 - Internal Server Error response - application/json
*/
  .delete(controllerWrapper(CoreController.delete.bind(CoreController)));

apiRouter.route("/")
/**
 * GET /api/
 * @summary Get all ...
 * @tags ...
 * @return {} 200 - Success response - application/json
 * @return { ApiJsonError } 400 - Bad request response - application/json
 * @return { ApiJsonError } 500 - Internal Server Error response - application/json
 */
  .get(controllerWrapper(CoreController.getAll.bind(CoreController)))

  /**
   * POST /api/
   * @summary Add a ...
   * @tags ...
   * @param {} request.body.required - ... info
   * @return {} 200 - Success response - application/json
   * @return { ApiJsonError } 400 - Bad request response - application/json
   * @return { ApiJsonError } 500 - Internal Server Error - application/json
   */
  .post(controllerWrapper(CoreController.create.bind(CoreController)));

apiRouter.use((_, __, next) => next(new ApiError("Ressource not found", { httpStatus: 404 })));

export default apiRouter;

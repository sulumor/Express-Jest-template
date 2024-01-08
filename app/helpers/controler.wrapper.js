import ApiError from "../errors/api.error.js";

export default (controllerMdw) => async (req, res, next) => {
  try {
    await controllerMdw(req, res, next);
  } catch (err) {
    next(new ApiError(err.message, { httpStatus: 500 }));
  }
};

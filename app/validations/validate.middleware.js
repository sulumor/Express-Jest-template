import ApiError from "../errors/api.error.js";

export default (dataProp, schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req[dataProp]);
  } catch (err) {
    next(new ApiError(err.details[0].message, { httpStatus: 400 }));
  }
};

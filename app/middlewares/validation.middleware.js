import ApiError from "../errors/api.error.js";

export default (sourceProperty, schema) => async (req, _, next) => {
  try {
    await schema.validateAsync(req[sourceProperty]);
    next();
  } catch (err) {
    next(new ApiError(err.details[0].message, { httpStatus: 400 }));
  }
};

import logger from "../logger/index.logger.js";

// eslint-disable-next-line no-unused-vars
export default (err, _, res, __) => {
  if (err.httpStatus === 500) logger.error(null, err);
  return res.status(err.httpStatus).json({ error: err.message });
};

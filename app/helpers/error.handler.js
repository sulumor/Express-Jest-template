// eslint-disable-next-line no-unused-vars
export default (err, req, res, next) => res.status(err.httpStatus).json({ error: err.message });

import ApiError from "../errors/api.error.js";

const mainController = {
  notFound(_, __, next) {
    next(new ApiError("Ressource not found", { httpStatus: 404 }));
  },
  get(req, res) {
    res.json();
  },
};

export default mainController;

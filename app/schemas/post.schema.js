import Joi from "joi";

const frAlphaNum = /^[a-zA-ZÀ-ÿ0-9-]+$/;

export default Joi.object({
  name: Joi.string().pattern(frAlphaNum),
}).required();

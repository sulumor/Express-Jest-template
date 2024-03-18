import Joi from "joi";
import { passwordRegex } from "../regex.schema.js";

export default Joi.object({
  email: Joi.string()
    .messages({
      "string.empty": "Email is required",
    })
    .email({ minDomainSegments: 1 })
    .required(),
  password: Joi.string()
    .pattern(passwordRegex)
    .required()
    .messages({
      "string.empty": "Password is required",
      "string.pattern.base": "Password must contain at least 8 characters, 1 uppercase, 1 lowercase, 1 digit and 1 special character",
    }),
}).required();

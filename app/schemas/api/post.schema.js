import Joi from "joi";
import { frAlphaNum } from "../regex.schema.js";

export default Joi.object({
  name: Joi.string().pattern(frAlphaNum),
}).required();

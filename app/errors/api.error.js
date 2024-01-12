/**
 * @typedef {object} ApiJsonError - Error response
 * @property {string} error.required - Error message
 * @example
 * {
 *  "error": "Bad request"
 * }
 */

export default class ApiError extends Error {
  /**
   * Personnalizes Error Constructor to personnalized user response
   * @param {string} message contains literal message to communicate
   * @param {object} info dynamic object to add more informations to the error (ex: http status)
   */
  constructor(message, infos) {
    super(message);
    this.name = "Api error";
    this.format = "json";
    this.httpStatus = infos.httpStatus || 500;
    // * A décommenter pour ajouter plus de paramètres
    // Object.entries(infos).forEach(([key, value]) => {
    //   this[key] = value;
    // });
  }
}

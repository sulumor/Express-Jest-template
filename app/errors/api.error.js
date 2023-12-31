export default class ApiError extends Error {
  /**
   * Personnalizes Error Constructor to personnalized user response
   * @param {string} message contains literal message to communicate
   * @param {object} info dynamic object to add more informations to the error (ex: http status)
   */
  constructor(message, infos) {
    super(message);
    this.name = "Api error";
    Object.entries(infos).forEach(([key, value]) => {
      this[key] = value;
    });
  }
}

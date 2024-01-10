export default class WebsiteError extends Error {
  /**
   * Personnalizes Error Constructor to personnalized user response
   * @param {string} message contains literal message to communicate
   * @param {object} info dynamic object to add more informations to the error (ex: http status)
   */
  constructor(message, info) {
    super(message);
    this.name = "WebsiteError";
    this.format = "html";
    this.httpsStatus = info.httpsStatus || 500;
    // * A décommenter pour ajouter plus de paramètres
    // Object.entries(infos).forEach(([key, value]) => {
    //   this[key] = value;
    // });
  }
}

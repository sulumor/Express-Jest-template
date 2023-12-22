const mainController = {
  get(req, res) {
    try {
      res.json();
    } catch (error) {
      console.error(error);
    }
  },
};

export default mainController;

const authorController = require("../controllers/author.controller");

module.exports = (app) => {
  app.post("/author", authorController.createNewAuthor);
};

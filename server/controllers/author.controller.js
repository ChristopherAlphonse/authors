const Author = require("../models/authors.model");
const createNewAuthor = (req, res) => {
  Author.create(req.body)
    .then((newAuthor) => {
      res.json({ newAuthor });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};
module.exports = { createNewAuthor };

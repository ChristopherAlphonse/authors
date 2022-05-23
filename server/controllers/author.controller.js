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

const getAllAuthors = (req, res) => {
  Author.find()
    .then((allAuthors) => {
      res.json(allAuthors);
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

const getOneAuthor = (req, res) => {
  Author.findOne({ _id: req.params.id })
    .then((queriedOne) => {
      res.json({ queriedOne });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

const updateAuthor = (req, res) => {
  Author.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  }).catch((err) => {
    res.status(400).json({ err });
  });
};

const deleteAuthor = (req, res) => {
  Author.deleteOne({ _id: req.params.id })
    .then((deleteRequest) => {
      res.json({ deleteRequest });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

module.exports = {
  createNewAuthor,
  getAllAuthors,
  getOneAuthor,
  updateAuthor,
  deleteAuthor,
};

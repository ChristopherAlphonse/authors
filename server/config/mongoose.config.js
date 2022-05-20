const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/authors"),
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

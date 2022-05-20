const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/authors", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`database is established`);
  })
  .catch((err) => {
    console.log(`caught an error${err}`);
  });

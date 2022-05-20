const mongoose = require("mongoose");
const AuthorsSchema = {
  name: {
    type: String,
    required: [true, "name is required"],
    minLength: [4, "minimum 4 characters for te name"],
  },
};

module.exports = mongoose.model("Authors", AuthorsSchema);

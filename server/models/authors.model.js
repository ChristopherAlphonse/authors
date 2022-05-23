const mongoose = require("mongoose");
const AuthorsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      minLength: [4, "minimum 4 characters for the name"],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Authors", AuthorsSchema);

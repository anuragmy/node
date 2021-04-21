const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    username: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      maxlength: 32,
    },
    phone: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: { data: Buffer, contentType: String },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);
module.exports = User;

const mongoose = require("mongoose");
const validtaor = require("validator");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate(value) {
        if (!validtaor.isEmail(value)) {
          throw new Error("Email is invalid!");
        }
      },
    },
    password: {
      type: String,
      required: true,
      min: 6,
      trim: true,
      validate(value) {
        if (value.toLowerCase().includes("password")) {
          throw new Error('Password cannot contain "password"');
        }
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);

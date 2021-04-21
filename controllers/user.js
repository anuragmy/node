const User = require("../models/user");
const { errorHandler } = require("../utils");

exports.users = (req, res) => {
  User.find({}).exec((err, user) => {
    if (err || !user)
      return res.status(404).json({
        error: "User not found",
      });
    else
      return {
        user,
      };
  });
};

exports.userById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user)
      return res.status(404).json({
        error: "User not found",
      });
    req.profile = user;
    next();
  });
};

exports.update = (req, res) => {
  User.findOneAndUpdate(
    { _id: req.profile._id },
    { $set: req.body },
    { new: true },
    (err, data) => {
      if (err) return res.status(400).json({ err: errorHandler(err) });
      data.password = undefined;
      res.json({
        message: "Updated!",
        data,
      });
    }
  );
};

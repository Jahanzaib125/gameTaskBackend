const User = require('../models/userModel');

// Create User -- Admin
exports.createUser = async (req, res, next) => {
  const user = await User.create(req.body);
  res.status(201).json({
    success: true,
    user,
  });
};

// Get All User Data
exports.getAllUser = async (req, res, next) => {
  const user = await User.find();
  res.status(200).json({
    success: true,
    user: user,
    numberOfUsers: user.length,
  });
};

// Add Time on User Data
exports.addTime = async (req, res, next) => {
  const userTime = await User.findByIdAndUpdate(
    req.params.id,
    {
      $push: { time: req.body.time },
    },
    { new: true }
  );
  if (!userTime)
    return res.status(400).send('the user time cannot be updated!');

  res.status(200).send(userTime);
};

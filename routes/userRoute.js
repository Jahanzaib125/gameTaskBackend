const express = require('express');
const {
  createUser,
  getAllUser,
  addTime,
} = require('../controllers/userController');

const router = express.Router();

router.route('/users').post(createUser).get(getAllUser);
router.route('/users/:id').put(addTime);

module.exports = router;

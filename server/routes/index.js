const express = require('express');
const router = express.Router();
const { User } = require('../models/User');

router.post('/user', async (req, res) => {
  const check = await User.findOne({ login: req.body.login });
  if (!check) {
    const newUser = new User({
      login: req.body.login,
      password: req.body.password,
    })
    newUser.save();
    res.json(true);
  } else {
    res.json(false);
  }
});

module.exports = router;

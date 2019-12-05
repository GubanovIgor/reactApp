const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  console.log(req.body)
  res.json({1: 'hui'})
})

module.exports = router;